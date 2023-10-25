import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getDatabase, onValue, ref, set, push, get, child } from "firebase/database";
import { app } from "./FirebaseConfig";



let auth = getAuth(app);
let db = getDatabase(app);


export let fbSignUp = (body) => {
    return new Promise((resolve, reject) => {
      if (!body.email && !body.password) {
        reject("Email and Password is Required");
      } else {
        createUserWithEmailAndPassword(auth, body.email, body.password)
          .then((res) => {
            let id = res.user.uid;
  
            body.id = id;
            const referece = ref(db, `user/${id?? ""}`);
            set(referece, body)
              .then((user) => {
                resolve("User Created Succefully");
              })
              .catch((error) => {
                console.log("Created but not respond")
                reject(error);
              });
          })
          .catch((err) => {
            console.log("dont created")
            reject(err);
          });
      }
    });
  };

  export let fbAuth = () => {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          resolve(uid)
          // ...
        } else {
          reject("No User is Logged in")
          // User is signed out
          // ...
        }
      });
    })
  }
  export let fbLogin = (body) => {
    return new Promise((resolve, reject) => {
      if (!body.email || !body.password) {
        reject("Email and Password is Required");
      } else {
        signInWithEmailAndPassword(auth, body.email, body.password)
          .then((res) => {
            let id = res.user.uid;
            console.log('====================')
            console.log(id)
            const referece = ref(db, `user/${id}`);
            
            onValue(referece, (data) => {
              console.log(data)
              if (data) {
                resolve(data.val());
              } else {
                reject("No Data Found");
              }
            });
          })
          .catch((err) => {
            reject(err);
          });
      }
    });
  };    

  export const UserAdd = (nodeName, body) => {
    return new Promise((resolve, reject) => {
      const newRef = push(ref(db, nodeName));
      const id = newRef.key;
  
      const reference = ref(db, `${nodeName}/${id}`);
      console.log(id);
      console.log(body);
      
      set(reference, body)
        .then(() => {
         
          onValue(reference, (snapshot) => {
            if (snapshot.exists()) {
              resolve(snapshot.val());
            } else {
              reject("No Data Found");
            }
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  export const InstituteAdd = (nodeName, body) => {
    return new Promise((resolve, reject) => {
      const newRef = push(ref(db, nodeName));
      const id = newRef.key;
  
      const reference = ref(db, `${nodeName}/${id}`);
      console.log(id);
      console.log(body);
      
      set(reference, body)
        .then(() => {
         
          onValue(reference, (snapshot) => {
            if (snapshot.exists()) {
              resolve(snapshot.val());
            } else {
              reject("No Data Found");
            }
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  export const InstituteGet = (nodeName) => {
    return new Promise((resolve, reject) => {
      const dataRef = ref(db, nodeName);
  
      get(dataRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            resolve(snapshot.val());
          } else {
            reject(new Error("No data available")); 
          }
        })
        .catch((err) => {
          console.error(err);
          reject(err); 
        });
    });
    // return (
    //   new Promise((resolve, rejects) => {
    //     const reference = ref(db, `${nodeName}`);
    //     onValue(reference, (data) => {
    //       if (data.exists()) {
    //         resolve(Object.values(data.val()))
    //       }
    //       else {
    //         rejects(("no data found"))
    //       }
    //     })
    //   })
    // )
  };