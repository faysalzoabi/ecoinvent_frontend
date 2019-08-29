import React, {useState} from 'react'
import axios from 'axios';
import Message from './message';
import Progress from './Progress';
import VersionRadioButtons from './VersionRadioButtons';
import SystemRadioButtons from './SystemRadioButton';
import DragnDrop from './DragnDrop';

const FileUpload = () => {
    const [file, setFile] = useState('')
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [selectedVersionOption, setVersionOption] = useState('1')
    const [selectedSystemOption, setSystemOption] = useState('1')

    const onVersionButtonChange = e => {
        setVersionOption(e.target.value)
    }

    const onSystemButtonChange = e => {
        setSystemOption(e.target.value)
    }

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('document', file);
        formData.append('version', parseInt(selectedVersionOption));
        formData.append('system', parseInt(selectedSystemOption));
        try {
            const res = await axios.post('http://localhost:8000/api/files/', formData, {
                headers:{
                    'Content-Type':'multipart/form-data'
                   },
                onUploadProgress:progressEvent => {
                    setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100)/progressEvent.total)))
                
                    // Clear percentage
                    setTimeout(() => {
                        setUploadPercentage(0)
                    }, 10000);
                }
            });
            setMessage('File Uploaded')
        }catch(err){
            if(err.response.status === 500) {
                setMessage('There was a problem with the server')
            }
            else {
                setMessage(err.response.data.msg); 
            }
        }
    }
    return (
        <>
        {message ? (<Message msg={message}/>): (null)}
        <form onSubmit={onSubmit}>
            <div className="custom-file mb-4">
                <input type="file" className="custom-file-input" id="customFile" onChange={onChange}/>
                <label className="custom-file-label" htmlFor="customFile">
                    {filename}
                </label>
            </div>
            <Progress percentage={uploadPercentage}/>
            <VersionRadioButtons selectedOption={selectedVersionOption} onVersionButtonChange={onVersionButtonChange}/>
            <SystemRadioButtons selectedOption={selectedSystemOption} onSystemButtonChange={onSystemButtonChange}/>
            <input type="submit" value="upload" className="btn btn-primary btn-block mt-4"/>
        </form>
        {uploadedFile ? (
        <div className="row mt-5">
            <div className="col-md6 m-auto">
                <h3 className="text-center">
                    {uploadedFile.fileName}
                </h3>
            </div>
        </div>
         ):null }
        </>
    )
}

export default FileUpload
