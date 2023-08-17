import React, {useState } from "react";
import { Link } from "react-router-dom";


const EmpLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [int, setInt] = useState("");
  const [out, setOut] = useState("");

  const [list, setList] = useState(null);

  const [redirect, setRedirect] = useState(true);

const dattend = async () => {
  const date = new Date();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  const time = `${h}:${m}:${s}`;
  setOut(time);
  const response = await fetch(
    `http://localhost:4000/timeout/${list._id}`,
    {
      method: "POST",
      body: JSON.stringify({ time }),
      headers: { "Content-Type": "application/json" },
    }
  );
  // if (response.status === 200) {
  //   alert("Update Success");
  // } else {
  //   alert("Update Failed");
    
  // }
  setRedirect(true);
  window.location.reload(true);
};


  async function login(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/emplogin", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      await response.json().then((userInfo) => {
        setList(userInfo);
        if(userInfo?.isActive){
        setRedirect(false);
        setInt(userInfo?.timein)
        setOut(userInfo?.timeout);
      }else{
        setRedirect(true);
      }
      });
    } else {
      alert("wrong credentials");
    }
  }

  const attend =async  () => {
    const date = new Date()
    const h = date.getHours()
    const m = date.getMinutes();
    const s = date.getSeconds();
    const time = `${h}:${m}:${s}`
    setInt(time);
    const response = await fetch(`http://localhost:4000/timein/${list._id}`, {
    method: "POST",
    body: JSON.stringify({ time }),
    headers: { "Content-Type": "application/json" },
  });
  // if (response) {
  //   alert("Update Success");
  // } else {
  //   alert("Update Failed");
//  }
setRedirect(true);
    window.location.reload(true);
  }




//console.log(list)

  return (
    <>
      {redirect ? (
        <>
          <Link className="close" to={`/`}>
            <button className="closebtn">Back</button>
          </Link>
          <div className="form">
            <div className="formchild">
              <h1>Employee Login</h1>
              <form onSubmit={login}>
                <label>
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
                  <span></span>
                </label>
                <br />
                <br />
                <button>Submit</button>
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="mainFont">Emp Attandance</h1>
          <Link className="close" to={`/`}>
            <button className="closebtn">Sign Out</button>
          </Link>
          <div className="form">
            <div className="formchild">
              <h2>Name : {list?.name}</h2>
              <br />
              <h2>Punch In : {int} </h2>
              <br />
              <h2>Punch Out : {out} </h2>
              <br />
              <div className="btn">
                <button onClick={attend}>Punch in</button>
                <button onClick={dattend}>Punch Out</button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default EmpLogin;
