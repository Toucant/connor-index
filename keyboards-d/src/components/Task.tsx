import { FormEvent, useEffect, useState } from "react";
import { format } from "date-fns";
import {
  BrowserRouter,
  BrowserRouter as Router,
  useParams,
} from "react-router-dom";
import { fetchTaskById } from "../helpers/fetchTaskById";
import NavBar from "./NavBar";
export function Task() {
  let { id } = useParams();
  const [task, setTask] = useState({
    title: "",
    description: "",
    taskLog: "",
    department: "",
    author: "",
    dueDate: "01-01-2020",
    assignedUser: "",
  });

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
    fetchTaskById(id).then((data) => {
      setTask(data);
    });
  }, []);

  function handleDateConversion(dateToFormat: string) {
    var formattedDate = format(new Date(dateToFormat), "yyyy-MM-dd");
    setTask({ ...task, dueDate: formattedDate });
  }

  async function putTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/task", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: id,
          title: task.title,
          description: task.description,
          taskLog: task.taskLog,
          department: task.department,
          author: task.author,
          dueDate: task.dueDate,
          assignedUser: task.assignedUser,
        }),
      });
      // get the data then push to home page
      const data = await response.json();
      alert("Task Edited");
    } catch (error) {
      console.log("fetch error: " + error);
    }
  }

  return (
    <div>
      <NavBar></NavBar>
      <div>
        <h1>Edit Task {id}</h1>
        <form onSubmit={putTask}>
          <input
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            type="title"
            placeholder="Task title"
          />
          <input
            value={task.author}
            onChange={(e) => setTask({ ...task, author: e.target.value })}
            type="author"
            placeholder="Task Creator"
          />
          <input
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            type="description"
            placeholder="Task description"
          />
          <input
            value={task.department}
            onChange={(e) => setTask({ ...task, department: e.target.value })}
            type="department"
            placeholder="Department name"
          />

          <input
            value={task.dueDate}
            onChange={(e) => handleDateConversion(e.target.value)}
            type="date"
          />
          <br />
          <label>
            Assign to user:
            <select
              value={users}
              onChange={(e) =>
                setTask({ ...task, assignedUser: e.target.value })
              }
              multiple={false}
            >
              {users.map((user) => (
                <option key={user.email} value={user.email}>
                  {user.lastName},{user.firstName}
                </option>
              ))}
            </select>
          </label>
          <br />
          <textarea
            draggable={false}
            value={task.taskLog}
            onChange={(e) => setTask({ ...task, taskLog: e.target.value })}
            placeholder="Task log"
          />
          <br />
          <input type="submit" value="EditTask" />
        </form>
      </div>
    </div>
  );
}
