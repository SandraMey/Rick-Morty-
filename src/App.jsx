import React from 'react';
import { CharactersList } from './components/CharactersList.jsx';
import { CharacterDetails } from './components/CharacterDetails.jsx';
import { Header} from './components/Header.jsx';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Header name="Jenny"/>
      <Routes>
        <Route exact path="/" element={<CharactersList />}/>
        <Route path="/character/:id" element={<CharacterDetails /> }/>
      </Routes>
    </Router>
  );
}

export default App;
