import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './context/components/Login'
import Profile from './context/components/Profile'

function App() {
  
  return (
    <UserContextProvider>
      <h1>Use Context</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
