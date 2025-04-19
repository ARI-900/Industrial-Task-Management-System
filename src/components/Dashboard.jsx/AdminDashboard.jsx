import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Header from './Other/Header';
import { TiArrowBackOutline } from "react-icons/ti";
import { CreateTask } from './Other/AminCreateTask';
import AdminAllTask from './Other/AdminAllTask';
import { useAppContext } from '../../context/AppContext';

const AdminDashboard = () => {
  const { employees, user } = useAppContext();
  const [adminAssignedTasks, setAdminAssignedTasks] = useState([]);

  useEffect(() => {
    if (user && user.role === 'admin') {
      const tasks = employees
        .filter(emp => user.assignedEmployeeIds.includes(emp.id)) // Filter employees assigned to the admin
        .flatMap(emp =>
          emp.tasks.map(task => ({
            ...task, // Spread the existing task properties
            empName: emp.name, // Add employee name
            empId: emp.id // Add employee ID
          }))
        ) // Extract tasks and add empName and empId
        .filter(task => task.adminId === user.id); // Filter tasks assigned by the current admin

      setAdminAssignedTasks(tasks);
    }
  }, [employees, user]);

  return (
    <div className='bg-gradient-to-r from-gray-100 to-gray-300 min-h-screen'>
      <div className='container mx-auto px-10 py-6 h-full'>
        <Header />

        <div className='w-full bg-white mt-10 rounded-lg shadow-2xl'>
          {/* Header Section */}
          <div className='flex items-center justify-between p-5 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-t-lg'>
            <div className='flex items-center gap-3'>
              <TiArrowBackOutline className='text-4xl cursor-pointer hover:text-gray-400 transition-colors duration-300' />
              <h1 className='text-3xl font-bold'>WELCOME TO ADMIN PANEL</h1>
            </div>
            {/* Add Create User Link */}
            <Link
              to="/add-new-user"
              className='bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300'
            >
              Create User
            </Link>
          </div>

          <hr className='border-gray-300' />

          {/* Assign Task Section */}
          <CreateTask />

          {/* TODO: Adding User added component */}
        </div>

        {/* Show all tasks assigned by admin */}
        <div>
          <AdminAllTask tasks={adminAssignedTasks} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;