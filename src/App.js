import img1 from './images/img1.jpg'
import './App.css';
import React,{useState} from 'react';

function App() {

  
  const [data,setData]=useState("")

  function getdata(item){
    setData(item.target.value)
  }

  return (
  
    <div className="App">
      <div className='body'>
      <body>
        <h1>{data}</h1>
        <img src={img1} /><br></br>
        <p>Enter to set Title</p>
        <input type="text" onChange={getdata}/>
        <p>At Bridgelabz we are a tech community of</p>
        <div className='list'>
        <ul>
          <li>technologists</li>
          <li>thinkers</li>
          <li>builders</li>
         </ul>
         <p>
          Working together to keep the Tech Employability of Engineers alive and accessible,so tech companies worldwide can get contributors and creators for technology solutions.We believe this act of human collboration accross an Employability platform is essential to individual growth and our collective feature.
        </p>
        <p>
            To know about us, visit <a href="https://www.bridgelabz.com/">Bridgelabz</a>
            to learn even more about our mission i.e. <strong>Employability to all.</strong>
        </p>
         </div> 
      </body>
      </div>
    </div>
  );
}

export default App;
