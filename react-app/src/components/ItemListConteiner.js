import ItemCount from "./ItemCount"


function ItemListConteiner(props){
    return (
        <><div>
            <h2 className="titulo">{props.greeting}Productos</h2>
        </div>
        <ItemCount initial={1} stock={8} /></>
)
}

export default ItemListConteiner