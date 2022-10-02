import React, {useState} from 'react'
import axios from 'axios'
import NoteButton from '../note/NoteButton'
import config from '../../../config.json'
import '../../../style.css'


const CreateNote = (props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const createNote = (event) => {
        event.preventDefault()

        if (title.length !== 0 && content.length !== 0) {
            axios.post(config.url + '/notes/', {
                title: title,
                content: content
            }).then((response) => window.location.reload())
                .catch((error) => console.error(error))
        }
    }

    return (
        <div className="create-note-container">
            <input 
                className="note-title"
                type="text"  
                placeholder="Title"
                onChange={(event) => setTitle(event.target.value)}
            />
            <input 
                className="note"
                type="text"  
                placeholder="Content"
                onChange={(event) => setContent(event.target.value)}
            />
            <NoteButton 
                className="note-create-button" 
                onClick={createNote}
            >
                Create
            </NoteButton>
        </div>
    )
}

export default CreateNote
