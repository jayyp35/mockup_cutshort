import React from 'react'
import '../../../scss/Onboard/Step1.scss'

function Step3({values,setValues}) {
    return (
        <div className='Step'>
            
            <div className='Step_Heading'>
                How are you planning to use Eden
            </div>
            <div className='Step_Subheading'>
                We'll streamline your setup accordingly.
            </div>

            <div className='Step_Form'>
                <div className='Step_Choice'>
                    <div className='Step_Choice_Box'>
                        For Myself
                        <div className='Step_Choice_Box_Subtext'>
                            Write Better. Think More Clearly. Stay Organized.
                        </div>
                    </div>
                    
                    <div className='Step_Choice_Box'>
                        With My Team
                        <div className='Step_Choice_Box_Subtext'>
                            Wikis, docs, tasks & projects, all in one place.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step3
