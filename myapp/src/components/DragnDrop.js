import React from 'react';
import {useDropzone} from 'react-dropzone';

function DragnDrop(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
      onDrop: files => props.onSubmit(files[0].path)
  });
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
        {console.log(file)}
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container text-center pt-3 pb-3 mb-4" style={{backgroundColor:'#eee'}}>
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

export default DragnDrop