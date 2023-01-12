import { createContext, useContext, useState } from 'react'
import { getTasksRequest, deleteTaskRequest, createTaskRequest } from '../api/tasks.api.js'
import { TaskContext } from '../context/TaskContext'


export const useTasks = () => {
    const context = useContext(TaskContext)
    if (!context) {
        throw new Error("useTasks must be used within a TaskContextProvider")
    }
    return context
}

export const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])
    const loadTasks = async () => {
        const response = await getTasksRequest()
        setTasks(response.data)
    }
    const deleteTask = async (id) => {
        try {
            const response = await deleteTaskRequest(id)
            setTasks(tasks.filter(task => task.id !== id))
        } catch (error) {
            console.log(error)
        }
    }
    const createTask = async (task) => {
        try {
            await createTaskRequest(task)
            // setTasks([...tasks, response.data])
        } catch (error) {
            console.log(error)
        }
    }
    return <TaskContext.Provider value={{ tasks, loadTasks, deleteTask, createTask }}>
        {children}
    </TaskContext.Provider>
}
