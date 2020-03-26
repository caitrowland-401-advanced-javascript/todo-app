import { useState, useEffect } from 'react'

function useFetch() {
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [tasks, setTasks] = useState([])
    const getTasks = async () => {
        setIsLoading(true)
        setError(false)

        try {
            const raw = await fetch('http://localhost:3001/tasks')
            const data = await raw.json()
            setTasks(data)
        } catch (err) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getTasks()
    }, [])

    function addNewTask(task) {
        setTasks([...tasks, task])
    }

    const updateStatus = async task => {
        const newStatus = !task.completed
        task.status = newStatus
        try {
            const raw = await fetch(`http://localhost:3001/tasks/${task.id}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            })
            const newTask = tasks.map(object => {
                return object.id === task.id ? { ...object, completed: newStatus } : object
            })
            setTasks(newTask)
        } catch (e) { console.error(e) }
    }

    const deleteTask = async task => {
        try {
            const raw = await fetch(`http://localhost:3001/tasks/${task.id}`, {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            })
            const data = await raw.json()

            const newTask = tasks.filter(obj => obj.id !== task.id) 
            setTasks(newTask)
        } catch (e) { console.error(e) }
    }


    return [
        tasks,
        error,
        isLoading,
        addNewTask,
        updateStatus,
        deleteTask
    ]
}

export default useFetch