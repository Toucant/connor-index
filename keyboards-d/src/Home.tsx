 import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import TaskData from "./types/taskData";

const Home = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/api/task')
        .then(res => res.json())
        .then(data => setTasks(data))
    }, [])
    return(
        <div>
            <NavBar  />
            <h1>Home</h1>
            <ul>
                {tasks.map(task => (
                    <div key={task._id}>
                        <h2>{task.title}    -   {task._id}</h2>
                        <h3>assigned to: {task.assignedUser}</h3>
                        <p>{task.description}</p>
                        <button>Edit</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Home;