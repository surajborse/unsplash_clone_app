import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

import Nav from './component/Nav';
import Hero from './component/Hero';
function App() {
  const [value, setValue] = useState("");
  const [result, setResults] = useState([])
  //
  const fetchimg = () => {
//IYfa8M5jmqWt5ViqlthMzlz-SDF5R3haCtHRqtodeWI
     fetch(`https://api.unsplash.com/search/photos?client_id=J-jEN2CxF2F42z1kGeIamEPimtKp4RxNTb2Zf3RnosA&query=${value}$orintation=squarish`)

      .then(res => res.json())
      .then(data => {
       setResults(data.results)
      })
      

  }
  return (
    <div>
    <Nav/>
      


      <div className="home">

        <form action="" className="search-form">

          <input type="text" placeholder="Search image" value={value} onChange={(e) => setValue(e.target.value)} className="input2" />
          <button className="btn btn-primary" type="submit" onClick={() => fetchimg()}>Search</button>


        </form>
      </div>
      <div className="gallery">
        {
          result.map((item) => {
            return <img className="item" key={item.id} src={item.urls.regular} />
          })
        }
      </div>

      <Hero/>
     
       <footer>
         <h4>Thank You..</h4>
       </footer>
</div> 

      );
}
 export default App;
