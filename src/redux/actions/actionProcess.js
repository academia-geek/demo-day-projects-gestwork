import { addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../../firebase/firebaseConfig";
import { typesProcess } from "../types/types";

export const addProcessAsync = (newProcess) => {
  return (dispatch) => {
    addDoc(collection(db, "process"), newProcess)
      .then((resp) => {
        dispatch(addProcessSync(newProcess));
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu propuesta se subio con exito.',
            showConfirmButton: true,
            timer: 5000
          })        
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const addProcessSync = (process) => {
  return {
    type: typesProcess.add,
    payload: process,
  };
};
