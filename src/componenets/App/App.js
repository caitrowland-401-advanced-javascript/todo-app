import React, {useContext} from 'react'
import Header from '../Header/Header'
import ToDoList from '../ToDoList/ToDoList'
import Footer from '../Footer/Footer'
import NewTask from '../NewTask/NewTask'
import {Container} from 'react-bootstrap'
import LoginForm from '../LoginForm/index'

import Settings from '../../context/Settings'

import useFetch from '../../hooks/useFetch'

import PaginationSetter from '../PaginationSetter'

import AuthContext from '../../context/LogIn/context'

import './App.scss'

function App () {
    const [tasks, error, isLoading, addNewTask, updateStatus, deleteTask] = useFetch()
    return (
        // <AuthContext>
        //     <div>
        //         <LoginForm />
        //     </div>
        // </AuthContext>

        <Settings>
        <Container className="App">

            <Header />
            <NewTask addNewTask={addNewTask} />
            <PaginationSetter/>
            <ToDoList tasks={tasks} isLoading={isLoading} error={error} updateStatus={updateStatus} deleteTask={deleteTask}/>
            <Footer />
        </Container>
        </Settings>
    )

}

export default App