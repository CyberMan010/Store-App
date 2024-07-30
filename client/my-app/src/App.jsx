// import logo from './logo.svg';


import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [APIData, setAPIData] = useState([]);
   useEffect(() => {
          axios.get('../server/index.js')
              .then((response) => response.json()) 
                   ((APIData)=> {
                    setAPIData(APIData)
                   
              });
      }, []);
  return (
    <div>
    <h1>Data from the Backend:</h1>
    <ul>
      {APIData.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
 
  );
}

export default App;
