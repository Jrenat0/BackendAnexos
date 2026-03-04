import mongoose from "mongoose";

const anexoSchema = new mongoose.Schema({
    nombrePlantilla: String,
    datosManuales: Object,
    fechaCreacion: Date,    
},
{timestamps: true},
)

export default mongoose.model('Anexo', anexoSchema);