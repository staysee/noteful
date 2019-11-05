import React from 'react';
import { Link, Route} from 'react-router-dom'
import FolderList from './FolderList/FolderList'
import FolderName from './FolderName/FolderName'
import Main from './Main/Main'
import NotePage from './NotePage/NotePage'
import config from './config'
import DUMMYSTORE from './dummy-store'
import ApiContext from './ApiContext'
import './App.css';

class App extends React.Component {
  state = {
	notes: [],
    folders: []
  }


  componentDidMount(){
	  	  
	console.log(ApiContext);
    // setTimeout( () => this.setState(DUMMYSTORE), 600)
    Promise.all([
		fetch(`${config.API_ENDPOINT}/notes`),
		fetch(`${config.API_ENDPOINT}/folders`)
	])
		.then( ([notesRes, foldersRes]) => {
			if (!notesRes.ok)
				return notesRes.json().then( e => Promise.reject(e))
			if (!foldersRes.ok)
				return foldersRes.json().then( e => Promise.reject(e))
			
			return Promise.all([notesRes.json(), foldersRes.json()])
		})
		.then(([notes, folders]) => {
			console.log(`setting state!`)
			this.setState({notes, folders})
		})
		.catch( error => {
			console.error ({ error })
		})
  }

  render(){
	//change state to context value
	const value = {
		notes: this.state.notes,
		folders: this.state.folders
	}

    return (
		<ApiContext.Provider value={value}>
			<div className="App">
			<header className="App__header">
				<h1>
				<Link to='/' className="Header__Link">Noteful</Link>
				</h1>
			</header>

			<section className="App__navigation">
				<Route exact path="/" 
					component={FolderList}
				/>
				<Route exact path="/folder/:folderId"
					component={FolderList}
				/>

				<Route path="/note/:noteId"
					component={FolderName}
				/>
			</section>

			<main className="App__main">
				<Route exact path="/" 
					component={Main}
				/>

				<Route exact path="/folder/:folderId"
					component={Main}
				/>

				<Route path="/note/:noteId"
					component={NotePage}
				/>
			</main>
			
			</div>
		</ApiContext.Provider>
    );
  }
}

export default App

export const findNote = (notes=[], noteId) =>
  notes.find(note => note.id === noteId)