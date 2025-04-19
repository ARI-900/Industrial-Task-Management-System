import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import toast, { Toaster } from 'react-hot-toast';


// localStorage.clear();
createRoot(document.getElementById('root')).render(
  <div>
    <StrictMode>
      <BrowserRouter>
        <AppProvider>
          <Toaster
            position="top-center"
            // reverseOrder={false}
          />
          <App />
        </AppProvider>
      </BrowserRouter>
    </StrictMode>
  </div>,
)
