import React from 'react'
import LandingPage from '../LandingPage/LandingPage';
import Posts from '../posts/Posts';
import Sidebar from '../Sidebar/Sidebar';

function Home() {
  return (
    <>
        <LandingPage/>
        <div className="home">
            <Posts/>
            <Sidebar/>
        </div>
    </>
  )
}

export default Home;