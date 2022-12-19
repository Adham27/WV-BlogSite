import React from 'react'

function Login() {
  return (
    <div className="login ">
        <div className="loginTitle">Login</div>
        <form className="loginForm my-3">
        <label htmlFor="exampleInputEmail1" className="form-label my-1">Email:</label>
            <input type="email" className="inputSize form-control mb-3" id="exampleInputEmail1" placeholder="Enter your Email"/>
            <label htmlFor="">Password:</label>
            <input  type="password" id="inputPassword5" className="inputSize form-control mb-2" aria-describedby="passwordHelpBlock" placeholder="Enter your Password"/>
        </form>
        <button className="loginButton  btn btn-danger mb-2">Login</button>
        <button className="loginResgisterButton  btn btn-danger">Register</button>
      
    </div>
  )
}

export default Login