import React, {useState} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {getNotes} from '../../../redux/actions'
import NoteButton from './NoteButton'
import config from '../../../config.json'
import '../../../style.css'


const Note = (props) => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState(props.title)
    const [content, setContent] = useState(props.content)

    const updateNote = (id) => {
        axios.put(config.url + `/notes/${id}`, {
            title: title,
            content: content
        })
            .then((response) => {
                axios.get(config.url + '/notes/')
                    .then((response) => {
                        getNotes.payload = response.data
                        dispatch(getNotes)
                    }).catch((error) => console.error(error))
            })
            .catch((error) => console.error(error))
    }

    const deleteNote = (id) => {
        axios.delete(config.url + `/notes/${id}`)
            .then((response) => {
                axios.get(config.url + '/notes/')
                    .then((response) => {
                        getNotes.payload = response.data
                        dispatch(getNotes)
                    }).catch((error) => console.error(error))
            })
            .catch((error) => console.error(error))
    }

    return (
        <div className="note-container">
            <input 
                className="note-title"
                type="text"  
                defaultValue={props.title} 
                onChange={(event) => setTitle(event.target.value)}
            />
            <input 
                className="note"
                type="text"  
                defaultValue={props.content} 
                onChange={(event) => setContent(event.target.value)}
            />
            <NoteButton 
                className="note-delete-button" 
                onClick={(event) => deleteNote(props.id)}
            >
                Delete
            </NoteButton>
            <NoteButton 
                className="note-update-button" 
                onClick={(event) => updateNote(props.id)}
            >
                Update
            </NoteButton>
        </div>
    )
}

export default Note
