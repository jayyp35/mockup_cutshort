import React from 'react'

import single1 from '../../../../resources/images/single1.png'
import single2 from '../../../../resources/images/single2.png'
import multi1 from '../../../../resources/images/multi1.png'
import multi2 from '../../../../resources/images/multi2.png'

function Step3({usageType,setUsageType}) {
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
                    <div 
                        className='Step_Choice_Box' 
                        onClick={()=> setUsageType(1)}
                        style={{
                            border: usageType === 1 ? "2px solid #7256fd" : "2px solid #e5e5e5"
                        }}
                    >
                        <img
                            src={usageType === 1 ? single2 : single1}
                            height="25px"
                            width="25px"
                            style={{padding:"5px"}}
                        />
                        For Myself
                        <div className='Step_Choice_Box_Subtext'>
                            Write Better. Think More Clearly. Stay Organized.
                        </div>
                    </div>
                    
                    <div 
                        className='Step_Choice_Box' 
                        onClick={()=> setUsageType(2)}
                        style={{
                            border: usageType === 2 ? "2px solid #7256fd" : "2px solid #e5e5e5"
                        }}
                    >
                        <img
                            src={usageType === 2 ? multi2 : multi1}
                            height="25px"
                            width="25px"
                        />
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
