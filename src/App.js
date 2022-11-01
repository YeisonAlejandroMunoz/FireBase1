import React, {useEffect} from "react";
import { collection, getDocs } from "firebase/firestore";
import db from './FireBase/firebaseConfig';

const App = () => {
    useEffect(() => {
        const obtenerdata = async() => {
            const data = await getDocs(collection(db, 'usuarios'));
            data.forEach((documento) => {
                console.log(documento.data());
             });
            }
        obtenerdata();
    }, []);
    return (
        <center><h1>'Fire Base 1'</h1></center>
    );
}

export default App ;

//llamar a todos los datos
// data.forEach((documento) => {
//    console.log(documento.data());
// });

//llamar un dato
//console.log(data.docs[0].data());
