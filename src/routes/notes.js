import express from 'express'
import {
    readNotes,
    createNote,
    updateNote,
    deleteNote
} from '../controllers/notes.js'


const router = express.Router()

router.get('/', readNotes)
router.post('/', createNote)
router.put('/:id', updateNote)
router.delete('/:id', deleteNote)

export default router
