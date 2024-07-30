import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {test} from "./BACKEND/controlers/user.controler.js"

//Leer librerias de dotenv
dotenv.config();

mongoose.connect(process.env.url_DB)

//Funcion promesa
.then(()=>{
    console.log("Funciona la coneccion con la base de datos")
})
.catch((err)=>{
    console.log("No funciona la coneccion de la base de datos", error)
})

//Sevidor local
const app = express();
app.use(cors());

//funcion para escuchar servidor
app.listen(4000, ()=>{
    console.log("Funciona el servidor local")
})

test()