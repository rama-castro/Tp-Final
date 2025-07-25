import React, { useState } from 'react'
import './NewMessageForm.css'
import ICONS from '../../assets/constants/icons/icons'

const NewMessageForm = ({ addNewMessage }) => {
    const handleSubmitSendMessageForm = (event) => {
        event.preventDefault()
        let new_message_text = event.target.message.value
        addNewMessage(new_message_text)
        event.target.message.value = ''
        setMessageInput('')
    }
    const [messageInput, setMessageInput] = useState('')


    return (
        <form onSubmit={handleSubmitSendMessageForm}>
            <div className='message-input-container'>
                <input type="text" placeholder='Escribe un mensaje...' id='message' name='message' required value={messageInput} onChange={(e) => setMessageInput(e.target.value)} />
                <button type='submit'>
                    {messageInput.trim() ? (
                        <ICONS.Send className='send-icon' />
                    ) : (
                        <ICONS.Mic className='mic-icon' />
                    )}
                </button>
            </div>
        </form>
    )
}

export { NewMessageForm }