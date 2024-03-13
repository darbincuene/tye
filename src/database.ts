import { connect } from 'mongoose';

export async function startConnection() {
    try {
        await connect('mongodb://localhost/photo-gallery');
        console.log('Conexión exitosa a MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
    }
}

startConnection();

