import React, { useEffect, useState } from 'react'

const AllTaskList = ({ user }) => {

  // Define state hooks
  const [newTask, setNewTask] = useState(0)
  const [inProgress, setInProgress] = useState(0)
  const [failed, setFailed] = useState(0)
  const [completed, setCompleted] = useState(0)

  useEffect(() => {
    if (user?.tasks?.length > 0) {
      // Calculate counts
      let newTaskCount = 0
      let inProgressCount = 0
      let failedCount = 0
      let completedCount = 0

      user.tasks.forEach((task) => {
        if (task.newTask) newTaskCount++
        if (task.active) inProgressCount++
        if (task.failed) failedCount++
        if (task.completed) completedCount++
      })

      // Update state once after the loop
      setNewTask(newTaskCount)
      setInProgress(inProgressCount)
      setFailed(failedCount)
      setCompleted(completedCount)
    }
  }, [user])

  return (
    <div className='mt-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
      <div className='bg-red-700 flex flex-col justify-between gap-3 rounded-lg px-6 py-9 shadow-lg hover:scale-105 transition-transform duration-300'>
        <h2 className='text-4xl font-bold text-white'>{newTask}</h2>
        <h3 className='text-2xl font-semibold text-white'>New Task</h3>
      </div>

      <div className='bg-violet-600 flex flex-col justify-between gap-3 rounded-lg px-6 py-9 shadow-lg hover:scale-105 transition-transform duration-300'>
        <h2 className='text-4xl font-bold text-white'>{inProgress}</h2>
        <h3 className='text-2xl font-semibold text-white'>In Progress</h3>
      </div>

      <div className='bg-yellow-500 flex flex-col justify-between gap-3 rounded-lg px-6 py-9 shadow-lg hover:scale-105 transition-transform duration-300'>
        <h2 className='text-4xl font-bold text-white'>{failed}</h2>
        <h3 className='text-2xl font-semibold text-white'>Failed</h3>
      </div>

      <div className='bg-green-600 flex flex-col justify-between gap-3 rounded-lg px-6 py-9 shadow-lg hover:scale-105 transition-transform duration-300'>
        <h2 className='text-4xl font-bold text-white'>{completed}</h2>
        <h3 className='text-2xl font-semibold text-white'>Completed</h3>
      </div>
    </div>
  )
}

export default AllTaskList