import React from 'react'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './redux/reducer';
import {
    BrowserRouter, 
    Routes, 
    Route
} from 'react-router-dom'
import NotesScreen from './components/screens/NotesScreen'
import CreateNoteScreen from './components/screens/CreateNoteScreen'


const store = createStore(reducer);

const App = (props) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<NotesScreen />} />
                    <Route path="/create" element={<CreateNoteScreen />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App
