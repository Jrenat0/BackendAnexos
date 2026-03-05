import express from 'express';
import {downloadAnexo, getAnexos} from '../controllers/anexos.controller.js';


const router = express.Router();

router.get('/', getAnexos);

router.post('/dAnexo', downloadAnexo);



export default router;