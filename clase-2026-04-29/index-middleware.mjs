import express from 'express'

const PUERTO = 3000

const app = express()


function middleware1(req,res,next){
        console.log('middleware1')
        const existeUsuario = false
        if(existeUsuario){
            console.log('usuario existe -> pasa')
            return next() // < --- seguir la pila de ejecucion
        }
        console.log('usuario no existe -> no pasa')
        res.status(403).send('usuario no registrado') 
}

//function middleware2(req,res,next){
//        console.log('middleware2')
 //       next() // < --- seguir la pila de ejecucion
//}


app.get('/',middleware1, (req,res)=>{

      console.log('ejecucion del callback final')
      res.send('Hola')

})

app.listen(PUERTO, ()=>{

    console.log(`http://localhost:${PUERTO}`)
})

