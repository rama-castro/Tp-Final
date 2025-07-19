const contacts = [
    {
        id: 1,
        name: 'Pepe',
        description: 'Solo vives una vez, pero no te olvides de mi',
        avatar: 'https://nupciasmagazine.com/wp-content/uploads/2024/07/la-pantera-rosa-celebra-60-anos.jpg',
        lastConnection: '15:23',
        connectionStatus: 'offline',
        messages: [
            { emisor: 'YO', hora: '23:10', id: 1, texto: 'Hola estoy hablando con pepe', status: 'visto' },
            { emisor: 'OTRO', hora: '23:11', id: 2, texto: 'Si el que canta y baila', status: 'visto' },
            { emisor: 'YO', hora: '23:12', id: 3, texto: 'Todo esta bien?', status: 'visto' },
            { emisor: 'OTRO', hora: '23:13', id: 4, texto: 'Todo en orden, ¿y tú?', status: 'visto' },
            { emisor: 'YO', hora: '23:14', id: 5, texto: 'Igual, solo descansando', status: 'visto' },
            { emisor: 'OTRO', hora: '23:15', id: 6, texto: '¡Qué bueno, disfruta!', status: 'visto' }
        ]
    },
    {
        id: 2,
        name: 'Lola',
        description: 'La vida es un carnaval',
        avatar: 'https://nupciasmagazine.com/wp-content/uploads/2024/07/la-pantera-rosa-celebra-60-anos.jpg',
        lastConnection: '10:45',
        connectionStatus: 'online',
        messages: [
            { emisor: 'YO', hora: '09:00', id: 1, texto: 'Buenos días Lola', status: 'visto' },
            { emisor: 'OTRO', hora: '09:01', id: 2, texto: '¡Buenos días! ¿Cómo estás?', status: 'visto' },
            { emisor: 'YO', hora: '09:02', id: 3, texto: 'Bien, ¿y tú?', status: 'visto' },
            { emisor: 'OTRO', hora: '09:03', id: 4, texto: 'Excelente, ya con café', status: 'visto' },
            { emisor: 'YO', hora: '09:04', id: 5, texto: 'Eso nunca falla', status: 'visto' },
            { emisor: 'OTRO', hora: '09:05', id: 6, texto: 'Totalmente jajaja', status: 'visto' },
            { emisor: 'YO', hora: '09:06', id: 7, texto: 'Nos vemos en la tarde?', status: 'visto' }
        ]
    },
    {
        id: 3,
        name: 'Carlos',
        description: 'La música es vida',
        avatar: 'https://nupciasmagazine.com/wp-content/uploads/2024/07/la-pantera-rosa-celebra-60-anos.jpg',
        lastConnection: '12:00',
        connectionStatus: 'offline',
        messages: [
            { emisor: 'YO', hora: '11:00', id: 1, texto: '¿Trajiste la guitarra?', status: 'visto' },
            { emisor: 'OTRO', hora: '11:01', id: 2, texto: 'Sí, ya estoy afinando', status: 'visto' },
            { emisor: 'YO', hora: '11:02', id: 3, texto: 'Perfecto, hacemos una jam', status: 'visto' },
            { emisor: 'OTRO', hora: '11:03', id: 4, texto: '¡Dale, me encanta la idea!', status: 'visto' },
            { emisor: 'YO', hora: '11:04', id: 5, texto: 'Yo llevo la batería', status: 'visto' },
            { emisor: 'OTRO', hora: '11:05', id: 6, texto: 'Va a estar brutal', status: 'visto' }
        ]
    },
    {
        id: 4,
        name: 'Ana',
        description: 'Fan de las películas de terror',
        avatar: 'https://nupciasmagazine.com/wp-content/uploads/2024/07/la-pantera-rosa-celebra-60-anos.jpg',
        lastConnection: '08:30',
        connectionStatus: 'online',
        messages: [
            { emisor: 'YO', hora: '20:00', id: 1, texto: '¿Vemos una peli esta noche?', status: 'visto' },
            { emisor: 'OTRO', hora: '20:01', id: 2, texto: '¡Sí! ¿De miedo?', status: 'visto' },
            { emisor: 'YO', hora: '20:02', id: 3, texto: 'Obvio, como siempre', status: 'visto' },
            { emisor: 'OTRO', hora: '20:03', id: 4, texto: '¿"La Monja" otra vez?', status: 'visto' },
            { emisor: 'YO', hora: '20:04', id: 5, texto: 'Jajaja sí, me da risa ya', status: 'visto' },
            { emisor: 'OTRO', hora: '20:05', id: 6, texto: 'Bueno, preparo las palomitas', status: 'visto' }
        ]
    },
    {
        id: 5,
        name: 'Mario',
        description: 'Camina lento, pero nunca retrocede',
        avatar: 'https://nupciasmagazine.com/wp-content/uploads/2024/07/la-pantera-rosa-celebra-60-anos.jpg',
        lastConnection: '14:10',
        connectionStatus: 'offline',
        messages: [
            { emisor: 'YO', hora: '16:00', id: 1, texto: '¿Cómo va el proyecto?', status: 'visto' },
            { emisor: 'OTRO', hora: '16:01', id: 2, texto: 'Lento pero seguro', status: 'visto' },
            { emisor: 'YO', hora: '16:02', id: 3, texto: '¿Necesitás ayuda con algo?', status: 'visto' },
            { emisor: 'OTRO', hora: '16:03', id: 4, texto: 'Sí, podrías revisar el backend', status: 'visto' },
            { emisor: 'YO', hora: '16:04', id: 5, texto: 'Enseguida lo veo', status: 'visto' },
            { emisor: 'OTRO', hora: '16:05', id: 6, texto: 'Gracias crack', status: 'visto' },
            { emisor: 'YO', hora: '16:06', id: 7, texto: 'A la orden siempre', status: 'visto' }
        ]
    }
];

export const getContactList = () => {
    return contacts
}

export const getContactById = (contact_id) => {
    for (const contact of contacts) {
        if (Number(contact.id) === Number(contact_id)) {
            return contact
        }
    }
    return null
}