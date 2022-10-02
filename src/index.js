import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import notesRoutes from './routes/notes.js'


const app = express()

app.use(bodyParser.json())

app.use(cors())

app.use('/notes', notesRoutes)

mongoose.connect('mongodb://localhost:27017/notes')
    .then(
        () => app.listen(5000)
    ).catch(
        (error) => console.error(error.message)
    )
