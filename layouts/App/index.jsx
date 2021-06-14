import React from 'react';
import { Switch, Route } from 'react-router';

import Home from '@pages/Home';
import Movie from '@pages/Movie';
import TV from '@pages/TV';
import Search from '@pages/Search';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' render = {()=>
        <Home />
      }/>
      <Route path='/movie' render = {()=> 
        <Movie />
      }/>
      <Route path='/tv' render = {()=> 
        <TV />
      }/>
      <Route path='/search' render = {()=> 
        <Search />
      }/>
    </Switch>
    
  )
};

export default App;