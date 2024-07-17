import {useState} from 'react'

export const useField = (type,defaultValue) => {
    const [value, setValue] = useState(defaultValue)

    const onChange = (event) => {
        const input=event.target.value
        setValue(input)
    }
    const reset = () => {
        setValue(defaultValue)
    }

    return {
        type,
        value,
        onChange,
        reset
    }
}