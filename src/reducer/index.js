import { combineReducers } from "redux";

const listProductReducer = (state=[],action)=>{
    if(action.type === "GET_DATA"){
        return action.data
    }
    return state
}
const ChoiceDataReducer = (choice=null,action)=>{
    if(action.type === "CHOICE_DATA"){
        return action.data
    }
    return choice
}

export default combineReducers({
    listProductReducer,
    ChoiceDataReducer
})