import React from "react";

function ItemCount (props){
    const[clicks, setClicks] = React.useState(1)

    const handleIncrement =() =>{
        clicks >= props.initial && clicks< props.stock ? setClicks(clicks + 1) : setClicks(clicks - 0)
    }
    const handleDecrement =() =>{

        clicks > props.initial ? setClicks(clicks - 1) : setClicks(clicks - 0)
    }

    return(
        <>
        <div className="contador">
            <button onClick={handleDecrement} >-</button>
            <h3 className="click">{clicks}</h3>
            <button onClick={handleIncrement}>+</button>
        </div>
        </>
    )
}

export default ItemCount