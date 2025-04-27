import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext';


const colorPallet = [
    'bg-purple-500',
    'bg-orange-500',
    'bg-teal-500',
    'bg-pink-500',
    // 'bg-indigo-500',
    // 'bg-lime-500',
];



const TaskList = ({ user }) => {

    // console.log(user)
    const { taskComplete, taskAcceptOrDecline, taskFailed } = useAppContext();

    function taskCompleteHandler(task, id, status) {

        taskComplete(task, id);
    }


    function taskHandler(task, id) {

        if (task.completed === false) {
            const status = task.newTask ? 'accept' : 'decline';
            taskAcceptOrDecline(task, id, status);
        }
    }


    // Automatically handle failed tasks
    useEffect(() => {
        if (user?.tasks?.length > 0) {
            user.tasks.forEach((task) => {
                const currentDate = new Date();
                const taskDeadline = new Date(task.deadline);

                // Check if the task deadline has passed and the task is not already marked as failed
                if (!task.failed && currentDate > taskDeadline) {
                    taskFailed(task, user.id); // Automatically mark the task as failed
                }
            });
        }
    }, [user, taskFailed]);

    return (
        <div id='tasklist' className='w-full h-[50%] overflow-x-auto mt-10 py-5 flex justify-start items-center flex-nowrap gap-5'>

            {/* Each Card */}
            {
                user?.tasks?.length > 0 ?
                    user.tasks.map((task, index) => (

                        <div key={index} className={`h-full flex-shrink-0 w-[300px] rounded-xl p-5 ${colorPallet[index % colorPallet.length]} `}>

                            <div className='flex justify-between items-center mb-5'>
                                <h3 className='bg-red-900 text-white font-bold py-1 px-2 rounded'>{task?.priority}</h3>
                                <h4 className='text-white font-sm text-sm'>{task?.taskDate} - {task?.deadline}</h4>
                            </div>

                            {/* task title */}
                            <h2 className='text-white font-bold text-xl'>{task?.title}</h2>

                            {/* category */}
                            <h4 className='text-white shadow-sm select-none shadow-white font-semibold border-1 px-2 py-1 rounded inline-flex mt-1 border-white'>{task?.category}</h4>

                            {/* task description */}
                            <p className='text-white font-serif  text-sm mt-2'>{task?.description.length > 200 ? task?.description.slice(0, 200) + '...' : task?.description}</p>


                            {/* task status */}
                            <div className='flex justify-between items-center mt-5'>

                                {
                                    task && task?.failed === false ?
                                        (
                                            <>
                                                <button
                                                    onClick={() => taskHandler(task, user.id)}
                                                >
                                                    {
                                                        task?.newTask ? (
                                                            <span className='text-red-600 font-semibold px-4 py-2 border-1 border-red-300 shadow-2xl rounded bg-yellow-300'>Accept</span>
                                                        ) : (
                                                            <span className='text-blue-500 font-semibold  px-4 py-2 border-1 border-green-300 rounded bg-gray-200'>Reject</span>
                                                        )
                                                    }
                                                </button>

                                                <button
                                                    onClick={() => taskCompleteHandler(task, user.id)}
                                                >
                                                    {
                                                        task?.completed ? (
                                                            <span className='text-red-600 font-semibold px-4 py-2 border-1 border-red-300 shadow-2xl rounded bg-yellow-300'>Completed</span>
                                                        ) : (
                                                            <span className='text-blue-500 font-semibold  px-4 py-2 border-1 border-green-300 rounded bg-gray-200'>Pending</span>
                                                        )
                                                    }
                                                </button>
                                            </>
                                        )
                                        :
                                        (
                                            <>
                                                <span className='text-white text-center font-mono px-4 py-2 w-full border-zinc-700 shadow-2xl rounded bg-red-600'>Deadline is over</span>
                                            </>
                                        )
                                }
                            </div>
                        </div>

                    ))
                    :
                    <h1 className='text-2xl font-bold text-center'>No Task Found!</h1>
            }

        </div>
    )
}

export default TaskList


