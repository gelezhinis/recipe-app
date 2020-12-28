import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {RecipesState} from './context/RecipesContext';
import './App.css';

import Nav from './components/Nav';
import Hero from './components/Hero';
import FullRecipe from './components/FullRecipe';

function App() {
  return (
    <RecipesState>
      <Router>
        <Nav />
        <Route exact path="/recipe-app" component={Hero} />
        <Route path="/recipes/:recipeId" component={FullRecipe} />
      </Router>
    </RecipesState>
  );
}

export default App;
