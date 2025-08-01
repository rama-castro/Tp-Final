import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router'
import MessagesList from '../../Components/MessagesList/MessagesList'
import { getContactById } from '../../services/contactService'
import { NewMessageForm } from '../../Components/NewMessageForm/NewMessageForm'
import './ChatScreen.css'
import ICONS from '../../assets/constants/icons/icons'
import { MdHeight } from 'react-icons/md'

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
			<div className='messages-header-container'>
				<div className='messages-header-user-container'>
					<Link to="/">
						<ICONS.Arrowleft style={{ marginRight: '10px' }} />
					</Link>
					<img className='avatar' src={contact_selected.avatar} alt={contact_selected.name} />
					<div className='contact-info-container'>
						<h2>{contact_selected.name}</h2>
						<span className='span contact-last-connection'> {contact_selected.lastConnection}</span>
					</div>
				</div>
				<div className='chat-screen-contact-icons'>
					<div className='chat-screen-camera-icon'>
						<ICONS.Camera className='icon-no-hover icon-dark '/>
						<ICONS.DownArrow className='icon-no-hover icon-dark '/>
					</div>
					<ICONS.Search className='icon icon-dark' />
					<ICONS.DotsMenu className='icon icon-dark' />
				</div>
			</div>

			<div className='messages-body-container'>
				<MessagesList className='messages-list-container' messages={messages} deleteMessageById={deleteMessageById} />
			</div>
			<div className='new-message-form-container'>
				<NewMessageForm addNewMessage={addNewMessage} />
			</div>
			<img className='whatsapp-doodle-pattern' src="/images/whatsapp-doodle-pattern.jpg" alt="whatsapp-doodle-pattern" />
		</div>
	)
}



export default ChatScreen