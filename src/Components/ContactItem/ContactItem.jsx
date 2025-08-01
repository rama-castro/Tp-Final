import React from 'react';
import { Link } from 'react-router';
import './ContactItem.css'

const ContactItem = ({ contact }) => {
    return (
        <Link to={`/contact/${contact.id}/messages`}>
                <div className='contact-item-container'>
                    <div className='avatar-container'>
                        <img className='avatar' src={contact.avatar} alt={contact.name} />
                    </div>
                    <div className='contact-name-container'>
                        <h2>{contact.name}</h2>
                        <span className='span'> {contact.messages[contact.messages.length - 1].texto}</span>
                    </div>
                    <span className='span contact-last-connection'> {contact.lastConnection}</span>
                </div>
        </Link>
    );
};

export default ContactItem