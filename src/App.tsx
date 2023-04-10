import React from 'react'
import './App.css'
import logo from './logo.svg'
import MenuList from './pages/MenuList'

function App() {
  return (
    <div className="flex">
      <MenuList />
      <div className="w-3/4 sm:4/4">
        <div className="hidden w-16 h-16 bg-gray-500 rounded-full sm:block"></div>
      </div>
    </div>
  )
}

export default App
