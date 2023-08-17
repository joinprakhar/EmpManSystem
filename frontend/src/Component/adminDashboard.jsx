import React from 'react'
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <>
      <h1 className="mainFont">Admin Dashboard</h1>
      <Link className="close" to={`/`}>
        <button className="closebtn">Sign Out</button>
      </Link>
      <div className="homepage">
        <div class="card">
          <Link class="card1" to={`/create`}>
            <p>Create New Employee</p>
            <div class="go-corner" href="#">
              <div class="go-arrow">→</div>
            </div>
          </Link>
        </div>
        <div class="card">
          <Link class="card1" to={`/empstatus`}>
            <p>Change Employee Status</p>
            <div class="go-corner" href="#">
              <div class="go-arrow">→</div>
            </div>
          </Link>
        </div>
        <div class="card">
          <Link class="card1" to={`/details`}>
            <p>View Employee Details</p>
            <div class="go-corner" href="#">
              <div class="go-arrow">→</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="homepage">
        <div class="card">
          <Link class="card1" to={`/task`}>
            <p>Assign Task</p>
            <div class="go-corner" href="#">
              <div class="go-arrow">→</div>
            </div>
          </Link>
        </div>
        <div class="card">
          <Link class="card1" to={`/attend`}>
            <p>View Attandance</p>
            <div class="go-corner" href="#">
              <div class="go-arrow">→</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard