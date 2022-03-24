import {types} from '../types/types'
import {getAuth, signInWithPopup} from 'firebase/auth'
import{google} from '../../firebase/firebaseConfig'

export const loginGoogle = () => {

    return(dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth,google)
        .then(({user}) => {
            dispatch(LoginS(user.uid,user.displayName))
        })
        .catch(e =>{
            console.log(e);
        })
    }
}


export const LoginS = (id, displayname) =>{
    return {
        type:types.login,
        payload:{
            id,
            displayname
        }
    }
 }