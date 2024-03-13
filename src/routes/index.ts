import { Router } from "express";
import multer from '../libs/multer'
import {createphoto, getphotos} from '../controllers/photo.controller'
const router = Router();

router.route('/photos')
    .post(multer.single('image'), createphoto)
    .get(getphotos)

export default  router