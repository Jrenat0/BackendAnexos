import Anexo from '../models/Anexo.js';


export const getAnexos = async(req, res) => {
    try{
        const anexos = await Anexo.find();
        res.status(200).json(anexos);
    }catch(error){
        res.status(500).json({mensaje: "Error al obtener los anexos", error: error.message});
    }
};