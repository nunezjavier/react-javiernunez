import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom"
import dataProducts from "../Data/Data";
/*import getProduct from "../helpers/getProduct";*/
import firestoreDB from "../../services/firebase";
import { getDoc, collection, doc} from 'firebase/firestore'



function ItemDetailConteiner(){
    const [data, setData] = useState({});
    const idUrl = useParams().id

    useEffect(() => {
        function getProducto(id) {
            return new Promise((resolve) => {
                const productosCollection = collection(firestoreDB, "productos");
                const docDataDet = doc(productosCollection, id);
                getDoc(docDataDet).then(snapshot => {
                    resolve(
                        { ...snapshot.data(), id: snapshot.id }
                    )
                });
        })
    }
            getProducto(idUrl).then(product=>{
                setData(product)
            })},[idUrl])
    return(
        <main>
        <>
        <ItemDetail
        data={data}
        key = {data.nombre}
        img = {data.img}
        nombre = {data.nombre}
        desc = {data.desc}
        precio = {data.precio}
        stock = {data.stock}
        />
        </>
        </main>)
}

export default ItemDetailConteiner