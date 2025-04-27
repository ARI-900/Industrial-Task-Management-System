import React, { createContext, useContext, useState, useEffect } from 'react';
import { setToLocalStorage, getFromLocalStorage, setToLocalStorageByKey } from '../utility/localStorage';
import toast from 'react-hot-toast';
import { FaLess } from 'react-icons/fa';




// Step 1: Create the Context
export const AppContext = createContext();




// Step 2: Create the Provider Component
export const AppProvider = ({ children }) => {


  const [employees, setEmployee] = useState(() => getFromLocalStorage('employees') || []);
  const [admin, setAdmin] = useState(() => getFromLocalStorage('admin') || []);
  const [user, setUser] = useState(() => getFromLocalStorage('user')); // Initialize from localStorage



  // Save to localStorage whenever there's a change
  useEffect(() => {
    if (employees.length > 0) {
      setToLocalStorageByKey('employees', employees);
    }
  }, [employees]);

  useEffect(() => {
    if (admin.length > 0) {
      setToLocalStorageByKey('admin', admin);
    }
  }, [admin]);

  useEffect(() => {
    if (user) {
      setToLocalStorageByKey('user', user);
    }
  }, [user]);



  // auth function: login ------------------------------------->>>>>>>>>>>>
  const login = (email, password) => {

    const foundEmployee = Array.isArray(employees) && employees.find(
      emp => emp.email === email && emp.password === password
    );
    const foundAdmin = Array.isArray(admin) && admin.find(
      adm => adm.email === email && adm.password === password
    );

    const loggedInUser = foundEmployee || foundAdmin;

    if (loggedInUser) {
      setUser(loggedInUser);
      setToLocalStorageByKey('user', loggedInUser); // Save logged-in user to localStorage
      return true;
    }

    return false;
  };



  // auth function: logout ------------------------------------------->>>>>>>>>>>>>>>>>>>>>
  const logout = () => {

    setUser([]);
    setToLocalStorageByKey('user', []); // Clear user from localStorage
  };




  // task provider function -------------------------------------------->>>>>>>>>>>>>>>>>
  const createTask = (taskForm) => {
    const { title, description, assignDate, deadlineDate, category, priority, assignedTo } = taskForm;

    if (!title || !description || !assignDate || !deadlineDate || !category || !priority || !assignedTo) {
      toast.error('Please fill all the fields');
      return false;
    }

    const newTask = {
      title,
      description,
      taskDate: assignDate,
      deadline: deadlineDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
      adminId: user?.id, // Assuming the logged-in user is an admin
      priority,
    };

    let empId;

    // Update employees
    const updatedEmployees = employees.map(emp => {
      if (emp.email === assignedTo) {
        empId = emp.id;
        const existing = Array.isArray(emp.tasks) ? emp.tasks : [];
        return {
          ...emp,
          tasks: [...existing, newTask],
        };
      }
      return emp;
    });

    // Check if any employee was updated
    const isEmployeeUpdated = updatedEmployees.some(emp => emp.tasks.some(task => task.newTask));
    if (!isEmployeeUpdated) {
      toast.error("No employee found with the provided email.");
      return false;
    }

    setEmployee(updatedEmployees);
    setToLocalStorageByKey('employees', updatedEmployees); // Persist employees to localStorage

    // Update admin
    const updatedAdmin = admin.map(adm => {
      if (adm.id === user?.id && !adm.assignedEmployeeIds.includes(empId)) {
        return {
          ...adm,
          assignedEmployeeIds: [...adm.assignedEmployeeIds, empId],
        };
      }
      return adm;
    });

    setAdmin(updatedAdmin);
    setToLocalStorageByKey('admin', updatedAdmin); // Persist admin to localStorage

    toast.success("Task created successfully!");
    return true;
  }





  // Create New Employee Function -------------------------->>>>>>>>>>>>>>>
  const createEmployee = (formdata) => {

    try {
      const { name, email, role, password, confirmPassword } = formdata;

      if (!name || !email || !role || !password || !confirmPassword) {
        toast.error('Please fill all the fields');
      }

      // console.log(name, email, role, password === confirmPassword);

      if (password !== confirmPassword) {
        toast.error('Passwords do not match!');
      }


      const newEmployee = {
        id: Date.now().toString(36).concat(Math.random().toString(36).slice(2)),
        name,
        email,
        role,
        password,
        tasks: [],
      };

      setEmployee((prev) => [...prev, newEmployee]);

      return true;


    }
    catch (error) {

      console.log("Error creating employee:");
      console.warn(error.message);

      return false;
    }
  }



  // Delete Employee Function -------------------------->>>>>>>>>>>>>>>
  const deleteEmployee = (empId) => {

    try {

      if (!empId) {
        toast.error('Employee ID is required');
        return false;
      }

      const updatedEmployees = employees.filter((emp) => emp.id !== empId);

      if (updatedEmployees.length === employees.length) {
        toast.error('Employee not found!');
        return false;
      }

      // otherwise employeee found
      setEmployee(updatedEmployees);
      toast.success('Employee deleted successfully!');
      return true;
    }
    catch (error) {
      console.log("Error in AppProvider:");
      console.warn(error.message);

    }
  }


  function editEmployee(empId, editform) {

    try {

      if (!empId) {
        toast.error('Employee ID is required');
        return false;
      }

      const { name, email, role, password } = editform;

      if (!name || !email || !role || !password) {
        toast.error('Please fill all the fields');
        return false;
      }

      const updatedEmployees = employees.map((emp) => (
        emp.id === empId ?
          {
            ...emp,
            name: name,
            email: email,
            role: role,
            password: password,
            tasks: emp.tasks || [],
          }
          :
          emp
      ))
      setEmployee(updatedEmployees);
      return true;
    }
    catch (error) {
      console.log("Error in AppProvider:");
      console.warn(error.message);
      toast.error('Error Occures, Try Again Later!');
    }
  }



  // employee activity functionality -------------- >>>>>
  const taskComplete = (task, empId) => {
    try {
      if (!task || !task.title) {
        toast.error('Task is required');
        return false;
      }

      if (!empId) {
        toast.error('Employee ID is required');
        return false;
      }

      let updatedUser = null;

      const updatedEmployees = employees.map((emp) => {
        if (emp.id === empId) {
          updatedUser = {
            ...emp,
            tasks: emp.tasks.map((t) =>
              t.title === task.title
                ? { ...t, completed: true, active: false }
                : t
            ),
          };
          return updatedUser;
        }
        return emp;
      });

      if (!updatedUser) {
        toast.error('Employee not found');
        return false;
      }

      setEmployee(updatedEmployees);
      if (user?.id === empId) {
        setUser(updatedUser); // Update the user state if the logged-in user is the one being updated
      }
      toast.success('Task marked as complete!');
      return true;
    } catch (error) {
      console.error("Error in AppProvider taskComplete function:", error.message);
      toast.error('An error occurred. Please try again later.');
      return false;
    }
  };


  const taskAcceptOrDecline = (task, empId, status) => {

    try {
      if (!task) {
        toast.error('Task is required');
        return false;
      }
      if (!empId) {
        toast.error('Employee ID is required');
        return false;
      }

      let updatedUser = null;

      const updatedEmployees = employees.map((emp) => {
        if (emp.id === empId) {
          updatedUser = {
            ...emp,
            tasks: emp.tasks.map((t) => (
              t.title === task.title
                ? (
                  status === 'accept' ? { ...t, newTask: false, active: true } : { ...t, newTask: true, active: false }
                )
                : t
            ))
          }
          return updatedUser;
        }
        return emp;
      })

      setEmployee(updatedEmployees);
      if (user?.id === empId) {
        setUser(updatedUser);
      }
      

      if(status == 'accept') {
        toast.success('Task Accepted!');
      }
      else {
        toast.error('Task Declined!');
      }

      return true;

    }
    catch (error) {
      console.log("Error in AppProvider:");
      console.warn(error.message);
    }
  }



  const taskFailed = (task, empId) => {
    try {
      if (!task || !task.deadline) {
        toast.error('Task and deadline are required');
        return false;
      }

      if (!empId) {
        toast.error('Employee ID is required');
        return false;
      }

      let updatedUser = null;

      const updatedEmployees = employees.map((emp) => {
        if (emp.id === empId) {
          updatedUser = {
            ...emp,
            tasks: emp.tasks.map((t) =>
              t.title === task.title
                ? { ...t, failed: true, active: false, completed: false }
                : t
            ),
          };
          return updatedUser;
        }
        return emp;
      });

      if (!updatedUser) {
        toast.error('Employee not found');
        return false;
      }

      setEmployee(updatedEmployees);
      if (user?.id === empId) {
        setUser(updatedUser); // Update the user state if the logged-in user is the one being updated
      }
      // toast.success('Task marked as failed!');
      return true;
    }
    catch (error) {
      console.error("Error in AppProvider taskFailed function:", error.message);
      toast.error('An error occurred. Please try again later.');
      return false;
    }
  };





  // console.log(admin);

  const value = {
    employees,
    setEmployee,
    admin,
    setAdmin,
    user,
    setUser,
    login,
    logout,
    createTask,
    createEmployee,
    deleteEmployee,
    editEmployee,
    taskComplete,
    taskAcceptOrDecline,
    taskFailed,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};


// Custom Hook
export const useAppContext = () => {
  return useContext(AppContext);
};