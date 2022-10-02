import React from 'react'


const NoteButton = (props) => {
    return (
        <button 
            className={props.className} 
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default NoteButton
