import React, { useState, useEffect } from "react";

//sumar restar y restablecer un numero
function Counter() {
  //   variable  funcion
  const [counter, setCounter] = useState(0);
  //es lo mismo que decir const counter = 0

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Sumar
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Restar
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reiniciar
      </button>
    </>
  );
}

function Entradas() {
  const [mensaje, setMensaje] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setMensaje(e.target.value);
        }}
      />
      <button
        onClick={() => {
          alert("El mensaje es: " + mensaje);
        }}
      >
        Guardar
      </button>
    </div>
  );
}

//useefect es cuando vamos a tener cambios en la interfaz
function EntradaUseEfect() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() =>{
    console.log("render");
  },[]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setMensaje(e.target.value);
        }}
      />
      <button
        onClick={() => {
          alert("El mensaje es: " + mensaje);
        }}
      >
        Guardar
      </button>
      <hr />
    </div>

  );
}

export function Prueba() {
  return (
    <>
      <EntradaUseEfect />
      <Counter />
    </>
  );
}
