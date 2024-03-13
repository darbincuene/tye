import express from 'express'
import morgan from 'morgan';
import indexroutes from './routes/index'
import Path  from 'path';

const app = express();

//setings
app.set('port',process.env.PORT ||4000);

//mildeware
app.use(morgan('dev'));
app.use(express.json())

//routes
app.use('/api', indexroutes);

//para almacenar imagenes
app.use('/uploads',express.static(Path.resolve('uploads')))
export default app;