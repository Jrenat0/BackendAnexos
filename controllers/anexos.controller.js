import Anexo from '../models/Anexo.js';
import { generateAnexo } from '../services/docxService.js';


export const getAnexos = async(req, res) => {
    try{
        const anexos = await Anexo.find();
        res.status(200).json(anexos);
    }catch(error){
        res.status(500).json({mensaje: "Error al obtener los anexos", error: error.message});
    }
};


export const downloadAnexo = async(req, res) => {
    try{
        const data = req.body;

        const buffer = generateAnexo(data);

        res.set({
            'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'Content-Disposition': 'attachment; filename=ANEXO2_Generado.docx',
        });

        return res.send(buffer);

    }catch(error){
        console.error(error);
        res.status(500).json({ message: "Error al generar el documento" });
    }
}