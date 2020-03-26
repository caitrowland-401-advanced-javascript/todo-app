import React from 'react'
import addNewTask from '../../hooks/useFetch'
import useForm from '../../hooks/useForm';
import './NewTask.css'
import {Button} from 'react-bootstrap'

function NewTask({addNewTask}) {
    async function postNewTask() {

        const raw = await fetch('http://localhost:3001/tasks', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        const response = await raw.json()
        addNewTask(response)
    }

    const [
        handleSubmit,
        handleChange,
        handleTextInput,
        values
    ] = useForm(postNewTask)

    return (
        <div className="NewTask">
            <form onSubmit={handleSubmit}>
                <input
                    name="task"
                    // onChange={handleChange} 
                    type="text"
                    placeholder="New Task"
                    {...handleTextInput}
                />
                <input
                    name="assignedTo"
                    // onChange={handleChange}
                    type="text"
                    placeholder="Assigned To"
                    {...handleTextInput}

                />
                <input
                    name="difficulty"
                    placeholder="Difficulty"
                    onChange={handleChange}
                    type="number"
                    min="1"
                    max="5"
                />

                {/* <select
                    id="status"
                    name="status"
                    onChange={handleChange}
                    {...handleTextInput}>
                    <option value=''></option>
                    <option value="false">Incomplete</option>
                    <option value="true">Complete</option>
                </select> */}

                <Button type="submit" value="Add New Task" >Add New Task</Button>
            </form>

        </div>
    )
}

export default NewTask