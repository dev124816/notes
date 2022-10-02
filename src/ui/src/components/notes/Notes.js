import React, {useEffect} from 'react'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {getNotes} from '../../redux/actions'
import Note from './note/Note'
import NotesTitle from './NotesTitle'
import CreateNote from './create_note/CreateNote'
import config from '../../config.json'
import '../../style.css'


const Notes = (props) => {
    const dispatch = useDispatch()

    const notes = useSelector((state) => state.notes)
    
    useEffect(
        () => {
            axios.get(config.url + '/notes/')
                .then((response) => {
                    getNotes.payload = response.data
                    dispatch(getNotes)
                }).catch((error) => console.error(error))
        }, 
        [dispatch]
    )

    return (
        <>
            <NotesTitle />
            <div className="notes">
                {notes.map((note, index) => (
                    <Note 
                        key={index} 
                        id={note?._id} 
                        title={note?.title} 
                        content={note?.content} 
                    />
                ))}
            </div>
            <CreateNote />
        </>
    )
}

export default Notes
