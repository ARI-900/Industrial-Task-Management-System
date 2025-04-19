import React from 'react';

export const CreateTask = () => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [assignDate, setAssignDate] = React.useState('');
  const [deadlineDate, setDeadlineDate] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [priority, setPriority] = React.useState('');
  const [assignedTo, setAssignedTo] = React.useState('');

  function submitHandler(e) {
    e.preventDefault();

    // Log the task details
    console.log({
      title,
      description,
      assignDate,
      deadlineDate,
      category,
      priority,
      assignedTo,
    });

    // Clear the form after submission
    setTitle('');
    setDescription('');
    setAssignDate('');
    setDeadlineDate('');
    setCategory('');
    setPriority('');
    setAssignedTo('');
  }

  return (
    <>
      <div className='py-10'>
        <h1 className='text-4xl font-extrabold text-gray-800 text-center mb-8'>
          Create Task
        </h1>

        <form
          className='w-3/4 lg:w-1/2 mx-auto bg-gray-50 p-8 rounded-lg shadow-lg'
          onSubmit={submitHandler}
        >
          {/* Task Title */}
          <div className='mb-6'>
            <label htmlFor="title" className='block text-gray-800 font-semibold text-lg mb-2'>
              Task Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Make a UI Design"
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700'
            />
          </div>

          {/* Task Description */}
          <div className='mb-6'>
            <label htmlFor="description" className='block text-gray-800 font-semibold text-lg mb-2'>
              Task Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Task asa kabhi nahi dakha hoga."
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700'
              rows="4"
            />
          </div>

          {/* Assign Date and Deadline Date */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {/* Assign Date */}
            <div className='mb-6'>
              <label htmlFor="assignDate" className='block text-gray-800 font-semibold text-lg mb-2'>
                Assign Date
              </label>
              <input
                type="date"
                id="assignDate"
                value={assignDate}
                onChange={(e) => setAssignDate(e.target.value)}
                name="assignDate"
                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700'
              />
            </div>

            {/* Deadline Date */}
            <div className='mb-6'>
              <label htmlFor="deadlineDate" className='block text-gray-800 font-semibold text-lg mb-2'>
                Deadline Date
              </label>
              <input
                type="date"
                id="deadlineDate"
                value={deadlineDate}
                onChange={(e) => setDeadlineDate(e.target.value)}
                name="deadlineDate"
                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700'
              />
            </div>
          </div>

          {/* Assign To */}
          <div className='mb-6'>
            <label htmlFor="assign" className='block text-gray-800 font-semibold text-lg mb-2'>
              Assign To
            </label>
            <input
              type="text"
              id="assign"
              name="assign"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              placeholder="Assign By Email"
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700'
            />
          </div>

          {/* Category */}
          <div className='mb-6'>
            <label htmlFor="category" className='block text-gray-800 font-semibold text-lg mb-2'>
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category"
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700'
            />
          </div>

          {/* Priority */}
          <div className='mb-6'>
            <label htmlFor="priority" className='block text-gray-800 font-semibold text-lg mb-2'>
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700'
            >
              <option value="">Select Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className='text-center'>
            <button
              type="submit"
              className='bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300'
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};