import React from 'react'
import PropTypes from 'prop-types'
import SingleDataSet from './SingleDataSet';
function DataSets(props) {
    return (
        <div className="text-center">
            <ul>
            {
               props.dataFiles.map((file, index) => {
                   return <SingleDataSet key={index} fileName={file.datafile.document}/>
               })
           } 
            </ul>
           
        </div>
    )
}

DataSets.propTypes = {
    msg: PropTypes.array
}

export default DataSets

