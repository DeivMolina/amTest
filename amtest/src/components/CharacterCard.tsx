import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { addFavoriteAsync, removeFavoriteAsync } from '@/store/favoritesSlice';
import { Character } from '@/types/character';
import styles from '../styles/CharacterCard.module.css';
import { FiBookmark } from 'react-icons/fi';
import { FaBookmark } from 'react-icons/fa';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const isFavorite = favorites.some(fav => fav.id === character.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavoriteAsync(character.id));
    } else {
      dispatch(addFavoriteAsync(character));
    }
  };

  const getHouseColor = (house: string) => {
    switch (house) {
      case 'Gryffindor':
        return 'linear-gradient(135deg, #FF0000, #FFD700)';
      case 'Slytherin':
        return 'linear-gradient(135deg, #1C792B, #829E5E)';
      case 'Ravenclaw':
        return 'linear-gradient(135deg, #0E1A40, #658FFF)';
      case 'Hufflepuff':
        return 'linear-gradient(135deg, #FFCC00, #FFDE5A)';
      default:
        return 'transparent';
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer} style={{ background: getHouseColor(character.house) }}>
        <img src={character.image} alt={character.name} className={styles.image} />
      </div>
      <div className={styles.details}>
        <div className={styles.header}>
          <span className={styles.status}>
            {character.alive ? 'VIVO / ' : 'FALLECIDO / '}
            {character.hogwartsStudent ? 'ESTUDIANTE' : 'STAFF'}
          </span>
          <div onClick={handleFavoriteClick} className={styles.icon}>
            {isFavorite ? <FaBookmark /> : <FiBookmark />}
          </div>
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
  );
};

export default CharacterCard;
