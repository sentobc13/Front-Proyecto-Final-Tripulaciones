import React, { useState, useEffect } from 'react';
import { Chip } from '@mui/material';
import { MdArrowBackIos } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import './Hastags.scss';
import { useDispatch } from 'react-redux';
import { registerAttendee } from '../../../features/auth/attendee/authAttendeeSlice';
import { registerSpeaker } from '../../../features/auth/speaker/authSpeakerSlice';

const Hastags = () => {
    const dispatch = useDispatch()
    const [selectedChips, setSelectedChips] = useState([]);

    const handleChipClick = (label) => {
        if (selectedChips.includes(label)) {
            setSelectedChips(prevChips => prevChips.filter(chip => chip !== label));
        } else {
            if (selectedChips.length < 4) {
                setSelectedChips(prevChips => [...prevChips, label]);
            }
        }
    };

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('register')) || {};
        const storedChips = storedData.interests || [];
        setSelectedChips(storedChips);
    }, []);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('register')) || {};
        storedData.interests = selectedChips;
        localStorage.setItem('register', JSON.stringify(storedData));
    }, [selectedChips]);

    const allChips = [
        "Neurociencia", "E-Learning", "Stem", "Inteligencia Artificial",
        "Gamificación", "IA generativa", "Evaluación digital", "LMS",
        "Diversidad", "Vídeo instructivo", "Formación asíncrona", "Multilingüe",
        "Microcredenciales", "Educación Digital", "Aprendizaje personalizado"
    ];

    const handleSubmit = async () => {
        try {
            if (localStorage.getItem('validator') == 'Attendee') {
                dispatch(registerAttendee(JSON.parse(localStorage.getItem('register'))))
            } else {
                dispatch(registerSpeaker(JSON.parse(localStorage.getItem('register'))))
            }
        } catch (error) {
            console.error('Error al enviar POST:', error);
        }
    };

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
                    <p className='titleHastags'>Ayúdanos a conocer mejor tus intereses</p>
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
                <button onClick={handleSubmit}>Finalizar</button>
            </div>
        </>
    )
}

export default Hastags;
