import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router'
import MessagesList from '../../Components/MessagesList/MessagesList'
import { getContactById } from '../../services/contactService'
import { NewMessageForm } from '../../Components/NewMessageForm/NewMessageForm'
import './ChatScreen.css'
import ICONS from '../../assets/constants/icons/icons'

const ChatScreen = () => {
	const { contact_id } = useParams()

	const contact_selected = getContactById(contact_id)

	const [messages, setMessages] = useState([])

	useEffect(() => {
		setMessages(contact_selected.messages)
	}, [contact_selected])

	const deleteMessageById = (message_id) => {
		const new_message_list = []
		for (const message of messages) {
			if (message.id !== message_id) {
				new_message_list.push(message)
			}
		}
		setMessages(new_message_list)
	}

	const addNewMessage = (text) => {

		const new_mesage = {
			emisor: 'YO',
			hora: '11:10',
			texto: text,
			status: 'no-visto',
			id: messages.length + 1
		}
		const cloned_messages_list = [...messages]
		cloned_messages_list.push(new_mesage)
		setMessages(cloned_messages_list)
	}

	const deleteAllMessages = () => {
		setMessages([])
	}

	return (
		<div className='chat-screen-container'>
			<div className='contact-info-container'>
				<Link to="/">
					<ICONS.Arrowleft/>
				</Link>
				<div className='avatar-container'>
					<img className='avatar' src={contact_selected.avatar} alt={contact_selected.name} />
				</div>
				<div className='contact-name-container'>
					<h2>{contact_selected.name}</h2>
					<span className='contact-last-connection'> {contact_selected.lastConnection}</span>
				</div>
				<div className='contact-icons-container'>
					<i class="bi bi-chat-left-dots-fill"></i>
					<i class="bi bi-chat-left-dots-fill"></i>
					<i class="bi bi-chat-left-dots-fill"></i>


				</div>
			</div>
			<h1>Mensajes:</h1>
		

			<MessagesList messages={messages} deleteMessageById={deleteMessageById} />
			<NewMessageForm addNewMessage={addNewMessage} />
		</div>
	)
}



export default ChatScreen