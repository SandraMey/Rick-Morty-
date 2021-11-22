import React from 'react';
import { CharactersList } from './components/CharactersList.jsx';
import {Header} from './components/Header.jsx';

const App = () => {
  return (
    <div className="App">
      <Header name="Jenny"/>
      <CharactersList />
    </div>
  );
}

export default App;
