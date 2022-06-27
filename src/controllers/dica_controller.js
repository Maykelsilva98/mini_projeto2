import {Dica} from '../models/dicas_model.js'

const dica_controller = (app, bd) =>{
    app.get("/tips", (req, res) =>{
        if (bd.dicas.length !=0 ){
            const indexA = Math.floor(Math.random() * (bd.dicas.length - 1))
            res.send(bd.dicas[indexA])
        }else{
            res.send("Nenhum dado para consultar")
        }
    })

    app.post("/create", (req, res) =>{
        const body = req.body
        const dica = new Dica(body)
        bd.dicas.push(dica)
        res.send("Dica adicionada")
    })
}

export {dica_controller};