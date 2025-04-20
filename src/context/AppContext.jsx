import React, { createContext, useContext, useState, useEffect } from 'react';
import { setToLocalStorage, getFromLocalStorage, setToLocalStorageByKey } from '../utility/localStorage';
import toast from 'react-hot-toast';




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