import express from 'express'
import multer from 'multer'
import {nanoid} from 'nanoid'
import mime from 'mime-type'


//path 
const PUERTO = 3000

const app = express()


//Ejecutamos multer

const almacenamiento = multer.diskStorage({
  destination: function (req, file, cb) {
    //chequeos

    cb(null, './archivos')
  },
  filename: function (req, file, cb) {
    //Obtengo la extension desde el mimetype
    //const extension = mime.extension(file.mimetype)
    //creo el nombre del archivo con un identificador unico con nanoid()
    const nombreImagen = nanoid()  //Este genera un ID
    cb(null, nombreImagen)
  }
})



const subirArchivo = multer({
    storage: almacenamiento
})

const gestionArchivos = subirArchivo.single('imagen') //<---devuelve una funcion


// use por defecto usa la ruta raiz, pero la utiliza como prefijo
app.use('/admin', express.static('./front-admin'))

//ruta y metodo

app.post('/subir-archivo', (req, res) => {
    //Verificamos el proceso de subida
    gestionArchivos(req,res, (error)=>{
    //Si hay error respondemos
    if(error) return res.status(500).json({mensaje:'Error en el servidor'})
    //Si no hay error
   // req.body <----- app.use(express.json())
   console.log(req.file)
    //--
    res.json({ mensaje: 'ruta subida de archivos de formulario' })
     })
})



app.listen(PUERTO)