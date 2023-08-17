import React, { useEffect, useState } from 'react'
import { Link, Navigate } from "react-router-dom";

const EmpDetails = () => {
      
      const [list, setList] = useState([]);
      useEffect(() => {
        fetch("http://localhost:4000/getallemp").then((response) => {
          response.json().then((posts) => {
            setList(posts);
          });
        });
      }, []);

      const update=(a)=>{
        return <Navigate to={"/emp/a"} />;
      }

      console.log(list[2]?.isActive);
  return (
    <>
      <h1 className="mainFont">Employee Detail</h1>
      <Link className="close" to={`/admindash`}>
        <button className="closebtn">Back to DashBoard</button>
      </Link>
      <div className="tab">
        <table class="simple-table">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Address</th>
          </tr>

          {list?.length > 0
            ? list.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item?.name}</td>
                    <td>{item?.email}</td>
                    <td>{item?.phone}</td>
                    <td>{item?.address}</td>
                  </tr>
                );
              })
            : "No data available"}
        </table>
      </div>
    </>
  );
}

export default EmpDetails