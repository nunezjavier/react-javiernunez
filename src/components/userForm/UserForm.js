import React, { useState } from "react";
import { Link } from "react-router-dom"
import { cartContext } from "../store/CartContext"
import { useContext } from 'react';
import {getDocs, collection, addDoc, query, where,documentId,updateDoc,writeBatch,} from "firebase/firestore";
import firestoreDB from '../../services/firebase'
import Swal from "sweetalert2"

function UserForm(){
    const { cart, totalPrice} = useContext(cartContext)

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        telefono: "",
    })
    const[orderId, setOrderId] = useState(false)
    const ordenDeCompra = {
        buyer: {...userData},
        items: {...cart},
        total: totalPrice(),
        date: new Date()
    }

    async function handleSubmit(evt){
        evt.preventDefault()

        const collectionRef = collection(firestoreDB, "orders")
        const docRef = await addDoc(collectionRef, ordenDeCompra)

        setOrderId(docRef.id)

        const collectionProdRef = collection(firestoreDB, "productos");

    const arrayIds = cart.map((item) => item.id);
    const q = query(collectionProdRef, where(documentId(), "in", arrayIds));

    let batch = writeBatch(firestoreDB);

    getDocs(q).then((response) => {
        response.docs.forEach((doc) => {
        const itemToUpdate = cart.find((prod) => prod.id === doc.id);

        if (doc.data().stock >= itemToUpdate.quantity) {
        batch.update(doc.ref, {
            stock: doc.data().stock - itemToUpdate.quantity,
        });
        }
        batch.commit();
        console.log("commit")
    });
    });

    }

    function inputChangeHandler( evt){
        const input = evt.target
        const value = input.value
        const inputName = input.name

        let copyUserData = { ...userData }

        copyUserData[inputName] = value
        setUserData(copyUserData)
    }

    function handleReset(evt){
        setUserData({
        name: "",
        email: "",
        telefono: "",
        })
    }

    if(orderId){
        return(
            Swal.fire({
                icon: 'success',
                title: `Gracias, tu compra fue finalizada`,
                text: `Tu id de seguimiento es: ${orderId}`,
                footer: '<a href="/">Volver al Inicio</a>'
            })
        )
    }

    return(
        <div>
            <form onReset={handleReset} onSubmit={ handleSubmit}>
                <div>
                    <label htmlFor="name" className="labelForm">Nombre</label>
                    <input value={userData.name} onChange={ inputChangeHandler} name="name" type="text" placeholder="Nombre"/>
                </div>

                <div>
                    <label htmlFor="telefono" className="labelForm">Telefono</label>
                    <input value={userData.telefono} onChange={ inputChangeHandler}  name="telefono" type="number" placeholder="Telefono"/>
                </div>

                <div>
                    <label htmlFor="email" className="labelForm">Email</label>
                    <input value={userData.email} onChange={ inputChangeHandler}  name="email" type="email" placeholder="Email"/>
                </div>

                <div>
                <button type="submit" className="botonfin">Finalizar Compra </button>
                    <button type="reset">Cancelar</button>
                    <Link to={"/"}><button className="botonseg">Seguir Comprando </button></Link>
                </div>
            </form>
        </div>
    )
}

export default UserForm 