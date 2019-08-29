import React from 'react'


function VersionRadioButtons(props) {
    return (
            <div className="mt-3">
                <div><strong>Choose File Version</strong></div>
                    <label className="pl-0 btn btn-default">
                        <input 
                         type="radio"  
                         name="version1" 
                         value="1" 
                         checked={props.selectedOption === '1'}
                         onChange={props.onVersionButtonChange}
                         /> Version 1
                    </label> 
                    <label className="pl-2 btn btn-default">
                        <input 
                        type="radio" 
                        name="verion2"
                        value="2"
                        checked={props.selectedOption === '2'}
                        onChange={props.onVersionButtonChange}
                        /> Version 2
                    </label>
            </div>
    )
}



export default VersionRadioButtons

