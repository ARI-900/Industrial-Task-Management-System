import { employees, admin } from './data'

// Function to set data to local storage
export function setToLocalStorage() {
  try {

    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))

  } catch (error) {
    console.log('Error occurred during set to local storage')
    console.warn(error.message)
  }
}

// Function to get data from local storage
export function getFromLocalStorage(key) {
    try {

      const data = JSON.parse(localStorage.getItem(key));
      return Array.isArray(data) ? data : []; // Ensure it returns an array

    } 
    catch (error) {

      console.log(`Error occurred during get from local storage for key: ${key}`);
      console.warn(error.message);
      return []; // Return an empty array on error
    }
  }



  export function setToLocalStorageByKey(key, data) {

    try {

      localStorage.setItem(key, JSON.stringify(data));
    } 
    catch (error) {
        console.log(`Error occurred during set to local storage for key: ${key}`);
        console.warn(error.message);
    }

  }
