import React, { useState, useEffect } from 'react';
import { Chip } from '@mui/material';
import { MdArrowBackIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './Hastags.scss';

const Hastags = () => {
    const [selectedChips, setSelectedChips] = useState([]);

    const handleChipClick = (label) => {
        if (selectedChips.includes(label)) {
            setSelectedChips(selectedChips.filter(chip => chip !== label));
        } else {
            if (selectedChips.length < 4) {
                setSelectedChips([...selectedChips, label]);
            }
        }
    };

    useEffect(() => {
        const storedChips = JSON.parse(localStorage.getItem('register')) || [];
        setSelectedChips(storedChips);
    }, []);

    useEffect(() => {
        localStorage.setItem('register', JSON.stringify(selectedChips));
    }, [selectedChips]);

    const allChips = [
        "Neurociencia", "E-Learning", "Stem", "Inteligencia Artificial",
        "Gamificación", "IA generativa", "Evaluación digital", "LMS",
        "Diversidad", "Vídeo instructivo", "Formación asíncrona", "Multilingüe",
        "Microcredenciales", "Educación Digital", "Aprendizaje personalizado"
    ];

    return (
        <>
            <div className="about-you-container">
                <div className="stepper">
                    <div className="btn-back">
                        <Link to="/allergies" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <MdArrowBackIos style={{ fontSize: 18 }} />
                        </Link>
                    </div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step highlighted"></div>
                </div>
            </div>
            <div className="containerHastags">
                <div className='divtitleHastags'>
                    <p className='titleHastags'>Ayúdanos a conocer mejor tu intereses</p>
                </div>
            </div>
            <div className="containerHastags2">
                <div className='divsubtitleHastags'>
                    <p className='subtitleHastags'>Estos tópicos ayudarán a recomendarte mejor a otros ponentes y asistentes en una recomendación personalizada.</p>
                </div>
            </div>
            <div className="containerHastags2">
                <div className='divsubtitleHastags2'>
                    <p className='subtitleHastags2'>Selecciona un máximo de 4</p>
                </div>
            </div>
            <div className="interestsProfile">
                <p className="interestsName">Intereses</p>
                <div className="chipGrid">
                    {allChips.map((label) => (
                        <Chip
                            key={label}
                            className={`uniqueChipProfile ${selectedChips.includes(label) ? 'selected' : ''}`}
                            onClick={() => handleChipClick(label)}
                            label={label}
                            style={{
                                backgroundColor: selectedChips.includes(label) ? '#4299E1' : 'white',
                                color: selectedChips.includes(label) ? '#000' : 'black',
                                border: `1px solid #4299E1`,
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className='BadgecontainerButton'>
                <button>Finalizar</button>
            </div>
        </>
    )
}

export default Hastags;
