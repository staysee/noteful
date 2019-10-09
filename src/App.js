import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import STORE from './dummy-store'
import './App.css';

import FolderList from './FolderList/folderList'
import Main from './Main/main'
import Note from './Note/note'

class App extends React.Component {
  // state = {
  //   folders: STORE.folders,
  //   notes: STORE.notes
  // }

  render(){
    return (
      <div className="App">
        <header>
          <h1>
            <Link to="/">Noteful</Link>
          </h1>
        </header>
        <nav className="App__navigation">
          <Switch>
            <Route exact path='/' component={FolderList} />
            <Route path='/folder/:folderId' component={FolderList} />
            <Route path='/note/:noteId' component={FolderList} />
          </Switch>
        </nav>

        <main className="App__main">
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/folder/:folderId' component={Main} />
            <Route path='/note/:noteId' component={Note} />
          </Switch>

        </main>
        
      </div>
    );
  }
}

export default App;
