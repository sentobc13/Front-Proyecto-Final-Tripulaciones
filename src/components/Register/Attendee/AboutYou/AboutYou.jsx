import React from 'react'
import { Link } from 'react-router-dom'

const AboutYou = () => {
  return (
    <>
     <div>
        <h2>Sobre ti</h2>
        </div>   

        <div className='containerAboutYouForm'>
            <p>
                <input type="text" name='nombre' value='nombre' /> Nombre
            </p>
            <p>
                <input type="text" name='nombre' value='nombre' /> Apellidp
            </p>
            <p>
                <input type="text" name='nombre' value='nombre' /> País de residencia
            </p>
            <p>
                <input type="text" name='nombre' value='nombre' /> Empresa
            </p>
            <p>
                <input type="text" name='nombre' value='nombre' /> Teléfono
            </p>
            <p>
                <input type="text" name='nombre' value='nombre' /> Cargo
            </p>
            <p>
                <input type="text" name='nombre' value='nombre' /> Linkedin
            </p>
        </div>
        <div className='BadgecontainerButton'>
                <Link to="/allergies">
                    <button>Siguiente</button>
                </Link>
            </div>
    </>
  )
}

export default AboutYou