import React from "react";


function ItemCount ({stock, initial, onAdd }){
    const[cant, setCant] = React.useState(1)

    const handleIncrement =() =>{
        cant <= stock ? setCant(cant + 1) : setCant(cant - 0)
    }
    const handleDecrement =() =>{

        cant > initial ? setCant(cant - 1) : setCant(cant - 0)
    }

    return(
        <>
        <div className="contador">
            <button onClick={handleDecrement} >-</button>
            <h3 className="click">{cant}</h3>
            <button onClick={handleIncrement}>+</button>
            <button onClick={() => onAdd(cant)} className='product-addCart'>Agregar al Carrito</button>
        </div>
        </>
    )
}

export default ItemCount