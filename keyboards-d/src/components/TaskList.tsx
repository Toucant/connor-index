import React, { Component, useEffect, useState } from 'react'
import { getTasksObj } from '../helpers/tasksapi.service';
import TaskData from '../types/taskData';
// export const TaskList = (props: TaskData[]) => {
//     return (
//         <div>
//             <ul>
//             {tasklist.map((task) => 
//                 <li key={task.id}>{task.department}</li>
//             )}
//             </ul>
//         </div>
//     )
// }
const TaskList:React.FC = () => {
    
    useEffect(() => {
    
        settasklist(getTasksObj);
    }, [])
    
    const [tasklist, settasklist] = useState([] as TaskData[]);
    return (
        <div>
            {tasklist.map((task) => {
                console.log('1')
                return(<li key={task.id}>{task.title}</li>)
                
            })}
        </div>
    )
}
export default TaskList;
