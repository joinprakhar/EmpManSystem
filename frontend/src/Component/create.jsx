import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import linked from "./constant";

const Create = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [add, setAdd] = useState("");
   const [redirect, setRedirect] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const isActive = false;
  const task = "No task";
   const timein = "time in";
   const timeout = "time out";

  async function create(e) {
    e.preventDefault();

    const response = await fetch(`${linked}create`, {
      method: "POST",
      body: JSON.stringify({ name, email, password, isActive, isAdmin, add, phone, task, timein, timeout}),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      alert("Registration Success");
      setRedirect(true); 
    } else {
      alert("Registration Failed");
    }
    console.log(isAdmin)
  }

  if (redirect) {
    return <Navigate to={"/admindash"} />;
  }

  return (
    <>
      <Link className="close" to={`/admindash`}>
        <button className="closebtn">Back to DashBoard</button>
      </Link>
      <div className="form">
        <div className="formchild">
          <h1>Create Employee</h1>
          <form onSubmit={create}>
            <label>
              Name <br />
              <input
                required=""
                placeholder="text"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <br />
            <label>
              Email <br />
              <input
                required=""
                placeholder="text"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span></span>
            </label>
            <br />
            <br />
            <label>
              Password <br />
              <input
                required=""
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span></span>
            </label>
            <br />
            <br />
            <label>
              Phone <br />
              <input
                required=""
                placeholder="Mobile Number"
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <span></span>
            </label>
            <br />
            <br />
            <label>
              Password <br />
              <input
                required=""
                placeholder="Address"
                type="text"
                value={add}
                onChange={(e) => setAdd(e.target.value)}
              />
              <span></span>
            </label>
            <br />
            <br />
            <label>
              isAdmin
              <input
                type="checkbox"
                checked={isAdmin}
                onChange={() => setIsAdmin(!isAdmin)}
              />
            </label>
            <br />
            <br />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
