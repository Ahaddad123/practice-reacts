import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="welcome-header">Welcome to my website</h1>
      <div>
        <a href="https://www.linkedin.com/in/andrew-haddad/" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="logo linkedIn" alt="LinkedIn logo" />
        </a>
      </div>
    </>
  )
}

export default App
