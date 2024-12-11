import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

export default function Signup() {
  const [userData, setUserData] = useState({
    name: '',
    email:'',
    pass:'',
    confirmPass:''
  });

  const navigate = useNavigate();
  
  const handleSignup = (e) => {
    e.preventDefault();
    console.log(userData);
    navigate("/login");

    axios.post("https://reqres.in/api/users", userData)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  

  return (
    <>
      <div className="container my-5 w-50">
        <h2 className="text-center">Sign up</h2>
        <form onSubmit={handleSignup} action="/login">
          <div className="mb-3">
            <label for="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              onChange={(e) => {
                setUserData({ ...userData, name: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label for="emailInput" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              aria-describedby="emailHelp"
              required
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label for="passwordInput" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              required
              onChange={(e) => {
                setUserData({ ...userData, pass: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label for="passwordInput" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              required
              onChange={(e) => {
                setUserData({ ...userData, confirmPass: e.target.value });
              }}
            />
          </div>
          <button type="submit" className="btn btn-warning w-100">
            Sign up
          </button>
        </form>
      </div>
    </>
  );
}
