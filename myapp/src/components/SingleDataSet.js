import React from 'react'


function SingleDataSet(props) {
    let fileName = props.fileName.split('/').slice(-1)[0]
    return (
            <li>
                <i className="mr-2 fas fa-folder-open"/>
                {fileName}
            </li>
      
    )
}



export default SingleDataSet

