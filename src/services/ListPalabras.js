// import axios from 'axios'
import { View, Text } from "react-native";
import React, { useEffect, useState, useMemo } from "react";








// const useApiResult = (request) => {
//   const [results, setResults] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch(request)
//       .then(async (response) => {
//         if (response.ok) {
//           setResults(await response.json());
//           setError(null);
//         } else {
//           setError(await response.text());
//         }
//       })
//       .catch((err) => {
//         setError(err.message);
//       });
//   }, [request]);

//   return [results, error];
// };

// export default useApiResult;


// ------------
// const ListPalabras = () => {
//   const [palabr, setPalabr] = useState(null);

//   useEffect(() => {
//     fetch('http://127.0.0.1:8000/api/', {
//       method: 'GET',
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);

//         const palabrasData= {
//            name: data.result[0].palabra,
//            description: data.result[0].descripcion

//           // name= data.result[0].name.first
//         };
//         setPalabr(palabrasData);
//       })
//       .catch(error => console.log(error));
//   }, [])
//   return (
//    <>
//     {palabr ? ( <View>
//     <Text>{palabr.name}</Text>
//         <Text>{palabr.description}</Text>
    

//     </View>): null }
//    </>
//   );

// }

// -------------------
const ListPalabras = () => {
  const [data, setData] = useState([])
  const [palabras,setPalabras] = useState([])
  const url = 'http://127.0.0.1:8000/api/miskitos'


  useEffect(() => {
    const fetchData = async () => {
      await fetch('http://127.0.0.1:8000/api/miskitos')
        .then(response => response.json())
        .then(json => json.setData(json))
        .catch(error => console.log(error))
    }
    fetchData()

    async function loadPalabras() {
      const response= await getPalabras()

    if(response.status ===200){
      setPalabras(response.data.palabras)
    }
    }
    loadPalabras(getPalabras)
  }, [])

  return (
       <>
        {palabras ? ( <View>
        <Text>{palabras.name}</Text>
            <Text>{palabras.description}</Text>
        
    
        </View>): null }
       </>
      );
 }
// return (
//   <>
//     <h1>listado de palabras</h1>
//     {data.map((palabra, idx) => (
//       <Text >{person.palabra}</Text>
//     ))}
//   </>
// );


// }


export default ListPalabras;