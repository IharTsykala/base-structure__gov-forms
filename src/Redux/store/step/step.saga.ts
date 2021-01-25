import { put, takeEvery } from "redux-saga/effects"

import { ActionTypes, setArraySteps, getFailureAction } from "./step.actions"
import fakeArraySteps from "../../../services/fakeArray"

function* setArrayStepsSaga(actions: any) {
  try {
    const response = yield fakeArraySteps.slice()
    yield put(setArraySteps(response))
  } catch (e) {
    yield put(getFailureAction(e))
  }
}

export default function* stepSaga() {
  yield takeEvery(ActionTypes.GET_ARRAY_STEPS, setArrayStepsSaga)
}
