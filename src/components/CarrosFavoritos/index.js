import React from "react";
import CarrosFavoritosPresentation from "./CarrosFavoritosPresentation"
import { useDispatch, useSelector } from 'react-redux'


const Index = () => {
    const carrosFavoritos = useSelector(state => state.carrosFavoritos)

    const dispatch = useDispatch();
    const desFavoritarCarro = (e, carro) => {
        e.preventDefault()
        dispatch({
            type: 'DEL_CARROS_FAVORITOS',
            carro
        })
    }

    return (
        <CarrosFavoritosPresentation
            carrosFavoritos={carrosFavoritos}
            fnDesFavoritar={desFavoritarCarro}
        />
    )
}

export default Index