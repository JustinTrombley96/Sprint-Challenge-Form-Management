import React from 'react';
import './App.css';
import Register from './components/Register';
import {Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Recipes from './components/Recipes'

function App() {
  return (
    <div className="App">
    <Route exact path="/" component={Register} />
    <ProtectedRoute exact path='/restricted/data' component={Recipes} />
    </div>
  );
}

export default App;
