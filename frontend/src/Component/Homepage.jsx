import React from 'react'
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <>
      <h1 className="mainFont">Employee Managment System</h1>
      <div className="homepage">
        <div class="card">
          <Link class="card1" to={`/emp`}>
            <p>Employee login</p>
            <div class="go-corner" href="#">
              <div class="go-arrow">→</div>
            </div> 
          </Link>
        </div>
        <div class="card">
          <Link class="card1" to={`/admin`}>
            <p>Admin Login</p>
            <div class="go-corner" href="#">
              <div class="go-arrow">→</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Homepage