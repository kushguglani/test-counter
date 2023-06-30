import { DEC_COUNTER, INC_COUNTER } from "../../constants/actionTypes";

const INITIAL_STATE=5;

const counterReducer =(state = INITIAL_STATE,action)=>{
    switch(action.type){
        case INC_COUNTER:
            return ++state;
        case DEC_COUNTER:
            return --state;
        default:
            return state;
    }
}
export default counterReducer;