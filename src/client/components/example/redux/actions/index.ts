import { Action, actionCreatorFactory } from "typescript-fsa";
const actionCreator = actionCreatorFactory();

//interface: redux & saga action
export interface IExampleActions {
  changeButtonTitle: (v: string) => Action<string>;
  doPostDataWithSaga: (v: IDataInfo) => Action<IDataInfo>;
}


//redux action
export const exampleAction = {
    changeButtonTitle: actionCreator<string>("CHANGE_BUTTON_TITLE"),
}

//saga action
export interface IDataInfo {
    data: string;
}
export const doPostDataWithSaga = actionCreator.async<IDataInfo, boolean, {}>("DO_POST_DATA");
