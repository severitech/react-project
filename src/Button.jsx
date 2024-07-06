import  PropTypes from 'prop-types' 

export function Button({text,name ='Usuario'}) {
/*   console.log(text)
  if(!text){
    console.error("El texto es requerido")
  } */
  return <button>
   {text} - {name}
  </button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired

}
