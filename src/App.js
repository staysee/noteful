import React from 'react';
import { Link, Route} from 'react-router-dom'
import FolderList from './FolderList/FolderList'
import FolderName from './FolderName/FolderName'
import Main from './Main/Main'
import NotePage from './NotePage/NotePage'
import AddFolder from './AddFolder/AddFolder'
import AddNote from './AddNote/AddNote'
import NotefulContext from './NotefulContext'
import ErrorBoundary from './ErrorBoundary'
import DUMMYSTORE from './dummy-store'
import config from './config'
import './App.css';

class App extends React.Component {
	state = {
		notes: [],
		folders: []
	}

	componentDidMount(){
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

	deleteNote = noteId => {
		const newNotes = this.state.notes.filter( note => note.id !== noteId);
		this.setState({
			notes: newNotes
		})
	}
	
	addFolder = folder => {
		const newFolders = [...this.state.folders, folder];
		this.setState({
			folders: newFolders
		})
	}

	addNote = note => {
		const newNotes = [...this.state.notes, note];
		this.setState({
			notes: newNotes
		})
	}

	render(){
		//change state to context value
		const value = {
			notes: this.state.notes,
			folders: this.state.folders,
			deleteNote: this.deleteNote,
			addFolder: this.addFolder,
			addNote: this.addNote
		}

		return (
			<NotefulContext.Provider value={value}>
				<div className="App">
					<header className="App__header">
						<h1><Link to='/' className="Header__Link">Noteful</Link></h1>
					</header>

					<ErrorBoundary>
						<section className="App__navigation">
							<Route exact path="/" component={FolderList} />
							<Route exact path="/folders/:folderId" component={FolderList} />
							<Route path="/notes/:noteId" component={FolderName} />
							<Route path="/add-folder" component={FolderList} />
							<Route path="/add-note" component={FolderList} />
						</section>
					</ErrorBoundary>

					<ErrorBoundary>
						<main className="App__main">
							<Route exact path="/" component={Main} />
							<Route exact path="/folders/:folderId" component={Main} />
							<Route path="/notes/:noteId" component={NotePage} />
							<Route path="/add-folder" component={AddFolder} />
							<Route path="/add-note" component={AddNote} />
						</main>
					</ErrorBoundary>
				</div>
			</NotefulContext.Provider>
		)
	}
}

export default App