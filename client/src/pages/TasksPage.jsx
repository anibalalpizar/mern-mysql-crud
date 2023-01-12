import { useEffect, useState } from 'react'
import { getTasksRequest } from '../api/tasks.api.js'
import TaskCard from '../components/TaskCard'

function TasksPage() {
    const [tasks, settasks] = useState([])
    useEffect(() => {
        const loadTasks = async () => {
            const response = await getTasksRequest()
            settasks(response.data)
        }
        loadTasks()
    }, [])
    return (
        <div>
            <h1>Tasks</h1>
            {
                tasks.map(task => (
                    <TaskCard task={task} key={task.id} />
                ))
            }
        </div>
    )
}
export default TasksPage


