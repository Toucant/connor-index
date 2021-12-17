import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/task")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  // The unfinished delete function
  // async function deleteTask() {
  //   fetch(`http://localhost:8000/api/deletetask`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       _id: storedId,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.status === "success") {
  //         this.setState({
  //           tasks: this.state.tasks.filter((task) => task._id !== storedId),
  //         });
  //         alert(`Task Deleted ${data.task._id}`);
  //         window.location.reload();
  //       }
  //     });
  // }

  return (
    <>
      <NavBar />
      <div
        style={
          // add a wrapper to center the data
          {
            margin: "0 auto",
            paddingLeft: "35%",
            width: "100%",
            border: "1px solid black",
            borderCollapse: "collapse",
            textAlign: "left",
            padding: "10px",
            backgroundColor: "#f5f5f5",
          }
        }
      >
        <h1>List of Tasks</h1>

        {tasks.map((task) => (
          <div key={task._id}>
            <h3>
              Task Title: {task.title} - ID: {task._id}
            </h3>
            <h3>assigned to: {task.assignedUser}</h3>
            <p>
              <b>Task Description:</b> {task.description}
            </p>
            <Link
              className="mylist"
              style={
                // add a space between the links
                {
                  margin: "0 auto",
                  paddingRight: "25px",
                  width: "100%",
                }
              }
              to={{
                pathname: `/task/edit/${task._id}`,
              }}
            >
              Edit
            </Link>
            <button value={task.id}>Delete - doesn't work :(</button>
            <br />
            <br />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
