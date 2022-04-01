import { collection, deleteDoc, doc, getDocs, query, where, addDoc, updateDoc } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesProcess } from "../types/types"
import Swal from "sweetalert2";



export const searchProcessAsync = (queryprocess) => {
  console.log(queryprocess)
    return async (dispatch) => {
        const getCollection = collection(db, "process")
        // const querySearch = query(getCollection, where("nombre", "==", queryprocess))
        const querySearch = query(getCollection, where("nombre",  '>=', queryprocess, '<', queryprocess + 'z'))
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
    console.log("probando activos")

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


export const editProcessAsync = (id, contentAll) => {
  return async (dispatch) => {
    updateDoc(doc(db, "process", id), contentAll);
    dispatch(editProcessSync(contentAll));
    Swal.fire({

      position: 'center',
      icon: 'success',
      title: 'Tu Proceso se edito con exito.',
      showConfirmButton: true,
      timer: 5000
    })   
    dispatch(listProcessAsync());
    
  };
};

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
    dispatch(listProcessAsync());
  };
};

// export const deleteProcessAsync = (idProcess) => {
//     console.log(idProcess)
//     return async(dispatch) => {

//       const estCollection = collection(db, "process");
//       const q = query(estCollection,where("id","==", idProcess))
     
//       const datos = await getDocs(q);
//       console.log(datos);
//       datos.forEach((docu) => {
//         console.log(docu);
//           deleteDoc(doc(db,"process",docu.id));
//           // const getProcess = docu.find(item => item.id === idProcess)
//           // console.log(getProcess);
//       })
//       dispatch(deleteProcessSync(idProcess));
//       dispatch(listProcessAsync());
//     }
// };


export const deleteProcessSync = (id) => {
  return {
      type: typesProcess.delete,
      payload: id
  }
}


// export const deleteProcessAsync = (idProcess, contentAll) => {
//   console.log(idProcess)
//   return async (dispatch) => {
//     // const getCollection = collection(db, "process");
//     const getCollection = query(collection(db, "process"), where("id", "==", idProcess));
//     // query(collection(db, "cities"), where("capital", "==", true));
//     // const queryProcess = query(getCollection, where("id", "==", idProcess))
//     // const datos = await getDocs(queryProcess);
//     const datos = await getDocs(getCollection);
//     // console.log(queryProcess)
//     console.log(datos)
//     // deleteDoc(doc(db, "process", id));
//     // dispatch(deleteProcessSync(id));
//     // dispatch(listProcessAsync());
//   };
// };






// export const deleteProcessAsync = (id) => {
//     return async(dispatch) => {
//         const deleteCollection = collection(db, "process");
//         const queryProcess = query(deleteCollection, where("id", "==", id))
         
//         const datos = await getDocs(queryProcess);
//         datos.forEach((docu) => {
//             deleteDoc(doc(db,"process", docu.id));
//         })
//         dispatch(deleteSync(id))
//     }
// }



export const addProcessAsync = (newProcess) => {
  return (dispatch) => {
    
    addDoc(collection(db, "process"), newProcess)
      .then((resp) => {
        dispatch(addProcessSync(newProcess));
        Swal.fire({

            position: 'center',
            icon: 'success',
            title: 'Tu Proceso se subio con exito.',
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
