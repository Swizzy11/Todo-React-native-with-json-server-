import { bindActionCreators } from "redux";
import ActionCreators  from "../store/action-creator";
import { useAppDispatch } from "./useAppDispatch";

export const useActions = () => {
    const dipsatch = useAppDispatch()
                   
    return bindActionCreators(ActionCreators, dipsatch)
}
