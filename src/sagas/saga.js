import { takeLatest, put, delay } from "redux-saga/effects";
// import { delay } from "redux-saga";
import { AgeFunction, AgeAsync } from "../general/variables";

const up = AgeFunction.up;
const down = AgeFunction.down;

const upAsync = AgeAsync.up;
const downAsync = AgeAsync.down;

function* ageUpAsync() {
  yield delay(4000);
  yield put({ type: upAsync, value: 2 });
}

// Because we watch the up age at browser
export function* watchAgeUp() {
  yield takeLatest(up, ageUpAsync);
}
