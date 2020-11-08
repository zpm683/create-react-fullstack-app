import * as redux from "react-redux";
import * as customHooks from "../../app/common/middlewares/hooks";

export const useSelector = jest.spyOn(redux, "useSelector");
export const useDispatch = jest.spyOn(redux, "useDispatch");
export const useOnline = jest.spyOn(customHooks, "useOnline");
