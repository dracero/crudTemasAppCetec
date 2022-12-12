import conectarDB from './lib/dbConnect'
import Tema from './models/Tema'

export default function handler(req, res) {

    res.status(200).json( getServerSideProps());

}

async function getServerSideProps(){
    try{
        await conectarDB();

        console.log("hola");
        const res = await Tema.find({});

        console.log(res); //esto es en el server

        const temas = res.map(doc =>{
            const tema = doc.toObject();
            tema._id = `${tema._id}`;
            return tema;
        })

        //console.log(temas);
    
        return {props:{temas}};

    }catch(error){
        console.log(error);
    }
}
