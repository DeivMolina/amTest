import { combineReducers } from '@reduxjs/toolkit';
import charactersReducer from './characters';

//Combinar todos los reducers en uno solo.
const rootReducer = combineReducers({
    characters: charactersReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
