import React from 'react';
import { Link, Route} from 'react-router-dom'
import FolderList from './FolderList/FolderList'
import FolderName from './FolderName/FolderName'
import Main from './Main/Main'
import NotePage from './NotePage/NotePage'
import config from './config'
import DUMMYSTORE from './dummy-store'
import './App.css';

class App extends React.Component {
  state = {
    folders: [],
    notes: []
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
          <Route exact path="/" 
            render={ (routerProps, history) => 
            <FolderList folders={folders} {...routerProps} />} 
          />
          <Route exact path="/folder/:folderId"
            render={ (routerProps) => 
              <FolderList folders={folders} {...routerProps} />} 
          />

          <Route path="/note/:noteId"
            render={ (routerProps) => {
              const note = notes.find(note => note.id === routerProps.match.params.noteId);
              const folder = folders.find(folder => folder.id === note.folderId);
              return <FolderName folder={folder} {...routerProps} />
            }}
          />
        </section>

        <main className="App__main">
          <Route exact path="/" 
              render={ (routerProps) => {
                console.log(routerProps)
                return <Main notes={notes} {...routerProps} />} 
              }
          />

          <Route exact path="/folder/:folderId"
            render={ (routerProps) => {
              let notesInFolder = [];
              if (!routerProps.match.params.folderId){
                notesInFolder = notes
              } else {
                notesInFolder = notes.filter( note => note.folderId === routerProps.match.params.folderId)
              }

              return <Main notes={notesInFolder} {...routerProps} />
            }}
          />

          <Route path="/note/:noteId"
            render={ (routerProps) => {
              console.log(`NoteID: `, routerProps.match.params.noteId)
              const note = notes.find(note => note.id === routerProps.match.params.noteId);
              console.log(note)
              return <NotePage {...routerProps} note={note} />
            }}
          />
        </main>
        
      </div>
    );
  }
}

export default App

export const findNote = (notes=[], noteId) =>
  notes.find(note => note.id === noteId)