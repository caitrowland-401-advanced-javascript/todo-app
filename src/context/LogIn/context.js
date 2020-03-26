import React from 'react'
import cookie from 'react-cookies'
import jwt from 'jsonwebtoken'

export const LoginContext = React.createContext()

const API = 'http://localhost:3001'

const SECRET = process.env.SECRET

class AuthContext extends React.Component {
    constructor() {
        super()
        this.state = {
            loggedIn: false,
            user: {},
            login: this.login,
            logout: this.logout
        }
    }

    setLoginState = (loggedIn, token, user) => {
        this.setLoginState({ loggedIn, token, user })
        cookie.save('auth', token || '')
    }

    login = async (username, password) => {
        //hit the login route http -a username:password post :PORT/signin

        try {
            const raw = await fetch(`${API}/signin`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${btoa(`${username}: ${password}`)}`
                }
            })
            const response = await raw.json()
            const token = response.token
            this.validateToken(token)
        } catch (err) {
            console.error(err)
        }

    }

    validateToken = token => {
        try {
            const user = jwt.verify(token, SECRET)
            this.setLoginState(true, token, user)
        } catch (err) {
            this.setLoginState(false, null, {})
            console.error('Invalid token')
        }
    }

    logout = () => {
        //reset everything in the state
        this.setLoginState(false, null, {})
    }

    componentDidount() {
        const cookieToken = cookie.load('auth')
        if (cookieToken) this.validateToken(cookieToken)
    }

    render() {
        return (
            <LoginContext.Provider value={this.state}>
                {this.props.children}
            </LoginContext.Provider>
        )
    }

}

export default AuthContext