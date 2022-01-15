import React from 'react'

function Step1({values,setValues}) {
    return (
        <div className='Step1'>
            
            <div className='Step1_Heading'>
                Welcome! First things first...
            </div>
            <div className='Step1__Subheading'>
                You can always change them later.
            </div>

            <div className='InputLabel'>
                Full Name
            </div>
            <input 
                name="fullName"
                value={values?.fullName}
                onChange={setValues}
            />
            
            <div className='InputLabel'>
                Display Name
            </div>
            <input 
                name="displayName"
                value={values?.displayName}
                onChange={setValues}
            />
            
        </div>
    )
}

export default Step1
