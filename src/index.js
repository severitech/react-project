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

import { Saludar } from "./Saludar";

import { Posts } from "./Posts";
import {Prueba} from './PruebaHooks'
const root = ReactDom.createRoot(document.getElementById("root"));
//enviamos a esa constantes elementos html

const handleChange = (e) => {
  console.log(e.target.value);
};

//arreglo de usuarios
const users = [
  {
    id: 1,
    name: "Douglas",
    image: "https://robohash.org/usuario1",
  },
  {
    id: 2,
    name: "Severitech",
    image: "https://robohash.org/usuario2",
  },
  {
    id: 3,
    name: "Marcos",
    image: "https://robohash.org/usuario3",
  }
];


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
    {/* <TaskCard />
    <Saludar />
    <Button text="Click Me" name="Douglas" />
    <Button text="Pay" />
    <Button text="" />
    
    <input id = "hola" onChange={handleChange}></input>

    <form onSubmit={(e)=> {
      //no recargar la pagina al enviar el formulario al backend
      e.preventDefault()
      console.log('Enviando datos del formulario')
    }}>
      <h1>Registro de usuario</h1>
      <Button text = "Valor">Send</Button>
    </form> */}

    {/* <Posts /> 
    Recorrer arreglos
    */}
    {/* {users.map((user, index) => {
      return (
        <div key={index}>
          <h1>{user.name}</h1>
          <img src= {user.image} />
        </div>
      );
    })} */}
    <Prueba/>
  </>
);
