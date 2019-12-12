import { bindAsyncAction } from "typescript-fsa-redux-saga";
import { takeEvery, call } from "redux-saga/effects";
import { doPostDataWithSaga } from "../actions";
import { xxxxxApi } from "../../../../../services/api"

const doExampleWorker = bindAsyncAction(doPostDataWithSaga, {
  skipStartedAction: true
})(function* (action) {
  try {
    // TODO: can do something like
    console.log("calling api")
    const { response, error } = yield call(xxxxxApi, action.data);
    //  yield put({type: "XXX_XXX_ACTION", someData});

    //return can auto call Action: doPostDataWithSaga.done 
    console.log("calling done")
    return true;
  } catch (e) {
    //  yield put({type: "FAILED", message: e.message});
  }
});

export default function* watch() {
  yield takeEvery<any>(doPostDataWithSaga.started, doExampleWorker);
}
