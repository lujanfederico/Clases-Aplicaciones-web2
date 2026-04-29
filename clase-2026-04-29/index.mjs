import express from 'express'
import path from 'node:path'

const PUERTO = 3000

const app = express()

//Middlewears
//Levantamos una web estática

app.use(express.static(path.resolve('front')))

app.listen(PUERTO, ()=>{

    console.log(`http://localhost:${PUERTO}`)
})

