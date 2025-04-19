import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const Login = () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const {login} = useAppContext();


    function submitHandler(e) {
        e.preventDefault()
        console.log(email);
        console.log(password);

        const res = login(email, password);
        
        if(!res) {
            toast.error('Invalid Credentials!');
        }
        else 
            toast.success('Login Successfull!');
        
        setEmail('');
        setPassword('');
       
    }



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg border-2 border-white">
                <h1 className="text-3xl font-bold text-center text-gray-900">
                    Login Page
                </h1>
                
                <form className="mt-8 space-y-6" onSubmit={submitHandler}>
                    <div className="space-y-4">
                        <input 
                            type="text" 
                            placeholder="Enter your email" 
                            required
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                        />
                        <input 
                            type="password" 
                            placeholder="Enter your password" 
                            required 
                            autoComplete='off'
                            name='password' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account?
                    <a href="#" className="ml-1 font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200">
                        Register
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Login