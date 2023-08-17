import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EmpStatus = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/getallemp").then((response) => {
      response.json().then((posts) => {
        setList(posts);
      });
    });
  }, []);

  async function Active(i, x) {
    console.log(x);
    const response = await fetch(`http://localhost:4000/adminupdate/${i}`, {
      method: "POST",
      body: JSON.stringify({ x }),
      headers: { "Content-Type": "application/json" },
    });

    // if (response.status === 200) {
    //   alert("Update Success");
    // } else {
    //   alert("Update Failed");
    // }

     window.location.reload(true);
  }

  return (
    <>
      <h1 className="mainFont">Employee Detail</h1>
      <Link className="close" to={`/admindash`}>
        <button className="closebtn">Back to DashBoard</button>
      </Link>
      <table class="simple-table">
        <tr>
          <th>Name</th>
          <th>status</th>
          <th>Change Status</th>
        </tr>

        {list?.length > 0
          ? list.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item?.name}</td>
                  <td>{item?.isActive ? "Active" : "Not Active"}</td>
                  <td>
                    <button onClick={() => Active(item?._id, !item?.isActive)}>
                      Change status
                    </button>
                  </td>
                </tr>
              );
            })
          : "No data available"}
      </table>
    </>
  );
};

export default EmpStatus;
