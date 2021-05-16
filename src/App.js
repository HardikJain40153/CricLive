import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import './App.css';
import Navbar from './component/Navbar';
import MyCard from './component/MyCard';
import {getMatches} from './api/Api';

function App() {
  const [matches, setMatches] = useState([]);
  useEffect(()=>{
    getMatches()
    .then((data)=> {
      setMatches(data.matches)
    })
    .catch((error)=>console.log("Can't load data"));  
     }, []);
  return (
    <div className="App">
      <Navbar />
      <Typography id="typo" variant="h3">Live Cricket</Typography>
      <Typography id="typo1" variant="h6">Watch score here at your fingertips</Typography>
      <Grid id = "cent">
      <Grid id="col">
        {matches.map((match)=>(
        <nav>
          {match.type==='Twenty20'?(
             <MyCard key={match.unique_id} match={match} />)
          :(''
            
            )}
        </nav>
        ))}
      </Grid>
      </Grid>
    </div>
  );
}

export default App;
