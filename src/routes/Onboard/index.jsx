import React,{useState,useEffect} from 'react'
import { useForm } from '../../utils/useForm'
import '../../scss/Onboard/Onboard.scss'

import Progress from './Progress'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from  './Step3'
import Step4 from './Step4'

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

    useEffect(()=>{
        console.log("stepchanged",step)
    },[step])

    const getForm = () => {
        switch(step) {
            case 1 : 
                return <Step1 values={values} setValues={setValues}/>
            case 2 : 
                return <Step2 values={values} setValues={setValues}/>
            case 3 : 
                return <Step3 values={values} setValues={setValues}/>
            case 4 : 
                return <Step4 values={values} setValues={setValues}/>
            default : return <div>Step Error</div>;
        }
    }

    return (
        <div className='Onboard'>
            <div className='Onboard_Heading'>
                Eden
            </div>

            <Progress step={step} setStep={setStep}/>

            {getForm()}

            <div 
                className='Onboard_Button' 
                onClick={()=>{
                    setStep(step => step + 1)
                }}
            >
                Create Workspace
            </div>
        </div>
    )
}

export default Onboard
