import { async } from "@firebase/util"
import { collection, deleteDoc, doc, getDocs, query, where, addDoc, updateDoc } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesProcess } from "../types/types"
import Swal from "sweetalert2";
import { update } from "lodash";



export const searchProcessAsync = (queryprocess) => {
    return async (dispatch) => {
        const getCollection = collection(db, "process")
        const querySearch = query(getCollection, where("nombre", "==", queryprocess))
        const datos = await getDocs(querySearch);

        const process = []
        datos.forEach((doc) => {
            let data = doc.data();
            data["id"] = doc.id;
            process.push({
              ...data,
            });
          });
        console.log(process)
        dispatch(searchProcessSync(process))
    }
}

export const searchProcessSync = (process) => {
    return {
        type: typesProcess.searchProcess,
        payload: process
    }
}

export const listProcessAsync = () => {
  return async (dispatch) => {
    const querySnapshot = await getDocs(collection(db, "process"));
    const processes = [];
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      data["id"] = doc.id;
      processes.push({
        ...data,
      });
    });
    dispatch(listProcessSync(processes));
  };
};

export const listProcessSync = (process) => {
    return {
        type: typesProcess.list,
        payload: process
    }
}

export const editProcessAsync = (idProcess, process) => {
  return async(dispatch) => {
    const getCollection = collection(db, "process")
    const queryEdit = query(getCollection, where("id", "==", idProcess))
    const dbQuery = await getDocs(queryEdit)
    let id
    dbQuery.forEach(async(docu) => {
      id = docu.id
    })
    console.log(id)
    const docRef = doc(db, "process", id)
    await updateDoc(docRef, process)
    .then(() => listProcessAsync())
    .then(()=> dispatch(listProcessAsync()))
  }
}

export const editProcessSync = (process) => {
  return {
    type: typesProcess.edit,
    payload: process
  }
}

export const deleteProcess = (id) => {
    return async (dispatch) => {
      deleteDoc(doc(db, "process", id));
      dispatch(deleteProcessSync(id));
    //   dispatch(listProcessAsync());
    };
};

export const deleteProcessSync = (id) => {
    return {
        type: typesProcess.delete,
        payload: id
    }
}

export const addProcessAsync = (newProcess) => {
  return (dispatch) => {
    addDoc(collection(db, "process"), newProcess)
      .then((resp) => {
        dispatch(addProcessSync(newProcess));
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu propuesta se subio con exito.',
            showConfirmButton: false,
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
