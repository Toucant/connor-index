import TaskData from "../types/taskData";

const Task = (input: TaskData) => {
    return (
        <div>
            <h1>{input.title}</h1>
            <p>{input.description}</p>
            <p>{input.author}</p>
            <p>{input.department}</p>
            <p>{input.dueDate}</p>
            <p>{input.assignedUser}</p>
        </div>
    )

}

export default (Task);