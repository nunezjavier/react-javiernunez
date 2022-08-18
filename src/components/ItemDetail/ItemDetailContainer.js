import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom"
import dataProducts from "../Data/Data";
import getProduct from "../helpers/getProduct";



function ItemDetailConteiner(){
    const [data, setData] = useState({});
    const idUrl = useParams().id

    useEffect(() => {
        getProduct ().then((respuesta) => {
            let findItem = dataProducts.find((element) => element.id == idUrl)
            console.log(data)
            if(idUrl == undefined){
                setData(respuesta)
            }
            else{
                setData(findItem)
            }
        }
        )
    }, [])
    return(
        <main>
        <>
        <ItemDetail
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