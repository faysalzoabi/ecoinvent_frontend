import React from 'react'


function SystemRadioButtons(props) {
    return (
            <div className="mt-3">
                <div><strong>Choose File System</strong></div>
                    <label className="pl-0 btn btn-default">
                        <input 
                         type="radio"  
                         name="system1" 
                         value="1" 
                         checked={props.selectedOption === '1'}
                         onChange={props.onSystemButtonChange}
                         /> System 1
                    </label> 
                    <label className="pl-2 btn btn-default">
                        <input 
                        type="radio" 
                        name="system2"
                        value="2"
                        checked={props.selectedOption === '2'}
                        onChange={props.onSystemButtonChange}
                        /> System 2
                    </label>
            </div>
    )
}



export default SystemRadioButtons

