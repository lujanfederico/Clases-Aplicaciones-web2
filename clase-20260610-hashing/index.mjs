import express, { urlencoded } from 'express';
import pool from './conexion.bd.mjs';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcryptjs';

const PUERTO = 3000;

////////////////

////////////////
const app = express();
app.use(express.json()) //<----- formato json -> convierte en objeto dentro de body
app.use(express.urlencoded({extended:true}))

//exponemos los fronts


app.use('/admin',express.static('./fronts/front-admin'))


app.use('login',express.static('./fronts/front-login'))

//Registrar
app.post('/autenticar'), async (req,res=>{
    //ACTIVIDAD 5
    //Generar el id con nanoid
})




app.post('/registrar', async (req,res)=>{
     //Capturamos los datos
     req.body
    console.log(req.body)
    
    const {usuario,pass} = req.body

    if(!usuario || !pass){
        return res.status(400).json({
            mensaje: 'Datos incompletos'
        })
    }
    
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pass, salt);
    console.log(hash)
    
    
    const resultado = await pool.query(`
        INSERT INTO usuarios
           (username, password_hash)
        VALUES
           ($1,$2)
        RETURNING
           id, username      
        `,
        [
            usuario,
            hash
        ]
        
        )
    
    if(resultado.rowCount > 0){
        return res.json({
            mensaje:'El usuario ${usuario} se ha registrado con exito'
        })
    }
    res.status(500).json({
        mensaje:'El registro no se pudo realizar'
    })
     

})

app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});