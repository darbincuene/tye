import { Schema, model, Document } from "mongoose";

// Definir el esquema
const photoSchema = new Schema({
    title: String,
    description: String,
    imagePath: String // Corregí la ortografía de "Imagepath" a "imagePath"
});

interface Iphoto extends Document{
    title:string;
    description:string;
    imagePath:string;
    
}

export default model<Iphoto>('Photo', photoSchema);


