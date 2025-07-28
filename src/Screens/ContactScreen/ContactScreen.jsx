import React, { useState } from 'react';
import { getContactList } from '../../services/contactService';
import ContactList from '../../Components/ContactList/ContactList';
import UnreadMsgsScreen from '../UnreadMsgsScreen/UnreadMsgsScreen';
import FavoritesScreen from '../FavoritesScreen/FavoritesScreen';
import GroupsScreen from '../GroupsScreen/GroupsScreen';




const ContactScreen = ({Screens}) => {
    const contacts = getContactList()
    const [contactsState, setContactsState] = useState(contacts);
    
    const handleScreens =()=>{
        if(Screens === 'No Leídos'){
        return <UnreadMsgsScreen />   
        }
        if(Screens === 'Favoritos'){
        return < FavoritesScreen />   
        }
        if(Screens === 'Grupos'){
        return <GroupsScreen />   
        }
        else return <ContactList contacts={contactsState} />
    }

    return (
        <div>
            {handleScreens()}
        </div>
    );
};

export default ContactScreen;

