import {types} from '../types/types'
import {getAuth, signInWithEmailAndPassword, signInWithPopup,signOut} from 'firebase/auth'
import{google} from '../../firebase/firebaseConfig'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

// Create a reference to the cities collection
import { query, where } from "firebase/firestore";

// Create a query against the collection.
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


export const LoginS = (id, displayname, user) =>{

    return {
        type:types.login,
        payload:{
            id,
            displayname,
            email:user.email
        }
    }
 }
 export const Cargo = ( cargo) =>{
     console.log("CARGOOOOOOOOOOOOOOOOOO")
     return {
         type:types.cargo,
         payload:{
             cargo
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
 const listitem = async (email) => {
    let cargo ='' ;
  
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {

      if (doc.data().email === email){
        cargo= doc.data().cargo
        console.log("if cargo")
        console.log(cargo)
        
      }

      
    });
    return(dispatch) =>{ dispatch(Cargo(cargo))}
  };
 export const loginEmailPassword = (email,password) =>{
    return (dispatch) =>{

        // dispatch(loginStart()  );
        const auth = getAuth();

        signInWithEmailAndPassword(auth,email,password)
       .then(({user}) =>{
          //listitem(user.email)
          
     dispatch(
                LoginS(user.uid,user.displayName, user),
                //login_success(user),
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
 