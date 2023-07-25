const urLogin ="http://localhost:3300/";


const btnEnviarLogin = document.querySelector("#btnEnviarLogin");

btnEnviarLogin.addEventListener("click", e => {
    e.preventDefault();
    let sesion = {
        EMAIL: EMAIL.value,
        CONTRASEÑA: CONTRASEÑA.value
    };
    fetch(urLogin + "login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sesion),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        if (data === "true") {
          Swal.fire({
            icon: "success",
            title: "INICIO DE SESION CORRECTAMENTE",
            showConfirmButton: false,
          });
          setTimeout(() => {
            window.location = "http://127.0.0.1:5500/front/indexUsuario.html";
            Swal.fire('Bienvenido '+EMAIL.value)
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