import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom"
import dataProducts from "../Data/Data";



function ItemDetailConteiner(){
    const [data, setData] = useState({});
    const idUrl = useParams().id

function HeadProducts(){
    return new Promise ((resolve) => {
        let findItem = dataProducts.find((element) => element.id == idUrl)
    setTimeout(() => resolve(findItem), 2000
    )
    }
    )
}

    useEffect(() => {
        HeadProducts ().then((respuesta) => {
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