import React from 'react'
import './Allergies.scss'

const Allergies = () => {
    return (
        <>
            <div className="containerAllergies">
                <div className='divtitleAllergiess'>
                    <p className='titleAllergies'>Configura tu alimentacion</p>
                </div>
            </div>
            <div className="containerAllergies2">
                <div className='divsubtitleAllergies'>
                    <h2 className='subtitleAllergies'>Alérgenos</h2>
                    <div className='checkboxAllergies'>
                        <p>
                            <input type="checkbox" name="frutas" value="manzana" /> Frutos secos
                        </p>
                        <p>
                            <input type="checkbox" name="frutas" value="manzana" /> Marisco
                        </p>
                        <p>
                            <input type="checkbox" name="frutas" value="manzana" /> Gluten
                        </p>
                        <p>
                            <input type="checkbox" name="frutas" value="manzana" /> Pescado
                        </p>
                        <p>
                            <input type="checkbox" name="frutas" value="manzana" /> Otro
                        </p>
                        <div class="custom-input">
                            <input type="text" placeholder="Otros alérgenos" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='BadgecontainerButton'>
                <button>Finalizar</button>
            </div>
        </>
    )
}

export default Allergies