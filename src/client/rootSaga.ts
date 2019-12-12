import { all, fork } from "redux-saga/effects";
// TODO: import xxxSaga
import exampleSaga from "./components/example/redux/saga";

export default function* rootSaga() {
    yield all([
        // TODO: ADD Sagas
        fork(exampleSaga)
        // fork(yyyySaga),
        // fork(zzzzSaga)
    ]);
}
