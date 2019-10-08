import React from 'react';
import { Route } from 'react-router-dom'
import STORE from './dummy-store'
import './App.css';

import Header from './Header/header'
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
        <Header />
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
