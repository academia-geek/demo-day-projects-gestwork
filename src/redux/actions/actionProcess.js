import { async } from "@firebase/util"
import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesProcess } from "../types/types"

export const searchAsyn = (queryprocess) => {
    return async (dispatch) => {
        const getCollection = collection(db, "process")
        const querySearch = query(getCollection, where("nombre", "==", queryprocess))
        const datos = await getDocs(querySearch);

        const process = []
        datos.forEach((docu) => {
            process.push(docu.data())
        })
        console.log(process)
        dispatch(searchSync(process))
    }
}

export const searchSync = (process) => {
    return {
        type: typesProcess.searchProcess,
        payload: process
    }
}

export const deleteProcessoAsync = (number) => {
    return async(dispatch) => {
        const deleteCollection = collection(db, "process");
        const queryProcess = query(deleteCollection, where("number", "==", number))
         
        const datos = await getDocs(queryProcess);
        datos.forEach((docu) => {
            deleteDoc(doc(db,"process", docu.id));
        })
        dispatch()
    }
}

export const deleteSync = (number) => {
    return {
        type: typesProcess.delete,
        payload: number
    }
}
