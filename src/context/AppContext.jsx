import React, { createContext, useContext, useState, useEffect } from 'react';
import { setToLocalStorage, getFromLocalStorage, setToLocalStorageByKey } from '../utility/localStorage';




// Step 1: Create the Context
export const AppContext = createContext();




// Step 2: Create the Provider Component
export const AppProvider = ({ children }) => {


  const [employees, setEmployee] = useState(() => getFromLocalStorage('employees') || []);
  const [admin, setAdmin] = useState(() => getFromLocalStorage('admin') || []);
  const [user, setUser] = useState(() => getFromLocalStorage('user')); // Initialize from localStorage



  // Save to localStorage whenever there's a change
  useEffect(() => {
    setToLocalStorage('employees', employees);
  }, [employees]);

  useEffect(() => {
    setToLocalStorage('admin', admin);
  }, [admin]);

  useEffect(() => {
    if (localStorage.getItem('user')) setUser(JSON.parse(localStorage.getItem('user')));
  }, []);



  // auth function: login ------------------------------------->>>>>>>>>>>>
  const login = (email, password) => {

    const foundEmployee = Array.isArray(employees) && employees.find(
      emp => emp.email === email && emp.password === password
    );
    const foundAdmin = Array.isArray(admin) && admin.find(
      adm => adm.email === email && adm.password === password
    );

    const loggedInUser = foundEmployee || foundAdmin;

    if (loggedInUser) {
      setUser(loggedInUser);
      setToLocalStorageByKey('user', loggedInUser); // Save logged-in user to localStorage
      return true;
    }

    return false;
  };

  // auth function: logout ------------------------------------------->>>>>>>>>>>>>>>>>>>>>
  const logout = () => {

    setUser([]);
    setToLocalStorageByKey('user', []); // Clear user from localStorage
  };




  // task provider function -------------------------------------------->>>>>>>>>>>>>>>>>






  // console.log(admin);
  
  const value = {
    employees,
    setEmployee,
    admin,
    setAdmin,
    user,
    setUser,
    login,
    logout,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};


// Custom Hook
export const useAppContext = () => {
  return useContext(AppContext);
};