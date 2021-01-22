import React from 'react'

const Button = ({gif, setGif, text}) => {

    const gifTrue = ({target}) =>{
        setGif(!gif)
        
    }

    return (
        <button onClick={gifTrue} >{text}</button>
    )
}

export default Button
