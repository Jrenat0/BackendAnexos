import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Conexión exitosa a la BD")
    }catch (error) {
        console.error("Error en la conexión a la BD:", error);
        process.exit(1);
    }
};
