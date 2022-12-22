import React from 'react'


const Input = (props) => {
  return (
    <input 
        className="input"
        type="text"  
        style={{height: props.height}}
        defaultValue={props.defaultValue} 
        placeholder={props.placeholder}
        onChange={props.onChange}
    />
  )
}

export default Input
