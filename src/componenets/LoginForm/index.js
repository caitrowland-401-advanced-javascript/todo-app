import React from 'react'
import {LoginContext} from '../../context/LogIn/context'

// import If from 

class LoginForm extends React.Component {
    static contextType= LoginContext
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState ({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.context.login(this.state.username, this.state.password)
        this.setState({
            username: '',
            password: ''
        })
    }

    render () {

        return (
            <>
            {this.context.loggedIn && 
            <button onClick={this.context.logout}>Log Out</button>
        }
            {!this.context.loggedIn && 
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Username' 
                    name="username" 
                    onChange={this.handleChange} 
                    />
                <input 
                    type="password"
                    placeholder='Password'
                    name='password'
                    onCHange = {this.handleChange} 
                    />
                <button value="submit">Log In</button>
            </form>}
            </>
        )
    }
}

export default LoginForm