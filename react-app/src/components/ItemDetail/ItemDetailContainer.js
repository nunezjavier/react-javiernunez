import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import data from "../../data";

function HeadProducts(){
    return new Promise ((resolve) => {
    setTimeout(() => resolve(data[0]), 2000
    )
    }
    )
}

function ItemDetailConteiner(props){
    const [data, setData] = useState([]);
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