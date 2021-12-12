import { initialState } from "../initialState";

export default function user(state = {
    authToken: null,
    id: null,
    type: null,
}, action: any) {
    switch (action.type) {
        case "setUserToken": 
            return {...state, authToken: action.value};
        case "setUserId": 
            return {...state, id: action.value};
        case "setUserType":
            return {...state, type: action.value};
        default:
            return state;
    }
}