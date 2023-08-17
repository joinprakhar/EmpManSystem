import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [list, setList] = useState(null);
  const [redirect, setRedirect] = useState(false);

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
      if (response.ok) {
        const userInfo = await response.json();
        setList(userInfo);
        setRedirect(true);
      } else {
        alert('Please enter correct Email and Password '); 
      }

  }

  if (redirect) {
    return <Navigate to={"/admindash"} />;
  }

  return (
    <>
      <Link className="close" to={`/`}>
        <button className="closebtn">Back</button>
      </Link>
      <div className="form">
        <div className="formchild">
          <h1>Admin Login</h1>
          <form onSubmit={login}>
            <label className="">
              <p>Email</p>
              <input
                required=""
                placeholder="Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span></span>
            </label>
            <br />
            <label>
              <p>Password</p>
              <input
                required=""
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button>Submit</button>
            </label>
          </form>
          <br />
          <Link to={"/admindash"}></Link>
        </div>
      </div>
    </>
  );
};

export default Login;


