import express from 'express'

const PUERTO = 3000

const app = express()

//Middlewears


function middleware1(req,res,next){

    console.log('middleware1')
    next()
}

//La ruta del use sirve como prefijo.
app.use(middleware1)



app.get('/', (req,res)=>{

      console.log('ejecucion del callback final')
      res.send('Hola')

})

app.get('/saludo', (req,res)=>{

      console.log('ejecucion del callback final con saludo')
      res.send('Hola ruta / saludo')

})

//app.get('/saludo/:id_saludo', (req,res)=>{

//      console.log('ejecucion del callback final con saludo')
//      res.send('Hola ruta / saludo')

//})


app.listen(PUERTO, ()=>{

    console.log(`http://localhost:${PUERTO}`)
})

