import {useState} from 'react'

function useForm (callback) {

    const [values, setValues] = useState({})

    const handleSubmit = (e) => {
        if (e) e.preventDefault()
        callback(values)
        e.target.reset()
    }

    const handleChange = e => {
        e.persist()
        setValues(values => {
            const {name, value} = e.target
            return {
                ...values,
                [name]: value
            }
        })
    }

    const handleTextInput = {
        arbitraykey: 'arbitraryValue',
        onChange: function (e) {
            e.persist()
            setValues(values => {
                const {name, value} = e.target
                return {
                    ...values,
                    [name] : value,
                    state: false
                }
            })
        }
    }

    return [
        handleSubmit,
        handleChange,
        handleTextInput,
        values
    ]

}

export default useForm