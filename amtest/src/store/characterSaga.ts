import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchCharactersStart, fetchCharactersSuccess, fetchCharactersError } from './characters';
import { Character } from '@/types/character';

function* fetchCharacters() {
    try {
        const response: Response = yield call(fetch, 'http://localhost:5000/characters');
        const data: Character[] = yield response.json();
        yield put(fetchCharactersSuccess(data));
    } catch (error) {
        yield put(fetchCharactersError((error as Error).toString()));
    }
}

function* charactersSaga() {
    yield takeLatest(fetchCharactersStart.type, fetchCharacters);
}

export default charactersSaga;
