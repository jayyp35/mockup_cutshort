import React,{useState,useEffect} from 'react'
import { useForm } from '../../utils/useForm'

import Step1 from './Step1'

function Onboard() {

    const [step,setStep] = useState(1)
    const [values,setValues] = useForm({
        fullName : "",
        displayName : "",
        workspaceName : "",
        workspaceUrl : "",
    })
    const [usageType,setUsageType] = useState()

    useEffect(()=>{
        console.log("valuesChanged",values);
    },[values])

    const getForm = () => {
        switch(step) {
            case 1 : 
                return <Step1 values={values} setValues={setValues}/>
            default : return <div>Step Error</div>;
        }
    }

    return (
        <div className='Onboard'>
            <div className='Onboard_Heading'>
                Eden
            </div>

            {getForm()}
        </div>
    )
}

export default Onboard
