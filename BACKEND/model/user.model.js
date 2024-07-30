import {Schema, model} from "mongoose"

//Esquema
const esquema = new Schema({
    name:{
        type: String
    }, 
    price:{
        type: Number
    },
    producto:{
        type: String
    }
})

//Modelo
export const modelo = new model("Clientes", esquema)
