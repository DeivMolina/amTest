import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { removeFavoriteAsync } from '../store/favoritesSlice';
import styles from '../styles/FavoritesDropdown.module.css';
import { FiBookmark, FiTrash } from 'react-icons/fi';

const FavoritesDropdown: React.FC = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const error = useSelector((state: RootState) => state.favorites.error);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleRemoveFavorite = (id: string) => {
    dispatch(removeFavoriteAsync(id));
  };

  return (
    <div className={`${styles.favoritesDropdown} ${isOpen ? styles.open : ''}`}>
      <button className={styles.toggleButton} onClick={toggleDropdown}>
        FAVORITOS <FiBookmark className={styles.icon} />
      </button>
      <div className={`${styles.dropdownContent} ${isOpen ? styles.open : ''}`}>
        {error && <p className={styles.error}>{error}</p>}
        {favorites.length > 0 ? (
          favorites.map(favorite => (
            <div key={favorite.id} className={styles.favoriteItem}>
              <img src={favorite.image} alt={favorite.name} className={styles.favoriteImage} />
              <span className={styles.favoriteName}>{favorite.name}</span>
              <FiTrash onClick={() => handleRemoveFavorite(favorite.id)} className={styles.removeIcon} />
            </div>
          ))
        ) : (
          <p className={styles.noFavorites}>No hay Favoritos seleccionados</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesDropdown;
