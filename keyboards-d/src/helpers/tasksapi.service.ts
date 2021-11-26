import axios, {AxiosResponse} from "axios";
import TaskData from "../types/taskData";
require('dotenv').config();

interface TaskRequest {
    name: string,
    stuff: string[]
}
const getTasksObj = <TaskData[]>[];
// const connString = process.env.DB_CONN_STRING;
// const headers = {
//     'Content-Type': 'application/json',
//     mode: 'cors',
//     credentials: 'include'
// };
const axiosClient = axios;
axiosClient.defaults.baseURL = 'http://localhost:8000';

// Get Tasks
const getTaskInfo = async () => {
    axiosClient.get<TaskData[]>(
        '/tasks'
    ).then((res) => {
        console.log(`res.data: ${JSON.stringify(res.data)}`);
        res.data.forEach((res) => {
            getTasksObj.push(res)
        });
    })
}

export {
    getTaskInfo,
    getTasksObj
};