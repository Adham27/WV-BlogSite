import React from 'react'
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Settings from './components/Settings/Settings'
import Write from './components/write/Write'
import SinglePage from './components/SinglePage/SinglePage'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import {Routes,Route} from 'react-router-dom';

function App() {
  const user=false;
  return (
    <>
      <Navbar/>
      <Routes>
       <Route exact path="/" element={<Home />} />
       <Route path="/register" element={user ? <Home/> :<Register/>} />
       <Route path="/login" element={user ? <Home/> : <Login/>} />
       <Route path="/write" element={user ? <Write/>:<Register/>} />
       <Route path="/settings" element={<Settings/>} />
       <Route path="/post/:postId" element={<SinglePage/> } />
      </Routes>
    </>
  )
}

export default App