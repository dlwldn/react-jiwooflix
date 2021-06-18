import React from 'react';
import { Switch, Route } from 'react-router';

import Home from '@pages/Home';
import Movie from '@pages/Movie';
import TV from '@pages/TV';
import Search from '@pages/Search';
import Detail from '@pages/Detail';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' render = {()=> <Home />}/>
      <Route exact path='/movie' render = {()=> <Movie />}/>
      <Route exact path='/tv' render = {()=> <TV />}/>
      <Route path='/search' render = {()=> <Search />}/>
      <Route path='/movie/:id' render ={()=> <Detail />} />
      <Route path='/tv/:id' render ={()=> <Detail />} />
    </Switch>
    
  )
};

export default App;