const contacts = [
    {
        id: 1,
        name: "Pepe",
        description: "Solo vives una vez, pero no te olvides de mí",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        lastConnection: "15:23",
        connectionStatus: "offline",
        messages: [
            { emisor: "YO", hora: "23:10", id: 101, texto: "Hola Pepe, ¿cómo estás?", status: "visto" },
            { emisor: "OTRO", hora: "23:11", id: 102, texto: "Muy bien, ¿y vos?", status: "visto" },
            { emisor: "YO", hora: "23:12", id: 103, texto: "Todo tranquilo", status: "visto" },
            { emisor: "OTRO", hora: "23:13", id: 104, texto: "¿Algún plan para mañana?", status: "visto" },
            { emisor: "YO", hora: "23:14", id: 105, texto: "Quizás salir a caminar", status: "visto" },
            { emisor: "OTRO", hora: "23:15", id: 106, texto: "Suena bien eso", status: "visto" },
            { emisor: "YO", hora: "23:16", id: 107, texto: "¿Y tú?", status: "visto" },
            { emisor: "OTRO", hora: "23:17", id: 108, texto: "Voy a jugar al fútbol", status: "visto" },
            { emisor: "YO", hora: "23:18", id: 109, texto: "¿A qué hora?", status: "visto" },
            { emisor: "OTRO", hora: "23:19", id: 110, texto: "Las cinco en el parque", status: "visto" },
            { emisor: "YO", hora: "23:20", id: 111, texto: "Perfecto, paso por vos", status: "visto" },
            { emisor: "OTRO", hora: "23:21", id: 112, texto: "Dale, te espero", status: "visto" },
            { emisor: "YO", hora: "23:22", id: 113, texto: "¿Llevás algo para picar?", status: "visto" },
            { emisor: "OTRO", hora: "23:23", id: 114, texto: "Sí, unas facturas", status: "visto" },
            { emisor: "YO", hora: "23:24", id: 115, texto: "Buenísimo", status: "visto" }
        ]
    },
    {
        id: 2,
        name: "Lola",
        description: "La vida es un carnaval",
        avatar: "https://randomuser.me/api/portraits/women/81.jpg",
        lastConnection: "10:45",
        connectionStatus: "online",
        messages: [
            { emisor: "YO", hora: "09:00", id: 201, texto: "¡Buenos días Lola!", status: "visto" },
            { emisor: "OTRO", hora: "09:01", id: 202, texto: "Buenos días, ¿cómo amaneciste?", status: "visto" },
            { emisor: "YO", hora: "09:02", id: 203, texto: "Bien, con ganas de café", status: "visto" },
            { emisor: "OTRO", hora: "09:03", id: 204, texto: "Ya me tomé el mío", status: "visto" },
            { emisor: "YO", hora: "09:04", id: 205, texto: "¿Nos vemos luego?", status: "visto" },
            { emisor: "OTRO", hora: "09:05", id: 206, texto: "Claro, ¿a qué hora?", status: "visto" },
            { emisor: "YO", hora: "09:06", id: 207, texto: "Después del almuerzo", status: "visto" },
            { emisor: "OTRO", hora: "09:07", id: 208, texto: "Genial", status: "visto" },
            { emisor: "YO", hora: "09:08", id: 209, texto: "¿Querés que llevemos algo?", status: "visto" },
            { emisor: "OTRO", hora: "09:09", id: 210, texto: "Un postre estaría bien", status: "visto" },
            { emisor: "YO", hora: "09:10", id: 211, texto: "Me encargo de eso", status: "visto" },
            { emisor: "OTRO", hora: "09:11", id: 212, texto: "Gracias 😊", status: "visto" },
            { emisor: "YO", hora: "09:12", id: 213, texto: "¿Dónde nos juntamos?", status: "visto" },
            { emisor: "OTRO", hora: "09:13", id: 214, texto: "En tu casa si querés", status: "visto" },
            { emisor: "YO", hora: "09:14", id: 215, texto: "Perfecto, entonces ahí te espero", status: "visto" }
        ]
    },
    {
        id: 3,
        name: "Carlos",
        description: "La música es vida",
        avatar: "https://randomuser.me/api/portraits/men/62.jpg",
        lastConnection: "12:00",
        connectionStatus: "offline",
        messages: [
            { emisor: "YO", hora: "11:00", id: 301, texto: "¿Trajiste la guitarra?", status: "visto" },
            { emisor: "OTRO", hora: "11:01", id: 302, texto: "Sí, ya la afiné", status: "visto" },
            { emisor: "YO", hora: "11:02", id: 303, texto: "Vamos a hacer una jam", status: "visto" },
            { emisor: "OTRO", hora: "11:03", id: 304, texto: "Me encanta la idea", status: "visto" },
            { emisor: "YO", hora: "11:04", id: 305, texto: "Yo llevo la batería", status: "visto" },
            { emisor: "OTRO", hora: "11:05", id: 306, texto: "Va a estar brutal", status: "visto" },
            { emisor: "YO", hora: "11:06", id: 307, texto: "¿Salimos temprano?", status: "visto" },
            { emisor: "OTRO", hora: "11:07", id: 308, texto: "Podemos al mediodía", status: "visto" },
            { emisor: "YO", hora: "11:08", id: 309, texto: "Perfecto entonces", status: "visto" },
            { emisor: "OTRO", hora: "11:09", id: 310, texto: "¿Con qué tocás hoy?", status: "visto" },
            { emisor: "YO", hora: "11:10", id: 311, texto: "Rock clásico", status: "visto" },
            { emisor: "OTRO", hora: "11:11", id: 312, texto: "Genial", status: "visto" },
            { emisor: "YO", hora: "11:12", id: 313, texto: "Nos vemos entonces", status: "visto" },
            { emisor: "OTRO", hora: "11:13", id: 314, texto: "Sí, hasta pronto", status: "visto" }
        ]
    },
    {
        id: 4,
        name: "Ana",
        description: "Fan de las películas de terror",
        avatar: "https://randomuser.me/api/portraits/women/10.jpg",
        lastConnection: "08:30",
        connectionStatus: "online",
        messages: [
            { emisor: "YO", hora: "20:00", id: 401, texto: "¿Vemos una película esta noche?", status: "visto" },
            { emisor: "OTRO", hora: "20:01", id: 402, texto: "¡Sí! ¿De miedo?", status: "visto" },
            { emisor: "YO", hora: "20:02", id: 403, texto: "Como siempre", status: "visto" },
            { emisor: "OTRO", hora: "20:03", id: 404, texto: "\"La Monja\" otra vez?", status: "visto" },
            { emisor: "YO", hora: "20:04", id: 405, texto: "Jajaja sí", status: "visto" },
            { emisor: "OTRO", hora: "20:05", id: 406, texto: "Preparo palomitas", status: "visto" },
            { emisor: "YO", hora: "20:06", id: 407, texto: "Perfecto", status: "visto" },
            { emisor: "OTRO", hora: "20:07", id: 408, texto: "¿Querés algo de tomar?", status: "visto" },
            { emisor: "YO", hora: "20:08", id: 409, texto: "Agua con gas", status: "visto" },
            { emisor: "OTRO", hora: "20:09", id: 410, texto: "Va tomando nota", status: "visto" },
            { emisor: "YO", hora: "20:10", id: 411, texto: "Listo", status: "visto" },
            { emisor: "OTRO", hora: "20:11", id: 412, texto: "¿Nos relajamos?", status: "visto" },
            { emisor: "YO", hora: "20:12", id: 413, texto: "Sí", status: "visto" },
            { emisor: "OTRO", hora: "20:13", id: 414, texto: "Perfecto entonces", status: "visto" }
        ]
    },
    {
        id: 5,
        name: "Mario",
        description: "Camina lento, pero nunca retrocede",
        avatar: "https://randomuser.me/api/portraits/men/50.jpg",
        lastConnection: "14:10",
        connectionStatus: "offline",
        messages: [
            { emisor: "YO", hora: "16:00", id: 501, texto: "¿Cómo va el proyecto?", status: "visto" },
            { emisor: "OTRO", hora: "16:01", id: 502, texto: "Lento pero seguro", status: "visto" },
            { emisor: "YO", hora: "16:02", id: 503, texto: "¿Necesitás ayuda?", status: "visto" },
            { emisor: "OTRO", hora: "16:03", id: 504, texto: "Sí, revisá el backend", status: "visto" },
            { emisor: "YO", hora: "16:04", id: 505, texto: "Voy enseguida", status: "visto" },
            { emisor: "OTRO", hora: "16:05", id: 506, texto: "Gracias crack", status: "visto" },
            { emisor: "YO", hora: "16:06", id: 507, texto: "A la orden", status: "visto" },
            { emisor: "OTRO", hora: "16:07", id: 508, texto: "¿Querés que pruebe algo?", status: "visto" },
            { emisor: "YO", hora: "16:08", id: 509, texto: "Sí, test unitarios", status: "visto" },
            { emisor: "OTRO", hora: "16:09", id: 510, texto: "Perfecto", status: "visto" },
            { emisor: "YO", hora: "16:10", id: 511, texto: "Te aviso cuando termine", status: "visto" },
            { emisor: "OTRO", hora: "16:11", id: 512, texto: "Genial", status: "visto" },
            { emisor: "YO", hora: "16:12", id: 513, texto: "¿Algo más?", status: "visto" },
            { emisor: "OTRO", hora: "16:13", id: 514, texto: "Por ahora no", status: "visto" }
        ]
    },
    {
        id: 6,
        name: "Luis",
        description: "Aventurero incansable",
        avatar: "https://randomuser.me/api/portraits/men/14.jpg",
        lastConnection: "Ayer",
        connectionStatus: "online",
        messages: [
            { emisor: "YO", hora: "08:00", id: 601, texto: "¿Listo para la excursión?", status: "visto" },
            { emisor: "OTRO", hora: "08:01", id: 602, texto: "Claro, emocionado", status: "visto" },
            { emisor: "YO", hora: "08:02", id: 603, texto: "¿Llevás agua suficiente?", status: "visto" },
            { emisor: "OTRO", hora: "08:03", id: 604, texto: "Sí, más de la cuenta", status: "visto" },
            { emisor: "YO", hora: "08:04", id: 605, texto: "Buenísimo", status: "visto" },
            { emisor: "OTRO", hora: "08:05", id: 606, texto: "Nos vemos en la entrada", status: "visto" },
            { emisor: "YO", hora: "08:06", id: 607, texto: "Allí estaré", status: "visto" },
            { emisor: "OTRO", hora: "08:07", id: 608, texto: "Listo para partir", status: "visto" },
            { emisor: "YO", hora: "08:08", id: 609, texto: "A disfrutar", status: "visto" },
            { emisor: "OTRO", hora: "08:09", id: 610, texto: "Va a ser épico", status: "visto" },
            { emisor: "YO", hora: "08:10", id: 611, texto: "Trae cámara", status: "visto" },
            { emisor: "OTRO", hora: "08:11", id: 612, texto: "Sí, todo listo", status: "visto" },
            { emisor: "YO", hora: "08:12", id: 613, texto: "¿Falta alguien?", status: "visto" },
            { emisor: "OTRO", hora: "08:13", id: 614, texto: "Solo María y José", status: "visto" },
            { emisor: "YO", hora: "08:14", id: 615, texto: "Perfecto", status: "visto" }
        ]
    },
    {
        id: 7,
        name: "María",
        description: "La vida es mejor con café",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
        lastConnection: "Ayer",
        connectionStatus: "online",
        messages: [
            { emisor: "YO", hora: "10:00", id: 701, texto: "¿Ya tomaste tu café?", status: "visto" },
            { emisor: "OTRO", hora: "10:01", id: 702, texto: "Obvio, doble espresso", status: "visto" },
            { emisor: "YO", hora: "10:02", id: 703, texto: "Así se arranca el día", status: "visto" },
            { emisor: "OTRO", hora: "10:03", id: 704, texto: "¿Vos también, no?", status: "visto" },
            { emisor: "YO", hora: "10:04", id: 705, texto: "No puede faltar", status: "visto" }
        ]
    },
    {
        id: 8,
        name: "Sofía",
        description: "Diseñadora gráfica y amante del arte",
        avatar: "https://randomuser.me/api/portraits/women/76.jpg",
        lastConnection: "Hace 2 días",
        connectionStatus: "online",
        messages: [
            { emisor: "YO", hora: "09:00", id: 801, texto: "¿Terminaste el logo?", status: "visto" },
            { emisor: "OTRO", hora: "09:01", id: 802, texto: "Sí, te lo mando ahora", status: "visto" },
            { emisor: "YO", hora: "09:02", id: 803, texto: "¡Qué emoción!", status: "visto" },
            { emisor: "OTRO", hora: "09:03", id: 804, texto: "Espero que te guste", status: "visto" },
            { emisor: "YO", hora: "09:04", id: 805, texto: "Seguro que sí", status: "visto" }
        ]
    },
    {
        id: 9,
        name: "Pedro",
        description: "Corredor de maratones y programador",
        avatar: "https://randomuser.me/api/portraits/men/85.jpg",
        lastConnection: "Hace 2 días",
        connectionStatus: "online",
        messages: [
            { emisor: "YO", hora: "07:00", id: 901, texto: "¿Corriste hoy?", status: "visto" },
            { emisor: "OTRO", hora: "07:01", id: 902, texto: "10K a la mañana", status: "visto" },
            { emisor: "YO", hora: "07:02", id: 903, texto: "Impresionante", status: "visto" },
            { emisor: "OTRO", hora: "07:03", id: 904, texto: "¡Y después programar!", status: "visto" },
            { emisor: "YO", hora: "07:04", id: 905, texto: "Sos una máquina", status: "visto" }
        ]
    },
    {
        id: 10,
        name: "Valentina",
        description: "Amo los gatos y la poesía",
        avatar: "https://randomuser.me/api/portraits/women/23.jpg",
        lastConnection: "Hace 1 semana",
        connectionStatus: "offline",
        messages: [
            { emisor: "YO", hora: "18:00", id: 1001, texto: "¿Escribiste algo nuevo?", status: "visto" },
            { emisor: "OTRO", hora: "18:01", id: 1002, texto: "Sí, sobre la luna", status: "visto" },
            { emisor: "YO", hora: "18:02", id: 1003, texto: "¿Lo puedo leer?", status: "visto" },
            { emisor: "OTRO", hora: "18:03", id: 1004, texto: "Te lo mando en un rato", status: "visto" },
            { emisor: "YO", hora: "18:04", id: 1005, texto: "¡Gracias!", status: "visto" }
        ]
    }



]
    ;

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