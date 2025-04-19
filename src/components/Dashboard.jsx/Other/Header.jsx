import React from 'react'
import { TbLogout2 } from "react-icons/tb";
import { useAppContext } from '../../../context/AppContext';

const Header = () => {

  const {logout, user} = useAppContext();


  return (
    <div className=' flex flex-col bg-white p-6 rounded-lg gap-2'>

        <p className='font-semibold text-xl md:text-2xl'>Hello,</p>
        <div className='flex justify-between items-center'>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold'>{user?.name} 👋</h1>

            <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200 flex items-center gap-2"
                onClick={logout}>
                <TbLogout2 className='size-6' />
                Logout
            </button>
        </div>

    </div>
  )
}

export default Header