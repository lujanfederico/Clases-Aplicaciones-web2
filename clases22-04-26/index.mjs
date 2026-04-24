import express from 'express'




//const PUERTO = 3000

//Instancia servidor express
//const app = express()

//app.get('/',(req,res)=>{

//   res.end('Hola con get')

//})

//app.post('/saludo',(req,res)=>{

//  res.end('Hola con post')

//})


//abrir un puerto
//app.listen(PUERTO, ()=>{
//  console.log(`Servidor corriendo en http://localhost:${PUERTO}`)

//})





const PUERTO = 3000


const app = express()

//app.get('/',(req,res)=>{


// res.set('content-type','text/html') // - > Cabecera
// MIMETYPES
// res.status(200)  // - > Codigo de estado 
//  res.end('<h1>jeje</h1>') // - > Contenido

//})

app.get('/', (req, res) => {


    res.set('content-type', 'application/json') // - > Cabecera
    // MIMETYPES
    res.status(200)  // - > Codigo de estado 
    res.end(`
           {
            
           "materia1":"aw2",
           "materia2":"analisis de sistemas",
           "materia3":"practica profesionalizante 2"
                        
           
           }
           

        
        `) // - > Contenido

})



app.post('/', (req, res) => {

    res.set('content-type', 'application/json')
    res.end('{"materia":"aw2"}')

})


//abrir un puerto
app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`)

})