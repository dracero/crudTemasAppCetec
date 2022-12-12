import mongoose from "mongoose";

const TemaSchema = new mongoose.Schema({
    tema:{
        type:String
    },
    texto:{
        type:String
    }
})

export default mongoose.models.Tema || mongoose.model('Tema', TemaSchema);