import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import {connectDB} from './config/db.js';
import anexoRoutes from './routes/anexos.routes.js';
import listEndpoints from 'express-list-endpoints';

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());
const PORT = process.env.PORT;


connectDB();

app.get('/', (req,res) => {
    res.send("Hola")
})

app.use('/api/anexos', anexoRoutes);


app.listen(3000, () => {
    console.log(`Escuchando en http://localhost:${PORT}`)

    console.log("Rutas detectadas:", listEndpoints(app));
})


