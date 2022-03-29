import {types} from "../types/types";



const initialState = {
   user: {}
}

export const loginReducer = (state = initialState, action) => {

    switch (action.type){
        case types.login:

        return{
            id:action.payload.id,
            name: action.payload.displayname,
            user:{...action.payload}
        }
        case types.logout:
            return{
                
            }
        default:
            return state;
    }


}