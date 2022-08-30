import React, {useEffect, useState} from "react"
import ItemList from "./ItemList/ItemList"
import {useParams} from "react-router-dom"
import dataProducts from './Data/Data';
/*import getProduct from "./helpers/getProduct"*/
import firestoreDB from "../services/firebase";
import { getDocs, collection} from 'firebase/firestore'

function ItemListConteiner(){
    const [data, setData] = useState([]);
    const idCategory = useParams().idCategory

    function getProducts() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(dataProducts), 1500) 
            const productosCollection = collection(firestoreDB, "productos")
            getDocs(productosCollection).then (snapshot =>{
                const docsData = snapshot.docs.map ( doc =>{
                    return{ ...doc.data(), id: doc.id}
                }
                )
                resolve(docsData)
            } )

        })
        }
    useEffect(() => {
        getProducts ().then((respuesta) => {
            let itemsFilter = dataProducts.filter(element => element.category == idCategory)
            console.log(data)
            if(idCategory == undefined){
                setData(respuesta)
            }
            else{
                setData(itemsFilter)
            }

        }
        )
    }, [idCategory])
    return(
        <main>
        <>
            <div className='cards'>
                <ItemList data={data}/>
            </div>
        </>
        </main>)
}

export default ItemListConteiner 