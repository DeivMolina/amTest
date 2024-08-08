import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Character } from '@/types/character';

interface FavoritesState {
  items: Character[];
  error: string | null;
}

const initialState: FavoritesState = {
  items: [],
  error: null,
};

export const addFavoriteAsync = createAsyncThunk<Character, Character, { state: { favorites: FavoritesState } }>(
  'favorites/addFavorite',
  async (character, { getState, rejectWithValue }) => {
    const state = getState();
    const exists = state.favorites.items.find(item => item.id === character.id);
    if (exists) {
      return rejectWithValue('El personaje ya está en favoritos');
    }
    if (state.favorites.items.length >= 5) {
      return rejectWithValue('Sólo puedes tener 5 favoritos');
    }
    return character;
  }
);

export const removeFavoriteAsync = createAsyncThunk<string, string>(
  'favorites/removeFavorite',
  async (characterId) => {
    return characterId;
  }
);

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addFavoriteAsync.fulfilled, (state, action: PayloadAction<Character>) => {
        state.items.push(action.payload);
        state.error = null;
      })
      .addCase(addFavoriteAsync.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(removeFavoriteAsync.fulfilled, (state, action: PayloadAction<string>) => {
        state.items = state.items.filter(character => character.id !== action.payload);
        state.error = null;
      });
  },
});

export const { clearError } = favoritesSlice.actions;
export default favoritesSlice.reducer;
