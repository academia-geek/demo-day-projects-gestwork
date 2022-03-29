import {types} from '../types/types'
import {getAuth, signInWithEmailAndPassword, signInWithPopup,signOut} from 'firebase/auth'
import{google} from '../../firebase/firebaseConfig'

const loginStart=() =>({

    type: types.login_start,
  
  
  });



  const login_success=(user)=>({
    type: types.login_success,
    payload: user,
})


const Errorlogin=(error)=>({
    type:types.login_fallido,
    payload: error,
 })

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
   console.log(id,displayname)

    return {
        type:types.login,
        payload:{
            id,
            displayname
        }
    }
 }
 
 const logoutE=() =>({
    type: types.logout,
  });

   const logout_success=()=>({
    type: types.logout_success,
})


const logout_error =(error)=>({
    type:types.logout_fallido,
    payload: error,
 })


export const setuser = (user) =>({
    type:types.set_user,
    payload: user,
 })
 export const loginEmailPassword = (email,password) =>{
    console.log( 'entro a funcion')

    return (dispatch) =>{
    console.log( 'dispatch')

        // dispatch(loginStart()  );
    console.log( '222entro a funcion')

        const auth = getAuth();

        signInWithEmailAndPassword(auth,email,password)
       .then(({user}) =>{
    console.log( 'enentro a then')

             dispatch(
                LoginS(user.uid,user.displayName),
                login_success(user)
             ) 
       })
       .catch(e =>{
            console.log('El usuario no existe');
            dispatch(Errorlogin(e.message));
       })
    }
}
 export const logoutInitiate = () =>{
    return (dispatch) =>{

        dispatch(logoutE());
        const auth = getAuth();
        signOut(auth) 
       .then((resp) =>{
             dispatch(
                logout_success(resp)
             ) 
         })
       .catch(e =>{
            dispatch(logout_error(e.message));
       })
    }
}
 