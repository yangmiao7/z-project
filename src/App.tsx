import React from 'react'
import './App.css'
import BasicLayout from './layouts/BasicLayout'
import { HashRouter } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div>
      <HashRouter>
        <BasicLayout />
      </HashRouter>
    </div>
  )
}

export default App
