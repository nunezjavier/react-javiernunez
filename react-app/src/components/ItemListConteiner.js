import React, {useDebugValue, useEffect, useState} from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList/ItemList"
import data from "../data"

function HeadProducts(){
    return new Promise ((resolve) => {
    setTimeout(() => resolve(data), 2000
    )
    }
    )
}

function ItemListConteiner(props){
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
            <div className='cards'>
                <ItemList data={data}/>
            </div>
        </>
        </main>)
}

export default ItemListConteiner