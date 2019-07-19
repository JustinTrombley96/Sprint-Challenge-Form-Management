import React from 'react';
import './App.css';
import Register from './components/Register';
import {Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Data from './components/Data'

function App() {
  return (
    <div className="App">
    <Route exact path="/" component={Register} />
    <ProtectedRoute exact path='/restricted/data' component={Data} />
    </div>
  );
}

export default App;
