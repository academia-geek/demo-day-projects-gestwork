import {types} from '../types/types';
import {getAuth, createUserWithEmailAndPassword, updateProfile}from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import Swal from 'sweetalert2';

export const registroEmailPasswordNombre = (name,email,password, cargo) => {
    return(dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email,password)
        .then(async ({user}) => {

           await updateProfile(auth.currentUser, {displayName: name})

           dispatch(registerS(user.email,user.uid,user.displayName))
           Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Registro exitoso',
            showConfirmButton: true,
            timer: 5000
          })    

            const docuRef = doc(db, `users/${user.uid}`)
            console.log(docuRef,'doc')
            setDoc(docuRef,{id:user.uid,name: user.displayName, email: user.email, cargo: cargo})
        })
        .catch(e =>{
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Registro no exitoso',
                showConfirmButton: true,
                timer: 5000
              })    
            console.log(e,'error');
        })
    }
}



export const registerS= (email,password,firstName) => {
    // console.log('ide',paramuser)

    return{
       type: types.register,
       payload: {
           email,
           password,
           firstName,
       }
       
    }
}