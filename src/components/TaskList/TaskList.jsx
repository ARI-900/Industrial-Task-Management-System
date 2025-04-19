import React from 'react'

const colorPallet = [
    'bg-purple-500',
    'bg-orange-500',
    'bg-teal-500',
    'bg-pink-500',
    // 'bg-indigo-500',
    // 'bg-lime-500',
];


const TaskList = ({ user }) => {

    console.log("Hello in TaskList: ", user)


    return (
        <div id='tasklist' className='w-full h-[50%] overflow-x-auto mt-10 py-5 flex justify-start items-center flex-nowrap gap-5'>

            {/* Each Card */}
            {
                user?.tasks?.length > 0 ?
                    user.tasks.map((task, index) => (


                        <div key={index} className={`h-full flex-shrink-0 w-[300px] rounded-xl p-5 ${colorPallet[index%colorPallet.length]} `}>

                            <div className='flex justify-between items-center mb-5'>
                                <h3 className='bg-red-900 text-white font-bold py-1 px-2 rounded'>{task?.priority}</h3>
                                <h4 className='text-white font-semibold'>{task?.taskDate}</h4>
                            </div>

                            {/* task title */}
                            <h2 className='text-white font-bold text-xl'>{task?.title}</h2>

                            {/* category */}
                            <h4 className='text-white shadow-sm select-none shadow-white font-semibold border-1 px-2 py-1 rounded inline-flex mt-1 border-white'>{task?.category}</h4>

                            {/* task description */}
                            <p className='text-white font-serif  text-sm mt-2'>{task?.description.length > 200 ? task?.description.slice(0, 200) + '...' : task?.description}</p>
                        </div>

                    ))
                    :
                    <h1 className='text-2xl font-bold text-center'>No Task Found!</h1>
            }

        </div>
    )
}

export default TaskList


