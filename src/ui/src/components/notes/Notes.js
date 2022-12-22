import React, {useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getNotes} from '../../redux/actions'
import Note from './Note'
import Title from '../Title'
import Button from '../Button'
import config from '../../config.json'
import '../../style.css'


const Notes = (props) => {
    const dispatch = useDispatch()

    const navigate = useNavigate()

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
            <Title>Notes</Title>
            <div className="notes">
                {notes.map((note, index) => (
                    <Note 
                        key={index} 
                        id={note?._id} 
                        title={note?.title} 
                        content={note?.content} 
                    />
                ))}
                <Button
                    backgroundColor="#01BE4D"  
                    onClick={(event) => navigate('/create')}  
                >
                    Create
                </Button>            
            </div>
        </>
    )
}

export default Notes
