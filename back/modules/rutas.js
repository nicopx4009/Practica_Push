//Modulos requeridos para el proyecto
const express = require("express");
const cors = require("cors"); //Para evitar restricciones entre llamadas de sitios
const ruta = express.Router(); //Trae el metodo router de express para hacer los endpoints
const conex = require("./bdatos.js");
const bycript = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { promisify } = require("util"); //La trae por defecto NODE JS me permite usar async/await opcion a fetch

ruta.use(express.json());
ruta.use(cors());
ruta.options("*", cors()); //configura las ip permitidas

//Codificamos los verbos HTTP (CRUD TIPICO)

//VERBO GET LISTAR
ruta.get("/api/users", (req, res) => {
  conex.query("SELECT * FROM usuarios", (error, respuesta) => {
    if (error) {
      throw error;
    } else {
      res.send(respuesta);
    }
  });
});

//Verbo POST INSERTAR USUARIO
ruta.post("/usuario/crear", async (req, res) => {
  try {
    let data = {
      NOMBRE: req.body.NOMBRE,
      APELLIDO: req.body.APELLIDO,
      TELEFONO: req.body.TELEFONO,
      DIRECCION: req.body.DIRECCION,
      EMAIL: req.body.EMAIL,
      CONTRASEÑA: bycript.hashSync(req.body.CONTRASEÑA,7),
    };
    conex.query("INSERT INTO usuarios SET ?", data, (error, respuesta) => {
      //res.send("insercion exitosa !");
      console.log(respuesta);
      res.send(true).status(201);
    });
  } catch (error) {
    console.log(error);
    // res.send.status(404).error;
  }
});

//VERBO BORRAR
ruta.delete("/api/users/:id", (req, res) => {
  let id = req.params.id;
  conex.query("DELETE FROM usuarios WHERE ID = ?", id, (error, respuesta) => {
    if (error) {
      console.log(error);
    } else {
      res.status(201).send(respuesta);
    }
  });
});

module.exports = ruta;