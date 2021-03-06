import React from "react"
import useCarro from "./useCarro"
import useMarcas from "../Marcas/useMarcas"
import CarroPresentation from "./CarroPresentation"
import { useDispatch, useSelector } from 'react-redux'

const Index = (props) => {
    const idMarca = props.match.params.IdMarca
    const idModelo = props.match.params.IdModelo
    const idAno = props.match.params.IdAno
    const carro = useCarro(idMarca, idModelo, idAno)
    const marca = useMarcas(idMarca)
    const carrosFavoritos = useSelector(state => state.carrosFavoritos)

    const dispatch = useDispatch();
    const favoritarCarro = (e, carro) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_CARROS_FAVORITOS',
            carro
        })
    }

    const desFavoritarCarro = (e, carro) => {
        e.preventDefault()
        dispatch({
            type: 'DEL_CARROS_FAVORITOS',
            carro
        })
    }

    const checarFavorito = (carro) => {
        var exist = false
        carrosFavoritos.map((carroFavorito) => {
            if (carro.name === carroFavorito.name
                && carro.ano_modelo === carroFavorito.ano_modelo
                && carro.combustivel === carroFavorito.combustivel) {
                exist = true
            }
        })
        return exist
    }

    return (
        <CarroPresentation
            carro={carro}
            marca={marca}
            fnFavoritar={(e) => favoritarCarro(e, carro)}
            fnDesFavoritar={(e) => desFavoritarCarro(e, carro)}
            checarFavorito={checarFavorito}
        />
    )
}

export default Index