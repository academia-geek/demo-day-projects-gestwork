import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesProcess } from "../types/types"


export const addProcessAsync = (newProcess) => {
    return (dispatch) => {
        addDoc(collection(db, "process"), newProcess)
        .then((resp) => {
            dispatch(addProcessSync(newProcess));
        })
        .catch((error) => {
            console.log(error)
        })
    }
}
export const addProcessSync = (process) => {
    return {
        type: typesProcess.add,
        payload: process
    }
}