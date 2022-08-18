import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom"
import dataProducts from "../Data/Data";
import getProduct from "../helpers/getProduct";



function ItemDetailConteiner(){
    const [data, setData] = useState({});
    const id = 4

    useEffect(() => {
        getProduct (id).then((respuesta) => {
            setData(respuesta)
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
        />
        </>
        </main>)
}

export default ItemDetailConteiner