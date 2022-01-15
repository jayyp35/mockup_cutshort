import {useState} from 'react'

export const useForm = (initialValues) => {

    const [values,setValues] = useState(initialValues)
    
    return [values, e => {
        console.log(e.target);
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }]
}