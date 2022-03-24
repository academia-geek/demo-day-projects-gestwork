import {types} from '../types/types'


export const LoginS = (id, displayname) =>{
    return {
        type:types.login,
        payload:{
            id,
            displayname
        }
    }
 }