import { reducerWithInitialState } from "typescript-fsa-reducers";
import { exampleAction, doPostDataWithSaga } from "../actions";

export interface IExampleStoreState {
  titleString: string;
}

// init
const initState: IExampleStoreState = {
  titleString: "0"
};

// reducer
export const exampleReducer = reducerWithInitialState(initState)
  .case(exampleAction.changeButtonTitle, (state, payload) => {
    return {
      ...state,
      titleString: payload
    };
  })
  .case(doPostDataWithSaga.started, (state, payload) => {
    console.log(`doPostDataWithSaga-->started payload.data:"${payload.data}`);
    return {
      ...state
    };
  })
  .case(doPostDataWithSaga.done, (state, payload) => {
    console.log(`doPostDataWithSaga-->done payload.result:"${payload.result}`);
    //TODO: do someting
    return {
      ...state
    };
  });
export default exampleReducer;
