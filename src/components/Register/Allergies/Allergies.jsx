import React, { useState } from 'react';
import { MdArrowBackIos } from 'react-icons/md';
import './Allergies.scss';
import { Link, useNavigate } from 'react-router-dom';

const Allergies = () => {
    const [selectedAllergies, setSelectedAllergies] = useState([]);
    const [customAllergy, setCustomAllergy] = useState('');
    const navigate = useNavigate()

    if (!localStorage.getItem('Attendee') || !localStorage.getItem('Speaker')) {
        navigate("/identify")
    }

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setSelectedAllergies((prevAllergies) => {
            if (checked) {
                if (!prevAllergies.includes(value)) {
                    return [...prevAllergies, value];
                }
            } else {
                return prevAllergies.filter((allergy) => allergy !== value);
            }
            return prevAllergies;
        });
    };

    const handleCustomAllergyChange = (e) => {
        setCustomAllergy(e.target.value);
    };

    const handleCustomAllergyKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (customAllergy.trim() && !selectedAllergies.includes(customAllergy.trim())) {
                setSelectedAllergies([...selectedAllergies, customAllergy.trim()]);
                setCustomAllergy('');
            }
        }
    };

    const handleNext = () => {
        const existingRegisterData = JSON.parse(localStorage.getItem('register')) || {};

        const updatedRegisterData = {
            ...existingRegisterData,
            allergies: selectedAllergies
        };
        localStorage.setItem('register', JSON.stringify(updatedRegisterData));

        navigate('/hastags');
    };

    return (
        <>
            <div className="about-you-container">
                <div className="stepper">
                    <div className="btn-back">
                        <Link to="/aboutyou" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <MdArrowBackIos style={{ fontSize: 18 }} /> {/* Ajusta el tamaño del ícono según tus necesidades */}
                        </Link>
                    </div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step highlighted"></div>
                    <div className="step"></div>
                </div>
            </div>
            <div className="containerAllergies">
                <div className='divtitleAllergiess'>
                    <p className='titleAllergies'>Configura tu alimentación</p>
                </div>
            </div>
            <div className="containerAllergies2">
                <div className='divsubtitleAllergies'>
                    <h2 className='subtitleAllergies'>Alérgenos</h2>
                    <div className='checkboxAllergies'>
                        <p>
                            <input type="checkbox" value="Frutos secos" onChange={handleCheckboxChange} /> Frutos secos
                        </p>
                        <p>
                            <input type="checkbox" value="Marisco" onChange={handleCheckboxChange} /> Marisco
                        </p>
                        <p>
                            <input type="checkbox" value="Gluten" onChange={handleCheckboxChange} /> Gluten
                        </p>
                        <p>
                            <input type="checkbox" value="Pescado" onChange={handleCheckboxChange} /> Pescado
                        </p>
                        <p>
                            <input type="checkbox" value="Otro" onChange={handleCheckboxChange} /> Otro
                        </p>
                        <div className="custom-input">
                            <input
                                type="text"
                                placeholder="Otros alérgenos"
                                value={customAllergy}
                                onChange={handleCustomAllergyChange}
                                onKeyPress={handleCustomAllergyKeyPress}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='BadgecontainerButton'>
                <button onClick={handleNext}>Siguiente</button>
            </div>
        </>
    );
}

export default Allergies;
