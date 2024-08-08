import React from 'react'
import styles from '../styles/CharacterCard.module.css'
import { Character } from '@/types/character'

interface CharacterCardProps {
    character: Character;
}


export function CharacterCard({ character }) {
    return (
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={character.image} alt={character.name} className={styles.image} />
          </div>
          <div className={styles.details}>
            <h2>{character.name}</h2>
            <p><strong>Cumpleaños:</strong> {character.dateOfBirth}</p>
            <p><strong>Género:</strong> {character.gender}</p>
            <p><strong>Color de ojos:</strong> {character.eyeColour}</p>
            <p><strong>Color de pelo:</strong> {character.hairColour}</p>
          </div>
        </div>
    );
}

export default CharacterCard