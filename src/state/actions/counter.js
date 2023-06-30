import { INC_COUNTER, DEC_COUNTER } from "../../constants/actionTypes"


export const incrementCounter =()=>{
    return{
        type:INC_COUNTER
    }
}
export const decrementCounter =()=>{
    return{
        type:DEC_COUNTER
    }
}