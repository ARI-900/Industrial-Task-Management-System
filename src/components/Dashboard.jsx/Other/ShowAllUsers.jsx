import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useAppContext } from '../../../context/AppContext';





function ShowAllUsers({ users }) {

  const { deleteEmployee, editEmployee } = useAppContext();

  // Edit handler section ----------------------->>>>>>>>>>>>>>
  const [isEditing, setIsEditing] = useState(false);
  const [editUser, setEditUser] = useState(null);

  function handleEditClick(user) {
    setIsEditing(true);
    setEditUser(user);
  }

  function handleCancelEdit() {
    setIsEditing(false);
    setEditUser(null);
  }

  function handleInputChange(e) {
    const  {name, value} = e.target;
    setEditUser((prev) => (
      {
        ...prev,
        [name]: value
      }
    ));
  }

  function handleSaveChanges() {
    
    const response = editEmployee(editUser.id, editUser);

    if (response === false) {
      toast.error("Error during updating employee!");
    } 
    else {
      toast.success("Employee updated successfully!");
    }

    setIsEditing(false);
    setEditUser(null);

  }



  // Edit Handler secction end -------------------------->>>>>>>>>>>>>


  // delete handelr function -------------------------->>>>>>>>>>>>>>>>>>
  const deleteHandler = (empId) => {
    const response = deleteEmployee(empId);

    if (response === false) {
      toast.error("Error during deleting employee!");
    }
  };





  return (
    <div className="p-6 space-y-4 bg-white shadow-lg border-gray-300 m-3 rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800">All Users</h2>
      <hr className="border-gray-300" />

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr className='text-center bg-zinc-600'>
              <th className="border border-gray-300 text-white p-2 font-semibold ">ID</th>
              <th className="border border-gray-300 text-white p-2 font-semibold ">Name</th>
              <th className="border border-gray-300 text-white p-2 font-semibold ">Email</th>
              <th className="border border-gray-300 text-white p-2 font-semibold ">Role</th>
              <th className="border border-gray-300 text-white p-2 font-semibold ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors text-center">

                  <td className="border border-gray-300 font-mono p-2 font-semibold text-sm text-gray-800">
                    {
                      user.id && user.id.length > 3 ? user.id.slice(-3) + '..' : user.id
                    }
                  </td>

                  <td className="border border-gray-300 p-2 font-mono font-semibold text-gray-800">
                    {
                      isEditing && user.id === editUser.id ?
                        (

                          <input
                            type="text"
                            name="name"
                            value={editUser.name}
                            onChange={handleInputChange}
                            className="w-full border rounded px-2 py-1"
                          />
                        ) :
                        (
                          user.name
                        )
                    }
                  </td>

                  <td className="border border-gray-300 p-2 text-gray-800 font-mono font-semibold">
                    {
                      isEditing && user.id === editUser.id ?
                        (
                          <input
                            type="email"
                            name="email"
                            value={editUser.email}
                            onChange={handleInputChange}
                            className="w-full border rounded px-2 py-1"
                          />
                        )
                        :
                        (
                          user.email
                        )
                    }
                  </td>

                  <td className="border border-gray-300 p-2 font-semibold font-mono text-gray-800 capitalize">
                    {
                      isEditing && user.id === editUser.id ?
                        (
                          <select
                            name="role"
                            value={editUser.role}
                            onChange={handleInputChange}
                            className="w-full border rounded px-2 py-1"
                          >
                            <option value="employee">Employee</option>
                            <option value="manager">Manager</option>
                            <option value="admin">Admin</option>
                          </select>
                        )
                        :
                        (
                          user.role
                        )
                    }
                  </td>

                  <td className="border border-gray-300 p-2 text-gray-800 capitalize">

                    {
                      isEditing && user.id === editUser.id ?
                        (
                          <>
                            <button
                              className="bg-green-500 text-white px-2 py-1 font-mono text-sm rounded-sm hover:bg-green-600"
                              onClick={handleSaveChanges}
                            >
                              Save
                            </button>
                            <button
                              className="bg-gray-500 text-white px-2 py-1 font-mono text-sm rounded-sm hover:bg-gray-600"
                              onClick={handleCancelEdit}
                            >
                              Cancel
                            </button>
                          </>
                        ) :
                        (
                          <>
                            <div className='flex flex-col md:flex-row flex-wrap gap-1  justify-center items-center'>
                              <button className="bg-blue-500 text-white px-2 py-1 font-mono text-sm rounded-sm hover:bg-blue-600"
                                onClick={() => handleEditClick(user)}
                              >Edit</button>

                              <button className="bg-red-500 text-white px-2 py-1 rounded-sm font-mono text-sm  hover:bg-red-600 ml-2"
                                onClick={() => deleteHandler(user.id)}
                              >Delete</button>
                            </div>
                          </>
                        )
                    }

                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="border border-gray-300 p-4 text-center text-gray-500"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowAllUsers;