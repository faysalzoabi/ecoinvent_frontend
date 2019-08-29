import React, {useState} from 'react';
import './App.css';
import FileUpload from './components/FileUpload';
import DataSets from './components/DataSets';
import Search from './components/Search';
import axios from 'axios';

const App = () => {
  const [dataSets, setDataSets] = useState([])

  const fetchData = () => {
    axios.get('http://localhost:8000/api/data/')
         .then( res => {
          console.log('res', res.data);
           setDataSets(res.data)
         })
         .catch(err => {
           console.log(err);
         })
  }

  const onSubmit = (e, searchedWord) => {
    e.preventDefault();
    axios.get(`http://localhost:8000/api/data/?search=${searchedWord}`)
         .then( res => {
          console.log('res', res.data);
           setDataSets(res.data)
         })
         .catch(err => {
           console.log(err);
         })
  }
  return (
      <div className="container mt-4">
        <h4 className="dispaly-4 text-center mb-4">
          <i className="fab fa-react"/>Ecoinvent File Upload
        </h4>
        <FileUpload/>
        <button className="btn btn-primary" onClick={fetchData}>Fetch All Datasets</button>
        <Search onSubmit = {onSubmit}/>
        <DataSets dataFiles={dataSets}/>
      </div>
  );
}

export default App;
