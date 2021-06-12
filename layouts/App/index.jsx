import React from 'react';
import { Switch, Route } from 'react-router';

import Movie from '@layouts/Movie';
import Home from '@pages/Home';


const App = () => {
  return (
    <Switch>
      <Route exact path='/' render = {()=>
        <Movie>

        </Movie>
      }/>
      <Route path='/movie' render = {()=> 
        <Movie>

        </Movie>
      }/>
      <Route path='/tv' render = {()=> 
        <Movie>

        </Movie>
      }/>
      <Route path='/search' render = {()=> 
        <Movie>

        </Movie>
      }/>
    </Switch>
    
  )
};

export default App;