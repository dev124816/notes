import mongoose from 'mongoose'
import Note from '../models/notes.js'


export const readNotes = async (request, response) => {
    try {
        const notes = await Note.find()        
        response.status(200)
            .json(notes)
    } catch (error) {
        response.status(404)
            .json(
                {
                    message: error.message
                }
            )
    }
}

export const createNote = async (request, response) => {
    const note = new Note(request.body)

    try {
        await note.save()
        response.status(200)
            .json(note)
    } catch (error) {
        response.status(409)
            .json(
                {
                    message: error.message
                }
            )
    }
}

export const updateNote = async (request, response) => {
    const {id} = request.params
    const data = request.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(404)
            .send('Note not found.')
    }

    const note = await Note.findByIdAndUpdate(id, {...data})

    response.status(200)
        .json(note)
}

export const deleteNote = async (request, response) => {
    const {id} = request.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(404)
            .send('Note not found.')
    }

    await Note.findByIdAndRemove(id)

    response.status(200)
        .send('Note has been deleted.')
}
