
import './Allergies.scss'
import { Link } from 'react-router-dom'

const Allergies = () => {
    return (
        <>
            <div className="stepper">
                <div className="step"></div>
                <div className="step"></div>
                <div className="step"></div>
                <div className="step highlighted"></div>
                <div className="step"></div>
            </div>
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
                        <div className="custom-input">
                            <input type="text" placeholder="Otros alérgenos" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='BadgecontainerButton'>
                <Link to="/hastags">
                    <button>Siguiente</button>
                </Link>
            </div>
        </>
    )
}

export default Allergies