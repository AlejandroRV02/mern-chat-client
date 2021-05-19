import React from 'react'

import './input.css';

const Input = ({message, setMessage, sendMessage}) => {
    return (
        <form onSubmit={sendMessage} className="form">
            <input 
                className="input"
                placeholder="Type a message"
                type="text"
                value={message}
                onChange={event => setMessage(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} />
            <button className="send-btn">Send Message</button>
        </form>
    )
}

export default Input
