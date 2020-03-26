import React from 'react'

export const SettingsContext = React.createContext()

export default class Settings extends React.Component {

    constructor() {
        super()
        this.state = {
            resultsPerPage : 10, changePagination: this.changePagination
        }
    }

    changePagination = tasks => {

        this.setState({resultsPerPage: tasks})
    }

        render () {
            return (
                <SettingsContext.Provider value={this.state}> 
                         {this.props.children}
                </SettingsContext.Provider>
       
            )
    }

}
