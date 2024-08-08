import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import CharacterCard from '@/components/CharacterCard';
import { RootState } from '@/store/rootReducer';
import { Character } from '@/types/character';
import favoritesReducer, { addFavoriteAsync, removeFavoriteAsync } from '@/store/favoritesSlice';

const mockStore = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

const character: Character = {
  id: '1',
  name: 'Harry Potter',
  house: 'Gryffindor',
  alive: true,
  hogwartsStudent: true,
  dateOfBirth: '31-07-1980',
  gender: 'male',
  eyeColour: 'green',
  hairColour: 'black',
  image: 'http://hp-api.herokuapp.com/images/harry.jpg',
  species: 'human',
  yearOfBirth: 1980,
  ancestry: 'half-blood',
  wand: {
    wood: 'holly',
    core: 'phoenix feather',
    length: 11
  },
  patronus: 'stag',
  hogwartsStaff: false,
  actor: 'Daniel Radcliffe'
};

const initialState: RootState = {
  characters: {
    characters: [character],
    loading: false,
    error: null,
  },
  favorites: {
    items: [],
    error: null,
  }
};

describe('CharacterCard', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  test('renders CharacterCard component', () => {
    render(
      <Provider store={store}>
        <CharacterCard character={character} />
      </Provider>
    );

    expect(screen.getByText(/Harry Potter/i)).toBeInTheDocument();
    expect(screen.getByText(/VIVO \/ ESTUDIANTE/i)).toBeInTheDocument();
    expect(screen.getByText(/31-07-1980/i)).toBeInTheDocument();
    expect(screen.getByText(/green/i)).toBeInTheDocument();
    expect(screen.getByText(/black/i)).toBeInTheDocument();
  });

  test('dispatches addFavoriteAsync action when bookmark icon is clicked and character is not a favorite', () => {
    render(
      <Provider store={store}>
        <CharacterCard character={character} />
      </Provider>
    );

    fireEvent.click(screen.getByRole('button', { name: /bookmark/i }));

    expect(store.dispatch).toHaveBeenCalledWith(addFavoriteAsync(character));
  });

  test('dispatches removeFavoriteAsync action when bookmark icon is clicked and character is a favorite', () => {
    const favoriteState = {
      ...initialState,
      favorites: {
        items: [character],
        error: null,
      }
    };

    store = mockStore(favoriteState);
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <CharacterCard character={character} />
      </Provider>
    );

    fireEvent.click(screen.getByRole('button', { name: /bookmark/i }));

    expect(store.dispatch).toHaveBeenCalledWith(removeFavoriteAsync(character.id));
  });
});
