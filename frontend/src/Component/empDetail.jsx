import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const SingleDetails = () => {
    const { id } = useParams();
    const [info, setInfo] = useState(null);
    const [task, setTask] = useState("No task assigned");
    const [list, setlist] = useState(null);
    const [active, setActive] = useState(info?.isActive);
      useEffect(() => {
        fetch(`http://localhost:4000/emp/${id}`).then((response) => {
          response.json().then((postInfo) => {
            setInfo(postInfo[0]);
            setlist(postInfo[1]);
            console.log(postInfo);
          });
        });
      }, [id]);

      async function Submit(e) {
        e.preventDefault();

        const response = await fetch(`http://localhost:4000/adminupdate/${id}`, {
          method: "POST",
          body: JSON.stringify({ task, active }),
          headers: { "Content-Type": "application/json" },
        });

        if (response.status === 200) {
          alert("Update Success");
          //setRedirect(true);
        } else {
          alert("Update Failed");
        }
      }


      console.log(list);
  return (
    <>
      <h1>Employe Details</h1>
      <p>Name : {info?.name}</p>
      <p>Email : {info?.email}</p>
      <p>Active Status : {active ? "Active" : "Not Active"}</p>
      <button onClick={() => setActive(!active)}>Change Status</button>
      <p>Assign Task : {task}</p>
      <button onClick={() => setTask("Grass cutting - 10-12")}>
        grass cutting - 10-12
      </button>
      <button onClick={() => setTask("Wattering - 12-02")}>
        Wattering - 12-02
      </button>
      <button onClick={() => setTask("Washroom Cleaning - 10-12")}>
        Washroom Cleaning - 02-04
      </button>------------------
      <button onClick={Submit}>Submit</button>
      <hr />
      <table>
        <tr>
          <th>Date</th>
          <th>Task</th>
          <th>Punch In</th>
          <th>Punch Out</th>
        </tr>

        {list?.length > 0
          ? list.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item?.updatedAt.slice(0,10)}</td>
                  <td>{item?.task}</td>
                  <td>{item?.punchin}</td>
                  <td>{item?.punchout}</td>
                </tr>
              );
            })
          : "No data available"}
      </table>
    </>
  );
}

export default SingleDetails