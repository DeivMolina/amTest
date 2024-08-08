import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
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


export const fetchCharactersAsync = createAsyncThunk<Character[], void, { rejectValue: string }>(
    'characters/fetchCharacters',
    async (_, { rejectWithValue }) => {
        try {
        const response = await fetch('http://localhost:5000/characters');
        const data = await response.json();
        return data;
        } catch (error) {
        return rejectWithValue('Failed to fetch characters');
        }
    }
);

const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharactersAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
            })
            .addCase(fetchCharactersAsync.fulfilled, (state, action: PayloadAction<Character[]>) => {
            state.characters = action.payload;
            state.loading = false;
            })
            .addCase(fetchCharactersAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
            });
    },
});

export default characterSlice.reducer;
