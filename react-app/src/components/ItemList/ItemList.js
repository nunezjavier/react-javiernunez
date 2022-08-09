import React from "react";
import Item from "../Item/Item"

function ItemList({data}){
    return(
        data.map((producto) =>{
            return(
                <Item 
                    key={producto.nombre}
                    img={producto.img}
                    nombre={producto.nombre}
                    precio={producto.precio}
                    stock ={producto.stock}
                />
            )
        }
        )
    )
}

export default ItemList