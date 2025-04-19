import React from 'react';

const colorPallet = [
  'bg-red-500',
  'bg-violet-500',
  'bg-yellow-500',
  'bg-green-500',
  'bg-blue-500',
  'bg-indigo-800',
  'bg-pink-500',
  'bg-teal-500'
];

export default function AdminAllTask({ tasks }) {
  return (
    <div className='w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white mt-5 rounded-lg shadow-2xl py-10 px-6 max-h-[600px] overflow-auto scroll-smooth' id='tasklist'>
      <h1 className='text-4xl font-extrabold mb-8 text-center border-b-2 border-gray-600 pb-4'>ALL Tasks</h1>

      <div className='space-y-5'>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div
              className={`px-6 py-5 rounded-lg shadow-lg transition-transform duration-300 ${colorPallet[index % colorPallet.length]}`}
              key={index}
            >
              <h2 className='text-2xl font-bold mb-2'>
                {task?.empName} <span className='text-sm font-light'>[ID: {task?.empId}]</span>
              </h2>
              <p className='text-sm font-medium mb-1'>CATEGORY: {task?.category || 'N/A'}</p>
              <h3 className='text-lg font-semibold mb-1'>TITLE: {task?.title}</h3>
              <h3 className='text-sm font-medium mb-1'>DESCRIPTION: {task?.description || 'No Description'}</h3>
              <p className='text-sm font-medium mb-1'>ASSIGNED DATE: {task?.taskDate || 'N/A'}</p>
              <p className='text-sm font-medium mb-1'>DEADLINE DATE: {task?.deadline || 'N/A'}</p>
              <h5 className='text-sm font-semibold'>
                Status: <span className={task?.completed ? 'text-green-300' : 'text-yellow-300'}>
                  {task?.completed ? 'Completed' : 'Pending'}
                </span>
              </h5>
            </div>
          ))
        ) : (
          <h1 className='text-2xl font-bold text-center'>No Task Found!</h1>
        )}
      </div>
    </div>
  );
}