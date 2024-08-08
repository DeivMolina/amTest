import React, { useState } from 'react';
import styles from '../styles/AddCharacterModal.module.css';
import { SlClose } from 'react-icons/sl';

interface AddCharacterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (character: any) => void;
}

const AddCharacterModal: React.FC<AddCharacterModalProps> = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [eyeColor, setEyeColor] = useState('');
  const [hairColor, setHairColor] = useState('');
  const [gender, setGender] = useState('female');
  const [position, setPosition] = useState('student');
  const [photo, setPhoto] = useState('http://hp-api.herokuapp.com/images/harry.jpg');

  const handleSave = () => {
    const newCharacter = { name, birthday, eyeColor, hairColor, gender, position, photo };
    onSave(newCharacter);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>Agrega un personaje</h2>
          <button onClick={onClose} className={styles.closeButton}>
            <SlClose />
          </button>
        </div>
        <div className={styles.modalContent}>
          <div className={styles.formGroup}>
            <label>NOMBRE</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label>COLOR DE OJOS</label>
            <input type="text" value={eyeColor} onChange={(e) => setEyeColor(e.target.value)} />

            <label>GÉNERO</label>
            <div className={styles.radioGroup}>
              <label>
                <input type="radio" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
                Mujer
              </label>
              <label>
                <input type="radio" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />
                Hombre
              </label>
            </div>

            <div className={styles.formGroup}>
              <label>FOTOGRAFÍA (input type file)</label>
            </div>
          </div>
          
          <div className={styles.formGroup}>
            <label>CUMPLEAÑOS</label>
            <input type="text" value={birthday} onChange={(e) => setBirthday(e.target.value)} placeholder="dd-mm-yyyy" />

            <label>COLOR DE PELO</label>
            <input type="text" value={hairColor} onChange={(e) => setHairColor(e.target.value)} />

            <label>POSICIÓN</label>
            <div className={styles.radioGroup}>
              <label>
                <input type="radio" value="student" checked={position === 'student'} onChange={(e) => setPosition(e.target.value)} />
                Estudiante
              </label>
              <label>
                <input type="radio" value="staff" checked={position === 'staff'} onChange={(e) => setPosition(e.target.value)} />
                Staff
              </label>
            </div>
          </div>
          
          
          
        </div>
        <div className={styles.buttons}>
        <button onClick={handleSave} className={styles.saveButton}>GUARDAR</button>
        </div>
      </div>
    </div>
  );
};

export default AddCharacterModal;
