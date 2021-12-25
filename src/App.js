import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";


import "./App.css";

import Navbar from "./Component/Navbar";
import Button from "./Component/Button";
import Card from "./Component/Card";


export default function App() {
  const [person, setPerson] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    getAllNodes();
  }, []);

  async function getAllNodes() {
    const user = { jobseeker_id: "614b410c2c4b197356a37f18" };
    await axios
      .post("https://api.meetworks.in/users/get_unique_jobseeker_profile", user)
      .then((response) => {
        var data = response.data;
        console.log(data[0]);
        setPerson(data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  }

  // console.log(data);
  if (isLoading) {
    return (
      <Router>
        <div className="App">
          <p>loading.....</p>
        </div>
      </Router>
    );
  }

  return (
    <Router>
      <div className="App">
      
        <Navbar/>
        
        <Card user={person}  />
        
        <Button/>
       
        
      </div>
    </Router>
  );
}

