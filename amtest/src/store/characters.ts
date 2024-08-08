import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '@/types/character';

interface CharacterState {
    characters: Character[];
    loading: boolean;
    error: string | null;
}

const initialState: CharacterState = {
    characters: [],
    loading: false,
    error: null,
};

const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        fetchCharactersStart(state) {
        state.loading = true;
        state.error = null;
        },
        fetchCharactersSuccess(state, action: PayloadAction<Character[]>) {
        state.characters = action.payload;
        state.loading = false;
        },
        fetchCharactersError(state, action: PayloadAction<string>) {
        state.loading = false;
        state.error = action.payload;
        },
    },
});

export const {
    fetchCharactersStart,
    fetchCharactersSuccess,
    fetchCharactersError,
} = characterSlice.actions;

export default characterSlice.reducer;