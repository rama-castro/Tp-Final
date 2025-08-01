import React, { useState } from 'react'
import './Message.css'
import { redirect } from 'react-router'
import ICONS from '../../assets/constants/icons/icons'
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
				<div className='last-connection-container'>
					<span className='span' style={{fontSize: '11px'}} >{hora}</span>
					<ICONS.Doublecheckmark style={{color: '#888', fontSize: '16px'}}/>
				</div>
				
			</div>

				{
					message_selected && <button onClick={() => { deleteMessageById(id) }}>Eliminar</button>
				}
		</div>
	)
}
export default Message