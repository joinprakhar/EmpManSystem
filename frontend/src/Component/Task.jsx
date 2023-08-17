import React, { useEffect, useState } from "react";

const Task = () => {
  const [list, setList] = useState([]);
  const [options, setOptions] = useState("");
  const [task, setTask] = useState("");
  useEffect(() => {
    fetch("http://localhost:4000/getallemp").then((response) => {
      response.json().then((posts) => {
        setList(posts);
      });
    });
  }, [options, setOptions]);
  const handleChange = (event) => {
    setTask(event.target.value);
  };
  async function Active(i) {
    const response = await fetch(`http://localhost:4000/updatetask/${i}`, {
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
      <table class="simple-table">
        <tr>
          <th>Name</th>
          <th>status</th>
          <th>Select Task</th>
          <th>Submit</th>
        </tr>

        {list?.length > 0
          ? list.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item?.name}</td>
                  <td>{item?.task}</td>
                  <td>
                    <select value={task} onChange={handleChange}>
                      <option value="Washroom">Washroom</option>
                      <option value="Garden">Garden</option>
                      <option value="Cleaning">Cleaning</option>
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
