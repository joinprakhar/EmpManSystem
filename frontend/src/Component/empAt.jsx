import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import linked from "./constant";

const Attandance = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(`${linked}getallemp`).then((response) => {
      response.json().then((posts) => {
        setList(posts);
      });
    });
  }, []);


  console.log(list[2]?.isActive);
  return (
    <>
      <h1 className="mainFont">Employee Attandance</h1>
      <Link className="close" to={`/admindash`}>
        <button className="closebtn">Back to DashBoard</button>
      </Link>
      <div className="for">
        <div className="formChil">
          <table class="simple-table">
            <tr>
              <th>Name</th>
              <th>timein</th>
              <th>timeout</th>
            </tr>

            {list?.length > 0
              ? list.map((item) => {
                  return (
                    <tr key={item._id}>
                      <td>{item?.name}</td>
                      <td>{item?.timein}</td>
                      <td>{item?.timeout}</td>
                    </tr>
                  );
                })
              : "No data available"}
          </table>
        </div>
      </div>
    </>
  );
};

export default Attandance;
