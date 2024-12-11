import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

export default function Login() {

  const Navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleLogin = (e) => {
    e.preventDefault();

    axios.post("https://reqres.in/api/login", { 
      email:email,
      password:password
    }).then( res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        Navigate('/orderSuccess');
        window.location.reload(false);
      })
      .catch (err => {
        console.log(err)
        alert("Invalid Login Crerdentials")
      });
  }

  return (
    <>
        <section>
          <div className="container my-5">
            <h2 className="text-center">Login </h2>

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email
                </label>
                <input
                  className="form-control"
                  aria-describedby="emailHelp"
                  type="text"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>
              <Button type="submit" className="btn btn-outline-primary w-100">
                Login
              </Button>
            </form>
            <button onClick={ () => {
              localStorage.setItem("token", "guest");
              Navigate("/orderSuccess");
            }} 
            className="btn btn-outline-warning w-100">
              Continue as Guest
            </button>
          </div>
        </section>
    </>
  );
}
