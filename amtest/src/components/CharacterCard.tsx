"use client";

import React from 'react'
import styles from '../styles/CharacterCard.module.css'
import { Character } from '@/types/character'
import { FiBookmark } from 'react-icons/fi';

interface CharacterCardProps {
    character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
    //Cambio de colores dependiendo de la casa

    const getHouseColor = (house: string) => {
        switch (house) {
            case 'Gryffindor':
                return 'linear-gradient(135deg, #FF0000, #FED482)';
            case 'Slytherin':
                return 'linear-gradient(135deg, #1C792B, #82E95E)';
            case 'Ravenclaw':
                return 'linear-gradient(135deg, #0597B7, #66D1FF)';
            case 'Hufflepuff':
                return 'linear-gradient(135deg, #FFC700, #FFF388)';
            default:
                return 'transparent';
        }
    };

    return (
        <div className={styles.cardContainer}>
            <div className={styles.card} key={character.id}>
            <div className={styles.imageContainer} style={{ background: getHouseColor(character.house) }}>
                <img src={character.image} alt={character.name} className={styles.image} />
            </div>
            <div className={styles.details}>
                <div className={styles.header}>
                <span className={styles.status}>
                    {character.alive ? 'VIVO / ' : 'FALLECIDO / '}
                    {character.hogwartsStudent ? 'ESTUDIANTE' : 'STAFF'}
                </span>
                <FiBookmark className={styles.icon} />
                </div>
                <h2 className={styles.name}>{character.name}</h2>
                <ul className={styles.infoList}>
                <li>
                    <strong>Cumpleaños:</strong> {character.dateOfBirth}
                </li>
                <li>
                    <strong>Género:</strong> {character.gender}
                </li>
                <li>
                    <strong>Color de ojos:</strong> {character.eyeColour}
                </li>
                <li>
                    <strong>Color de pelo:</strong> {character.hairColour}
                </li>
                </ul>
            </div>
            </div>
        </div>
    );
}

export default CharacterCard