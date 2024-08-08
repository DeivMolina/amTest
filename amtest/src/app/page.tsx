"use client";

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharactersStart } from '../store/characters'; 
import { AppState } from '../store/rootReducer'; 
import CharacterCard from '../components/CharacterCard'; 
import styles from '../styles/page.module.css'; 
import { FiBookmark, FiUserPlus } from 'react-icons/fi';

const Page: React.FC = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state: AppState) => state.characters.characters);
  const loading = useSelector((state: AppState) => state.characters.loading);

  useEffect(() => {
    dispatch(fetchCharactersStart());
  }, [dispatch]);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <img src="/images/logo.png" alt="Harry Potter" className={styles.logo} />
        <h1 className={styles.title}>Selecciona tu filtro</h1>
        <div className={styles.buttons}>
          <button className={styles.filterButton}>Estudiantes</button>
          <button className={styles.filterButton}>Staff</button>
        </div>
      </header>
      <div className={styles.cardContainer}>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        )}
      </div>
      <div className={styles.fixedButtonsDesktop}>
        <button className={`${styles.fixedButton} ${styles.favoritesButtonDesktop}`}>
          FAVORITOS <FiBookmark className={styles.icon} />
        </button>
        <button className={`${styles.fixedButton} ${styles.addButtonDesktop}`}>
          AGREGAR <FiUserPlus className={styles.icon} />
        </button>
      </div>

      {/* Botones para vista móvil */}
      <div className={styles.fixedButtonsMobile}>
        <button className={`${styles.fixedButton} ${styles.favoritesButtonMobile}`}>
          FAVORITOS <FiBookmark className={styles.icon} />
        </button>
        <button className={`${styles.fixedButton} ${styles.addButtonMobile}`}>
          AGREGAR <FiUserPlus className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default Page;
