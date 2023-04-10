import React from 'react'
import './App.css'
import logo from './logo.svg'
//https://tailwindcss.com/docs/screens

function App() {
  return (
    <div className="flex">
      <div className="w-1/5 h-screen text-sm bg-gray-200 md:text-lg sm:hidden">
        <div className="flex items-center">
          <ul>
            <div className="ml-4 text-lg font-medium ">Example Text</div>
          </ul>
        </div>
      </div>

      <div className="w-3/4 sm:4/4">
        <div className="hidden w-16 h-16 bg-gray-500 rounded-full sm:block"></div>
      </div>
    </div>
  )
}

export default App
