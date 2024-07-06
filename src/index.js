//Importar React
import React from "react";
//Utilizar el dom con react
import ReactDom from "react-dom/client";

//importar componente
import { Greeting, UserCard } from "./greeting";

import Producto,{NavBar} from "./Product";
//Usar el dom para añadir un elemento al componente div con el id root
const root = ReactDom.createRoot(document.getElementById("root"));
//enviamos a esa constantes elementos html

root.render(
  <>
    <Greeting title = "Hola Mundo" name ="Hola React"/>
    <Greeting title = "Componente 2"/>
    <Greeting title = "Este es otro componente"/>

    {/* <UserCard/>
    <Producto />
    <NavBar/> */}
  </>
);
