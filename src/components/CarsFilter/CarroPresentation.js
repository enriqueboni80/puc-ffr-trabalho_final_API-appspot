/* PRESENTATION DESATIVADA */
import React from "react"

const CarroPresentation = (props) => {
    var carro = props.carro
    return (
        <div>
            {carro.Marca}<br />
            {carro.Modelo}<br />
            {carro.AnoModelo}<br />
            {carro.Combustivel}<br />
            {carro.CodigoFipe}<br />
            {carro.Valor}<br />
        </div>
    )
}

export default CarroPresentation