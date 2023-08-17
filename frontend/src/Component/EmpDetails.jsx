import React, { useEffect, useState } from 'react'
import { Link, } from "react-router-dom";
import linked from './constant';

const EmpDetails = () => {
      console.log(linked)
      const [list, setList] = useState([]);
      useEffect(() => {
        fetch(`${linked}getallemp`).then((response) => {
          response.json().then((posts) => {
            setList(posts);
          });
        });
      }, []);




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