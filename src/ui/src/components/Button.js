import React from 'react'


const Button = (props) => {
    return (
        <button 
            className="button" 
            style={{backgroundColor: props.backgroundColor}}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button
