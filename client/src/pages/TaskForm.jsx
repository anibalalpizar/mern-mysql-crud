import { Formik, Form } from 'formik'
import { useTasks } from '../context/TaskProvider'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function TaskForm() {
    const { createTask, getTask, updateTask } = useTasks()
    const [task, setTask] = useState({
        title: "",
        description: "",
    })
    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        const loadTask = async () => {
            if (params.id) {
                const task = await getTask(params.id)
                console.log(task)
                setTask({
                    title: task.title,
                    description: task.description,
                })
            }
        }
        loadTask()
    }, [])
    return (
        <div>
            <h1>{params.id ? "Edit Task" : "New Task"}</h1>
            <Formik
                initialValues={task}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values)
                    if (params.id) {
                        await updateTask(params.id, values)
                        navigate("/")
                    } else {
                        await createTask(values)
                    }
                    setTask({
                        title: "",
                        description: "",
                    })
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <label>title</label>
                        <input type='text' name='title' placeholder='Write a title' onChange={handleChange} value={values.title} />

                        <label>description</label>
                        <textarea type="text" name="description" rows="3" placeholder='Write a description' onChange={handleChange} value={values.description}></textarea>
                        <button type='submit' disabled={isSubmitting}>
                            {isSubmitting ? "Saving..." : "Save"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default TaskForm