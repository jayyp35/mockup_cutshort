import React from 'react'
import '../../../scss/Onboard/Step1.scss'

function Step2({values,setValues}) {
    return (
        <div className='Step'>
            
            <div className='Step_Heading'>
                Let's setup a home for all your work
            </div>
            <div className='Step_Subheading'>
                You can always create another workspace later.
            </div>

            <div className='Step_Form'>
                <div className='Step_Label'>
                    Workspace Name
                </div>
                <input 
                    className='Step_Input'
                    name="fullName"
                    placeholder='Eden'
                    value={values?.workspaceName}
                    onChange={setValues}
                />
                
                <div className='Step_Label'>
                    Workspace URL <span className='grey'>(optional)</span>
                </div>
                <div className='Step_CustomInput'>
                    <div className='Step_CustomInput_Text'>
                        www.eden.com/
                    </div>
                    <input 
                        className='Step_CustomInput_Input Step_Input'
                        name="displayName"
                        placeholder='Example'
                        value={values?.workspaceUrl}
                        onChange={setValues}
                    />
                </div>
            </div>

            
            
        </div>
    )
}

export default Step2
