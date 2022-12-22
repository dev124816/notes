import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Title from '../Title'
import Input from '../Input'
import Button from '../Button'
import config from '../../config.json'
import '../../style.css'


const CreateNote = (props) => {
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const createNote = (event) => {
        event.preventDefault()

        if (title.length !== 0 && content.length !== 0) {
            axios.post(config.url + '/notes/', {
                title: title,
                content: content
            }).then((response) => {
                navigate('/')
            }).catch((error) => console.error(error))
        }
    }

    return (
        <>
            <Title>Create a Note</Title>
            <div className="create-note-container">
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
                <Button
                    backgroundColor="#01BE4D"
                    onClick={createNote}                
                >
                    Create
                </Button>
            </div>
        </>
    )
}

export default CreateNote
