//Importar React
import React from "react";
//Utilizar el dom con react
import ReactDom from "react-dom/client";

//Usar el dom para añadir un elemento al componente div con el id root
const root = ReactDom.createRoot(document.getElementById("root"));
//enviamos a esa constantes elementos html

//este es un componente
function Greeting() {
  const user = {
    firstname: "Douglas",
    lastname: "Severitech",
  };

  return ( <><h1>{user.firstname}</h1>
<h3>{user.lastname}</h3></>)

  
}

root.render(<><Greeting /></>);
