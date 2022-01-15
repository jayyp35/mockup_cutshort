import React from 'react'

function Step1({values,setValues}) {

    return (
        <div className='Step'>
            
            <div className='Step_Heading'>
                Welcome! First things first...
            </div>
            <div className='Step_Subheading'>
                You can always change them later.
            </div>

            <div className='Step_Form'>
                <div className='Step_Label'>
                    Full Name
                </div>
                <input 
                    className={`Step_Input ${values?.fullNameError ? "error" : ""}`}
                    name="fullName"
                    placeholder='Steve Jobs'
                    value={values?.fullName}
                    onChange={setValues}
                />
                
                <div className='Step_Label'>
                    Display Name
                </div>
                <input 
                    className={`Step_Input ${values?.displayNameError ? "error" : ""}`}
                    name="displayName"
                    placeholder='Steve'
                    value={values?.displayName}
                    onChange={setValues}
                />
            </div>

            
            
        </div>
    )
}

export default Step1
