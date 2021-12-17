import { FormEvent, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import {format, set} from 'date-fns'
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
// Language: typescript
// Path: keyboards-d\src\routes\singup.tsx

const CreateTask = () => {
    const [title, setTitle] = useState('');    
    const [description, setDescription] = useState(''); 
    const [taskLog, setTaskLog] = useState('');   
    const [department, setDepartment] = useState('');      
    const [dueDate, setDueDate] = useState(Date);
    const [assignedUser, setAssignedUser] = useState('');    
    const [author, setAuthor] = useState('');    
    // get users from api
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/api/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    // chrome yells at me if I use the react date picker so I had to change it
    function handleDateConversion(dateToFormat: string){
        var formattedDate = format(new Date(dateToFormat), 'yyyy-MM-dd')
        setDueDate(formattedDate);
    }
    async function addTask(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log(dueDate);
        try {
            const response = await fetch('http://localhost:8000/api/task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                    taskLog: taskLog,
                    department: department,
                    author: author,
                    dueDate: dueDate,
                    assignedUser: assignedUser
                })
            })
            // get the data then push to home page
            const data = await response.json();
            if (data.status === 'success'){
                alert('Task Created');
                BrowserRouter.call(this, '/');
            }
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
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    type="author"
                    placeholder="Task Creator"
                    />     
                    <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="description"
                    placeholder="Task description"
                    />
                    <input
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    type="department"
                    placeholder="Department name"
                    />
                    
                    <input // TODO: add select for DueDate
                    value={dueDate}
                    onChange={(e) => handleDateConversion(e.target.value)}
                    type="date"
                    placeholder="12/20/2021"
                    />
                    <br />
                    <label>
                        Assign to user:
                        <select value={users} onChange={(e) => setAssignedUser(e.target.value)}
                        multiple={false}>
                            {users.map(user => (
                                <option key={user.email} value={user.email}>{user.lastName},{user.firstName}</option>
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
