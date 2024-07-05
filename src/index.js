//Importar React
import React from 'react'
//Utilizar el dom con react
import ReactDom from 'react-dom/client'

//Usar el dom para añadir un elemento al componente div con el id root
const root = ReactDom.createRoot(document.getElementById('root'))
//enviamos a esa constantes elementos html
root.render(<h1> Hola mundo</h1>)