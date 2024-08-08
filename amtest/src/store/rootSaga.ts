import { all } from 'redux-saga/effects';
import charactersSaga from './characterSaga';

//Combinar todas las sagas en una sola.
function* rootSaga() {
    yield all([
        charactersSaga(),
    ]);
}

export default rootSaga;
