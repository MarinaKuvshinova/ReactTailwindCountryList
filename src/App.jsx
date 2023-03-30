import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { routes } from './router'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
        {routes.map((route, index) => 
          <Route key={index} path={route.path} Component={route.element}/>
        )}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
