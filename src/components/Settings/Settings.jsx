import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import img from '../../images/HD wallpaper_ Artistic, Minimalism, Black and White, Minimalist, Mountain.jpg'

function Settings() {
  return (
    <>
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm">
          <label className="settings">Profile Picture</label>
          <div className="settingsPP">
          <img  src={img} alt="post1" />
          <label htmlFor="fileInput" className="">
            <i className="settingsPPIcon fas fa-user"></i>
          </label>
          <input type="file" id="fileInput" className="" style={{display:"none"}}/> 
          </div>
          
            <label htmlFor="">UserName:</label>
            <input type="text" className="form-control" id="userName" placeholder="UserName"/>
          
            <label htmlFor="exampleInputEmail1" className="form-label">Email:</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="example@gmail.com"/>
            <label htmlFor="">PassWord:</label>
            <input  type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" placeholder="Must be 8-20 characters long"/>
          <button className="btn btn-outline-danger">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
    </>
  )
}

export default Settings