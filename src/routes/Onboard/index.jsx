import React,{useState} from 'react'
import { useForm } from '../../utils/useForm'
import {validateFields} from '../../utils/validation'
import '../../scss/Onboard/Onboard.scss'

import leaf from '../../resources/images/leaf.png'
import Progress from './components/Progress'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Step4 from './components/Step4'

function Onboard() {

    const [step,setStep] = useState(1)
    const [values,setValues,setErrors] = useForm({
        fullName : "",
        displayName : "",
        workspaceName : "",
        workspaceUrl : "",
    })
    const [usageType,setUsageType] = useState()

    const handleButtonClick = () => {
        if(step < 3) {
            if(validateFields(values,step,setErrors))
                setStep(step => step + 1)
        } else if (step < 4) {
            setStep(step => step + 1)
        }
            
    }

    const getForm = () => {
        switch(step) {
            case 1 : 
                return <Step1 values={values} setValues={setValues}/>
            case 2 : 
                return <Step2 values={values} setValues={setValues}/>
            case 3 : 
                return <Step3 usageType={usageType} setUsageType={setUsageType}/>
            case 4 : 
                return <Step4 values={values} setValues={setValues}/>
            default : return <div>Step Error</div>;
        }
    }

    return (
        <div className='Onboard'>
            <div className='Onboard_Heading'>
                <img src={leaf} height="40px" width="40px" style={{marginRight:"10px"}} alt="logo"/>
                Eden
            </div>

            <Progress step={step} setStep={setStep}/>

            {getForm()}

            <div 
                className='Onboard_Button'
                onClick={handleButtonClick}
            >
                {step !== 4 ? "Create Workspace" : "Launch Eden"}
                
            </div>
        </div>
    )
}

export default Onboard
