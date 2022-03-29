import { collection, deleteDoc, doc, getDocs, query, where, addDoc } from "firebase/firestore"
import Swal from "sweetalert2";
import { db } from "../../firebase/firebaseConfig";
import { typesProcess } from "../types/types";




export const searchAsyn = (queryprocess) => {
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
        dispatch(searchSync(process))
    }
}

export const searchSync = (process) => {
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
    dispatch(listSync(processes));
  };
};

export const listSync = (process) => {
    return {
        type: typesProcess.list,
        payload: process
    }
}


export const deleteProcess = (id) => {
    return async (dispatch) => {
      deleteDoc(doc(db, "process", id));
      dispatch(deleteSync(id));
    //   dispatch(listProductAsync());
    };
};

export const deleteSync = (id) => {
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
