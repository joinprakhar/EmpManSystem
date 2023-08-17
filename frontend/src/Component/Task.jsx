import React, { useEffect, useState } from "react";
import linked from "./constant";
import { Link } from "react-router-dom";

const Task = () => {
  const [list, setList] = useState([]);
  const [options, setOptions] = useState("");
  const [task, setTask] = useState("");
  const [ch, setCh] = useState(false);
  useEffect(() => {
    fetch(`${linked}getallemp`).then((response) => {
      response.json().then((posts) => {
        setList(posts);
      });
    });
  }, [options, setOptions]);
  const handleChange = (event) => {
    setTask(event.target.value);
    setCh(true)
  };
  async function Active(i) {
    const response = await fetch(`${linked}updatetask/${i}`, {
      method: "POST",
      body: JSON.stringify({ task }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      alert("Update Success");
      window.location.reload(true);
    } else {
      alert("Update Failed");
      window.location.reload(true);
    }
  }

  console.log(task);

  return (
    <>
      <h1 className="mainFont">Assign Task</h1>
      <Link className="close" to={`/admindash`}>
        <button className="closebtn">Back to DashBoard</button>
      </Link>
      <table class="simple-table">
        <tr>
          <th>Name</th>
          <th>status</th>
          <th>Select Task</th>
          <th>Submit</th>
        </tr>

        {list?.length > 0
          ? list.map((item) => {
              const it = item?.task;
              return (
                <tr key={item._id}>
                  <td>{item?.name}</td>
                  <td>{item?.task}</td>
                  <td>
                    <select
                      disabled={!item?.isActive}
                      value={ch ? task : it}
                      onChange={handleChange}
                    >
                      <option value="Washroom">No task Assigned</option>
                      <option value="Garden">Garden</option>
                      <option value="Cleaning">Cleaning</option>
                      <option value="Washroom Cleaning">
                        Washroom cleaning
                      </option>
                    </select>
                  </td>
                  <td>
                    <button
                      disabled={!item?.isActive}
                      onClick={(refreshPage) =>
                        Active(item?._id, item?.isActive)
                      }
                    >
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

export default Task;
