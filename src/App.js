import React from 'react';
import { Link, Route} from 'react-router-dom'
import FolderList from './FolderList/FolderList'
import Main from './Main/Main'
import DUMMYSTORE from './dummy-store'
import NotePage from './NotePage/NotePage'
import './App.css';

class App extends React.Component {
  state = {
    folders: [],
    notes: []
  }

  componentDidMount(){
    setTimeout( () => this.setState(DUMMYSTORE), 600)
  }

  render(){
	const { notes, folders } = this.state;

    return (
      <div className="App">
        <header className="App__header">
          <h1>
            <Link to='/' className="Header__Link">Noteful</Link>
          </h1>
        </header>

        <section className="App__navigation">
			<Route exact path="/" render={ () =>
				<FolderList folders={folders} />
			} />
			<Route exact path="/folders/:dolferId" render={ () =>
				<FolderList folders={folders} />
			} />
        </section>

        <main className="App__main">
			<Route exact path='/' render={ () =>
				<NotePage />
			} />
        </main>
        
      </div>
    );
  }
}

export default App;
