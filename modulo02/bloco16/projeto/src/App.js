import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './trivia.png';
import './App.css';
import Login from './components/Login';
import Settings from './pages/settings';
import Header from './components/Header';
import Game from './pages/Game';
import Ranking from './pages/Ranking';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>
          SUA VEZ
        </p>
      </header>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={ (r) => <Login { ...r } /> }
        />

        <Route
          exact
          path="/game"
          render={ (r) => <Game { ...r } /> }
        />

        <Route
          exact
          path="/configuracao"
          render={ (r) => <Settings { ...r } /> }
        />

        <Route
          exact
          path="/ranking"
          render={ (r) => <Ranking { ...r } /> }
        />

      </Switch>
    </div>
  );
}

export default App;
