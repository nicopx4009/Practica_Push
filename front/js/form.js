const urForm ="http://localhost:3300/api/users";

const BtnEnviarForm = document.querySelector("#BtnEnviarForm");
const tabla = document.querySelector("#cuerpo")

fetch(urForm)
.then(response =>{
    return response.json();
})
.then((data)=>{
    for(let index =0;index <= data.length; index++){
       let tcuerpo = `
     <tbody>
       <tr>
         <th scope="row">${data[index].ID}</th>
         <td>${data[index].NOMBRE}</td>
         <td>${data[index].APELLIDO}</td>
         <td>${data[index].TELEFONO}</td>
         <td>${data[index].DIRECCION}</td>
         <td>${data[index].EMAIL}</td>
         <td>${data[index].CONTRASEÑA}</td>
       </tr>
     </tbody>`

     tabla.innerHTML+=tcuerpo
    }
})