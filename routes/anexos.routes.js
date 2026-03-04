import express from 'express';
import {getAnexos} from '../controllers/anexos.controller.js';


const router = express.Router();

router.get('/', getAnexos);

export default router;