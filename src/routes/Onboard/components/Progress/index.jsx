import React,{useState,useEffect} from 'react'

function Progress(props) {

    const { step } = props;
    const [progressWidth,setProgressWith] = useState(0)
    const stepsArray = [0,0,0,0];

    useEffect(() => {
        if(step) {
            setProgressWith(() => {
                switch(step) {
                    case 1 : return 20
                    case 2 : return 50
                    case 3 : return 80
                    case 4 : return 100
                    default: return 0
                }
            })
        }
    }, [step])
    
    return (
        <div className='Progress'>
            
            <div className='Progress_Bar'>
                <div className='Progress_Bar_Fill' style={{width:`${progressWidth}%`}}>
                </div>

                <div className='Progress_Bar_Container'>

                    {stepsArray.map((s,index) => (
                            <div 
                                className={`Progress_Bar_Box ${(index  < step) ? "fill" : ""}`} 
                                key={index}
                            >
                            {index + 1}
                            </div> 
                        )
                    )}

                </div>
                
            </div>
        </div>
    )
}

export default Progress
