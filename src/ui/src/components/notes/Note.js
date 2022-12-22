import React, {useState} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {getNotes} from '../../redux/actions'
import Input from '../Input'
import Button from '../Button'
import config from '../../config.json'
import '../../style.css'


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
            <Input 
                defaultValue={props.title} 
                placeholder="Title"
                onChange={(event) => setTitle(event.target.value)}
            />
            <Input 
                height={200}
                defaultValue={props.content} 
                placeholder="Content"
                onChange={(event) => setContent(event.target.value)}
            />
            <div className="note-actions-container">
                <Button 
                    backgroundColor="#F14140"
                    onClick={(event) => deleteNote(props.id)}
                >
                    Delete
                </Button>
                <Button 
                    backgroundColor="#F2B231"
                    onClick={(event) => updateNote(props.id)}
                >
                    Update
                </Button>
            </div>
        </div>
    )
}

export default Note
