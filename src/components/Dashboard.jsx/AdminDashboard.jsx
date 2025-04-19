import React, { useState, useEffect } from 'react';
import { TiArrowBackOutline } from 'react-icons/ti';
import Header from './Other/Header';
import { CreateTask } from './Other/AminCreateTask';
import AdminAllTask from './Other/AdminAllTask';
import { useAppContext } from '../../context/AppContext';
import ShowAllUsers from './Other/ShowAllUsers';



// Slide-in Modal Component
const CreateEmployeeModal = ({ isOpen, onClose, onSubmit }) => {

  const { employees } = useAppContext();

  
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    >
      <div
        className={`absolute top-0 right-0 h-full bg-gray-100 w-full md:w-4/5 lg:w-3/5 shadow-lg transform transition-transform duration-300 z-50 overflow-y-auto max-h-screen ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-semibold">Create Employee</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">✕</button>
        </div>

        <form className="p-6 space-y-4 bg-white shadow-lg border-gray-300 m-3 rounded-lg" onSubmit={onSubmit}>
          {/* Form fields */}
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input type="text" name="name" required placeholder='Arijit Chowdhury' className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" name="email" required className="w-full border rounded-lg px-3 py-2" placeholder="abc@gmail.com" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Designation</label>
            <select name="role" required className="w-full border rounded px-3 py-2">
              <option value="employee">Employee</option>
              <option value="manager">Manager</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div>
            <label htmlFor='password' className="block mb-1 font-medium">Password</label>
            <input type="password" name="password" id='password' autoComplete="new-password" required className="w-full border rounded-lg px-3 py-2" placeholder="abds#213721" />
          </div>
          <div>
            <label htmlFor='confirmPassword' className="block mb-1 font-medium">Confirm Password</label>
            <input type="password" name="confirmPassword" id='confirmPassword' autoComplete="new-password" required className="w-full border rounded-lg px-3 py-2" placeholder="abds#213721" />
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 px-4 py-2 font-semibold rounded bg-gray-200 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button type="submit" className="px-6 py-2 font-semibold rounded bg-blue-500 text-white hover:bg-blue-600">
              Create
            </button>
          </div>
        </form>

        {/* show user table */}
        <div >
          <ShowAllUsers users = {employees} />
        </div>
      </div>
    </div>
  );
};






const AdminDashboard = () => {

  const { employees, user } = useAppContext();
  const [adminAssignedTasks, setAdminAssignedTasks] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (user && user.role === 'admin') {
      const tasks = employees
        .filter(emp => user.assignedEmployeeIds.includes(emp.id))
        .flatMap(emp =>
          emp.tasks.map(task => ({
            ...task,
            empName: emp.name,
            empId: emp.id,
          }))
        )
        .filter(task => task.adminId === user.id);

      setAdminAssignedTasks(tasks);
    }
  }, [employees, user]);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCreateEmployee = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newEmployee = {
      id: Date.now().toString(36).concat(Math.random().toString(36).slice(2)),
      name: formData.get('name'),
      email: formData.get('email'),
      role: formData.get('role'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
      tasks: [],
    };
    // TODO: Call API or context action to add employee
    console.log('Creating employee:', newEmployee);

    //  after form submission, clear form datas
    e.target.reset();

    handleCloseModal();
  };

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-300 min-h-screen">
      <div className="container mx-auto px-10 py-6 h-full">
        <Header />

        <div className="w-full bg-white mt-10 rounded-lg shadow-2xl">
          {/* Header Section */}
          <div className="flex items-center justify-between p-5 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-t-lg">
            <div className="flex items-center gap-3">
              <TiArrowBackOutline className="text-4xl cursor-pointer hover:text-gray-400 transition-colors duration-300" />
              <h1 className=" text-sm md:text-3xl font-bold">WELCOME TO ADMIN PANEL</h1>
            </div>
            {/* Open Modal Button */}
            <button
              onClick={handleOpenModal}
              className="bg-blue-500 text-white px-2 md:px-4 py-2 text-[10px] md:text-lg rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300"
            >
              Create User
            </button>
          </div>

          <hr className="border-gray-300" />

          {/* Assign Task Section */}
          <CreateTask />
        </div>

        {/* Show all tasks assigned by admin */}
        <AdminAllTask tasks={adminAssignedTasks} />

        {/* Create Employee Modal */}
        <CreateEmployeeModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleCreateEmployee}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
