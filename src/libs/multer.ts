import multer from 'multer';
import { v4 as uuidv4 } from 'uuid'; // Cambiamos el nombre de la importación para que sea 'uuidv4'
import path from 'path';

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname)); // Usamos uuidv4 en lugar de uuid
    }
});

export default multer({ storage });
