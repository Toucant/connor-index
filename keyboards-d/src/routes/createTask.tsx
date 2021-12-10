import { FormEvent, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
// Language: typescript
// Path: keyboards-d\src\routes\singup.tsx

const CreateTask = () => {
    const [title, setTitle] = useState('');    
    const [description, setDescription] = useState(''); 
    const [taskLog, setTaskLog] = useState('');   
    const [department, setDepartment] = useState('');      
    const [dueDate, setDueDate] = useState(Date);
    const [assignedUser, setAssignedUser] = useState('');    

    // get users from api
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/api/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    async function addTask(e: FormEvent<HTMLFormElement>){
        console.log(JSON.stringify({
            title,
            description,
            department,
            dueDate,
            assignedUser
        }))
        e.preventDefault()

        try {
            const response = await fetch('http://localhost:8000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                    department: department,
                    dueDate: dueDate,
                    assignedUser: assignedUser,
                    // TODO: add userId to the request from cookies
                })
            })
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log('fetch error: ' + error);
        }
    }
    
    return (
        <main>
        <NavBar />
            <div>
                <h1>Create Task</h1>
                <form onSubmit={addTask}>
                    <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="title"
                    placeholder="Task title"
                    />     
                    <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="description"
                    placeholder="Task description"
                    />
                    <input
                    value={department}
                    onChange={(e) => setDescription(e.target.value)}
                    type="department"
                    placeholder="Department name"
                    />
                    
                    <input // TODO: add select for DueDate
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    type="date"
                    placeholder="12/20/2021"
                    />
                    <br />
                    <label>
                        Assign to user:
                        <select value={users} onChange={(e) => setAssignedUser(e.target.value)}
                        multiple={false}>
                            {users.map(user => (
                                <option key={user.email}>{user.username}</option>
                            ))}
                        </select>
                    </label>
                    <br />
                    <textarea 
                    draggable={false}
                    value={taskLog}
                    onChange={(e) => setTaskLog(e.target.value)}
                    placeholder="Task log"
                    />
                    <br />
                    <input type="submit" value="Register" />
                </form>
                
            </div>
        </main>
    )
}

export default CreateTask;
