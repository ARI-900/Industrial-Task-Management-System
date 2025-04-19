import React, { useEffect, useState } from 'react'
import Header from './Other/Header'
import AllTaskList from './Other/AllTaskList'
import TaskList from '../TaskList/TaskList'
import { useAppContext } from '../../context/AppContext'



const EmployeeDashboard = () => {

  const { user } = useAppContext();
  // console.log("Hello: ", user)


  return (
    <div className=' bg-gray-50 h-screen overflow-x-hidden overflow-y'>
        <div className='container mx-auto px-10 py-6 h-full bg-gray-100 rounded-lg mt-2'>
         <Header />
         <AllTaskList user={user} />
         <TaskList user={user} />
        </div>
    </div>
  )
}

export default EmployeeDashboard