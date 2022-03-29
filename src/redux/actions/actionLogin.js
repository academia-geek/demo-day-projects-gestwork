import {types} from '../types/types'
import {getAuth, signInWithPopup,signOut} from 'firebase/auth'
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
//  const logoutE=() =>({
//     type: types.logout,
//   });

//    const logout_success=()=>({
//     type: types.logout_success,
// })


// const logout_error =(error)=>({
//     type:types.logout_fallido,
//     payload: error,
//  })


// export const setuser = (user) =>({
//     type:types.set_user,
//     payload: user,
//  })
//  export const logoutInitiate = () =>{
//     return (dispatch) =>{

//         dispatch(logoutE());
//         const auth = getAuth();
//         signOut(auth) 
//        .then((resp) =>{
//              dispatch(
//                 logout_success(resp)
//              ) 
//          })
//        .catch(e =>{
//             dispatch(logout_error(e.message));
//        })
//     }
//}
 