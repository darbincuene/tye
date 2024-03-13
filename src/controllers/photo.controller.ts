import { Request, Response } from 'express';
import photos from '../models/photo';

export async function getphotos(req: Request, res: Response): Promise<Response> {
    try {
        const photo = await photos.find();
        return res.json(photo);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching photos', error });
    }
}

export async function createphoto(req: Request, res: Response): Promise<Response> {
    try {
        const { title, description } = req.body;
        const imagePath = req.file ? req.file.path : ''; // Verifica si hay un archivo adjunto en la solicitud

        const newphoto = {
            title,
            description,
            imagePath
        };

        const photo = new photos(newphoto);
        await photo.save();

        return res.json({
            message: 'Photo successfully saved',
            photo
        });
    } catch (error) {
        return res.status(500).json({ message: 'Error creating photo', error });
    }
}
