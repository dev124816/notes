import mongoose from 'mongoose'


const noteSchema = mongoose.Schema(
    {
        title: String,
        content: String
    }
)

const Note = mongoose.model('notes', noteSchema)

export default Note
