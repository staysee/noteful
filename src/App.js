import React from 'react';
import { Link, Route } from 'react-router-dom'
import STORE from './dummy-store'
import './App.css';

import FolderList from './FolderList/folderList'
import Main from './Main/main'

class App extends React.Component {
  state = {
    folders: STORE.folders,
    notes: STORE.notes
  }

  render(){
    return (
      <div className="App">
        <header className="App__header">
          <h1>
            <Link to='/' className="Header__Link">Noteful</Link>
          </h1>
        </header>
        <nav className="App__navigation">
          <FolderList folders={this.state.folders} />
        </nav>
        <main className="App__main">
          <Main notes={this.state.notes} />
        </main>
        
      </div>
    );
  }
}

export default App;
