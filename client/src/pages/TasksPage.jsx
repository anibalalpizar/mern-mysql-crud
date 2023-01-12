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
    function renderMain() {
        if (tasks.length === 0) return <h1>Not tasks yet</h1>
        return tasks.map(task => (<TaskCard task={task} key={task.id} />
        ))
    }
    return (
        <div>
            <h1>Tasks</h1>
            {renderMain()}
        </div>
    )
}
export default TasksPage


