import React, { useState } from 'react'
import './Message.css'
import { redirect } from 'react-router'
const Message = ({ emisor, hora, id, texto, status, deleteMessageById }) => {


	const [message_selected, setMessageSelected] = useState(false)

	const handleChangeMessageSelected = (e) => {
		e.preventDefault()
		setMessageSelected(true)
	}
	const Message = (message_selected) => {
		if (message_selected.emisor === 'YO') return 'message message-me'; else return 'message message-other';
	}

	return (
		<div className='messages-container' onContextMenu={handleChangeMessageSelected}>
			<div className={Message({ emisor })} >
				<p>{texto}</p>
				<span>{hora}</span>
				{
					message_selected && <button onClick={() => { deleteMessageById(id) }}>Eliminar</button>
				}
			</div>
		</div>
	)
}
export default Message