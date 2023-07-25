const express = require("express");
const app = express(); //creamos nuestra aplicacion llamando el metodo constructor de express

app.use("/", require("./modules/rutas")); //redirigimos al modulo rutas  donde se redirige el modulo

app.listen("3300", () => {
  console.log("Aplicacion ejecutandose en : http://localhost:3300");
});