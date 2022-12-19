import React from 'react'

function Register() {
  return (
    <div className="register ">
        <div className="registerTitle">Register</div>
        <form className="registerForm my-3">
        <label htmlFor="userName" className="form-label my-1">User Name:</label>
        <input type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" className="inputSize form-control mb-2"/>
        <label htmlFor="exampleInputEmail1" className="form-label my-1">Email:</label>
            <input type="email" className="inputSize form-control mb-3" id="exampleInputEmail1" placeholder="Enter your Email"/>
            <label htmlFor="">Password:</label>
            <input  type="password" id="inputPassword5" className="inputSize form-control mb-2" aria-describedby="passwordHelpBlock" placeholder="Enter your Password"/>
        </form>
        <button className="registerButton  btn btn-danger mb-2">Register</button>
    </div>
  )
}

export default Register