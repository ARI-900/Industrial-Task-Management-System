
import React, { useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard.jsx/EmployeeDashboard";
import AdminDashboard from './components/Dashboard.jsx/AdminDashboard';
import { useAppContext } from "./context/AppContext";
import { setToLocalStorage } from "./utility/localStorage";

function App() {
  const { user } = useAppContext();

  useEffect(() => {
    setToLocalStorage();
  }, [])

  return (
    <>
      {
         user.length === 0 ?
          (
            <Login />
          ) :
          user?.role === 'admin' ? 
          (
            <AdminDashboard />
          ) : 
          (
            <EmployeeDashboard />
          )
      }
    </>
  );
}

export default App;



