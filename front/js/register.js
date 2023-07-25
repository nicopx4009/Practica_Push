const urlApi ="http://localhost:3300/";

const btnEnviar = document.querySelector("#btnEnviarRegistro");

btnEnviar.addEventListener("click", e => {
  e.preventDefault();
  let registrar = {
    NOMBRE:nombre.value,
    APELLIDO:apellido.value,
    TELEFONO:telefono.value,
    DIRECCION:direccion.value,
    EMAIL:email.value,
    CONTRASEÑA:password.value
  };
    fetch(urlApi + "usuario/crear", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(registrar),
  })
    .then(response => {
      return response.text();
    })
    .then(data => {
      if (data === "true") {
        Swal.fire({
          icon: "success",
          title: "INGRESADO CORRECTAMENTE CORRECTAMENTE",
          showConfirmButton: false,
        });
        setTimeout(() => {
          window.location = "http://127.0.0.1:5500/front/bienvenido.html";
        }, 1500);
      } else {
        Swal.fire({
          icon: "ERROR",
          title: "Oops...",
          text: "VEREFIQUE BIEN LOS DATOS!",
        });
      }
    });
});
