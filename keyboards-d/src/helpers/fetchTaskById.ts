

export async function fetchTaskById(idToSearch: String): Promise<any> {
  const response = await fetch(`http://localhost:8000/api/:${idToSearch}`);
  const data = await response.json();
  const newResponse = {
    title: data.title,
    description: data.description,
    taskLog: data.taskLog,
    department: data.department,
    author: data.author,
    dueDate: data.dueDate,
    assignedUser: data.assignedUser,
  };
  return newResponse;
}
