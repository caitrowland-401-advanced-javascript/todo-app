import React, { useContext, useState } from 'react'
import { Table, Alert, Spinner } from 'react-bootstrap'

import { SettingsContext } from '../../context/Settings'

// import useFetch  from '../../hooks/useFetch'


import './ToDoList.scss'



function ToDoList({ tasks, error, isLoading, addNewTask, updateStatus, deleteTask }) {
    const settings = useContext(SettingsContext)
    const [page, setPage] = useState(0)
    const start = page * settings.resultsPerPage
    const end = start + settings.resultsPerPage
    const currentTasks = tasks.slice(start, end)

    return (
        <div className="toDoList">
            {error && <Alert varieat="danger">{error}</Alert>}
            {isLoading
                ? (
                    <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>
                ) : (
                    <>
                        <Table striped bordered size='lg'>
                            <thead>
                                <tr>
                                    <th>Task</th>
                                    <th>Assigned To</th>
                                    <th>Difficulty</th>
                                    <th>Complete</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentTasks.map(task => (
                                    <tr className={task.completed ? "completed" : "incomplete"} key={task.id}>
                                        <td>{task.task}</td>
                                        <td>{task.assignedTo}</td>
                                        <td>{task.difficulty}</td>
                                        <td><input onClick={() => updateStatus(task)} type="checkbox" checked={(task.completed===true ? "checked" : "")} /></td>
                                        <td><button onClick={() => deleteTask(task)}>Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        {page > 0 && <button onClick={()=> setPage(page -1)}>Previous</button>}
                         {tasks.length > end && <button onClick={() => setPage(page+1)}>Next</button>}
                    </>
                )
            }
        </div>
    )
}

export default ToDoList
