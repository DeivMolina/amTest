import { combineReducers } from '@reduxjs/toolkit';
import charactersReducer from './characters';
import favoritesReducer from './favoritesSlice';

const rootReducer = combineReducers({
  characters: charactersReducer,
  favorites: favoritesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
