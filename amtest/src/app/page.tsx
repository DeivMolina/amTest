"use client";

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharactersAsync } from '@/store/characters';
import { RootState } from '../store/rootReducer';
import CharacterCard from '@/components/CharacterCard';
import FavoritesDropdown from '@/components/FavoritesDropdown';
import ResponsiveFavoritesDropdown from '@/components/ResponsiveFavoritesDropdown';
import AddCharacterModal from '@/components/AddCharacterModal';
import styles from '../styles/page.module.css';
import { FiBookmark, FiUserPlus } from 'react-icons/fi';

const Page: React.FC = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state: RootState) => state.characters.characters);
  const loading = useSelector((state: RootState) => state.characters.loading);
  const [filter, setFilter] = useState<'student' | 'staff'>('student');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchCharactersAsync());
  }, [dispatch]);

  const handleFilterChange = (newFilter: 'student' | 'staff') => {
    setFilter(newFilter);
  };

  const handleAddCharacter = (character: any) => {
    // Aquí puedes agregar la lógica para guardar el nuevo personaje
    console.log('Nuevo personaje:', character);
    setIsModalOpen(false);
  };

  const filteredCharacters = characters.filter((character) =>
    filter === 'student' ? character.hogwartsStudent : !character.hogwartsStudent
  );

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <img src="/images/logo.png" alt="Harry Potter" className={styles.logo} />
        <h1 className={styles.title}>Selecciona tu filtro</h1>
        <div className={styles.buttons}>
          <button
            className={`${styles.filterButton} ${filter === 'student' ? styles.active : ''}`}
            onClick={() => handleFilterChange('student')}
          >
            Estudiantes
          </button>
          <button
            className={`${styles.filterButton} ${filter === 'staff' ? styles.active : ''}`}
            onClick={() => handleFilterChange('staff')}
          >
            Staff
          </button>
        </div>
      </header>
      <div className={styles.cardContainer}>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          filteredCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        )}
      </div>
      <div className={styles.fixedButtonsDesktop}>
        <FavoritesDropdown />
        <button className={`${styles.fixedButton} ${styles.addButtonDesktop}`} onClick={() => setIsModalOpen(true)}>
          AGREGAR <FiUserPlus className={styles.icon} />
        </button>
      </div>

      {/* Botones para vista móvil */}
      <div className={styles.fixedButtonsMobile}>
        <ResponsiveFavoritesDropdown />
        <button className={`${styles.fixedButtonMobile} ${styles.addButtonMobile}`} onClick={() => setIsModalOpen(true)}>
          AGREGAR <FiUserPlus className={styles.icon} />
        </button>
      </div>

      <AddCharacterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleAddCharacter} />
    </div>
  );
};

export default Page;
