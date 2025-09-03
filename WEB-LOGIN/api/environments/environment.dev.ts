const privateKey = '';
const certificate = '';

export const environment = {
    production: false,
    credentials: {
        key: privateKey,
        cert: certificate
    },
    database: {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'prueba'
    },
    hostApi: 'http://localhost:3000',
};