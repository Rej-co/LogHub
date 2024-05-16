import React, { useEffect,  useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home  from './component/Home.js';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  Register from './component/Register.js'
import Login from './component/Login.js'
import Delivery from './component/Delivery.js';
import Requestp1 from './component/Requestp1.js';
import Requestp2 from './component/Requestp2.js';
import Requestp3 from './component/Requestp3.js';
import Cashp from './component/Cashp.js';
import Orderconf from './component/Orderconf.js';
import axios from 'axios';



function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Make a GET request to fetch data from Express server
        const response = await axios.get('/');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
   
    <Router>
      <Routes>
      <Route path="/" exact element={ <Home />} />
      <Route path="/register" element={ <Register />} />
      <Route path="/login" element={ <Login />} />
      <Route path="/delivery" element={ <Delivery />} />
      <Route path='/requestp1' element={ <Requestp1 />} />
      <Route path='/requestp2' element={ <Requestp2 />} />
      <Route path='/requestp3' element={ <Requestp3 />} />
      <Route path='/orderconf' element={ <Orderconf />} />
      <Route path='/cashp' element={ <Cashp />} />
      </Routes>
    </Router>


  
  );
}

export default App;
