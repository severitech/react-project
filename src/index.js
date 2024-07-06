//Importar React
import React from "react";
//Utilizar el dom con react
import ReactDom from "react-dom/client";

//importar componente
// import { Greeting, UserCard } from "./greeting";

// import Producto, { NavBar } from "./Product";

import { Button } from "./Button";
//Usar el dom para añadir un elemento al componente div con el id root

import { TaskCard } from "./Task";

const root = ReactDom.createRoot(document.getElementById("root"));
//enviamos a esa constantes elementos html

root.render(
  <>
    {/* <Greeting title = "Hola Mundo" name ="Hola React"/>
    <Greeting title = "Componente 2"/>
    <Greeting title = "Este es otro componente"/> */}

    {/*    <UserCard
      name="Douglas Tech"
      amount={3000}
      married={false}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 main street", city: "New York" }}
      //Puedo Pasar una funcion
      greet = {function() {alert('Hello') }}
    />

<UserCard
      name="Severitech Dev"
      amount={1000}
      married={true}
      points={[99, 22.2]}
      address={{ street: "Vallegrande", city: "Santa cruz" }}
    /> */}
    {/* <Producto />
    <NavBar/> */}

    {/* <Button text="Click Me" name="Douglas" />
    <Button text="Pay" />
    <Button text="" /> */}

    <TaskCard/>
  </>
);
