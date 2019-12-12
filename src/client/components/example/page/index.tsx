import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { IStoreState } from "../../../store";
import { exampleAction, doPostDataWithSaga, IDataInfo } from "../redux/actions";
import Example from "../template";

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    changeButtonTitle: (v: string) => dispatch(exampleAction.changeButtonTitle(v)),
    doPostDataWithSaga: (v: IDataInfo) => dispatch(doPostDataWithSaga.started(v)),
  };
}

function mapStateToProps(storeState: IStoreState) {
  return Object.assign({}, storeState.exampleStoreState);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example);
