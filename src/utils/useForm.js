import {useState} from 'react'

export const useForm = (initialValues) => {

    const [values,setValues] = useState(initialValues)
    
    return [values, e => {
        setValues({
            ...values,
            [e.target.name] : e.target.value,
            [`${e.target.name}Error`] : false
        })
    }, (key,value) => {
        setValues((currentValues) => {
            return {
               ...currentValues,
                [key] : value 
            }
        })
    }]
}