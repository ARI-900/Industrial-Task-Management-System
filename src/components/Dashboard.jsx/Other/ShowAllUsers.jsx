import React from 'react';

function ShowAllUsers({ users }) {
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
                  <td className="border border-gray-300 font-mono p-2 font-semibold text-gray-800">{user.id}</td>
                  <td className="border border-gray-300 p-2 font-mono font-semibold text-gray-800">{user.name}</td>
                  <td className="border border-gray-300 p-2 text-gray-800 font-mono font-semibold">{user.email}</td>
                  <td className="border border-gray-300 p-2 font-semibold font-mono text-gray-800 capitalize">{user.role}</td>

                  <td className="border border-gray-300 p-2 text-gray-800 capitalize">
                    <div className='flex flex-col md:flex-row flex-wrap gap-1  justify-center items-center'>
                        <button className="bg-blue-500 text-white px-2 py-1 font-mono text-sm rounded-sm hover:bg-blue-600">Edit</button>
                        <button className="bg-red-500 text-white px-2 py-1 rounded-sm font-mono text-sm  hover:bg-red-600 ml-2">Delete</button>
                    </div>
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