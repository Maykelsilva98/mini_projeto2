import express from 'express'
import {bd} from './infra/bd.js'
import {dica_controller} from './controllers/dica_controller.js'

const app = express()
app.use(express.json())

dica_controller(app, bd)

app.listen(3333, ()=>{
    console.log("Servidor rodando" )
})



