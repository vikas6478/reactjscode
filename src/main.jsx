import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './UseRef.jsx'
import UserContext from './CreateContext.jsx'
import { BrowserRouter } from 'react-router-dom'

let mydata={
  myname:"vikas",
  age:"24"
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext.Provider value={mydata}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </UserContext.Provider>
  </StrictMode>,
)
