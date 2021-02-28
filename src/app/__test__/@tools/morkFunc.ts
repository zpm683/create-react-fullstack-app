import * as redux from "react-redux";

export const useSelector = jest.spyOn(redux, "useSelector");
export const useDispatch = jest.spyOn(redux, "useDispatch");
