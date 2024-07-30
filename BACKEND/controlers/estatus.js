import {modelo} from "../models/user.model.js"
export const test = () =>{
    console.log("SI funciona el controlador y el proyecto")
}
//Crear la tabla de valores
modelo.create({
    name: "Cliente 1",
    producto: "chetos",
    price: 20
})