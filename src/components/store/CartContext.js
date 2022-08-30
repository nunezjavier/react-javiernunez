import { createContext, useState } from "react";


export const cartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    let copyCart = [...cart];

    function addToCart( data , clicks) {
        if (isInCart(data.id)) {
            const itemIndex = findItem(data.id)
            copyCart[itemIndex].clicks += clicks;
            setCart(copyCart)
            console.log(copyCart)
        }
        else {
            copyCart.push({ ...data, clicks });
            data.stock-= clicks
            setCart(copyCart)
            console.log(copyCart)
        }

    }

    function removeItem(data) {
        const itemRemove = findItem(data.id)
        const indexItem = copyCart.indexOf(itemRemove)
        copyCart.splice(indexItem, 1)
        setCart(copyCart)
        console.log(copyCart)
    }

    function removeAll(){
        copyCart = []
        setCart(copyCart)
        console.log(copyCart)
    }

    function totalAmount() {
        let amountCart = 0;
        cart.map(index => amountCart += index.clicks);
        return amountCart;
    }

    function totalPrice(){
        let total = 0;
        cart.map ((index) => total += index.precio * index.clicks);
        return total;
    }

    function isInCart(id) {
        return (copyCart.some(itemInCart => itemInCart.id === (id)))
    }

    function findItem(id){
        return (copyCart.find(item => item.id === (id)))
    }
    return (
        <cartContext.Provider value={{ cart, addToCart, removeItem, removeAll, totalAmount, totalPrice }}>
            {children}
        </cartContext.Provider>
    );
}