import React from "react"
import { IoIosStarOutline, IoIosStar } from 'react-icons/io'


const CarroPresentation = (props) => {
    var carro = props.carro
    var marca = props.marca

    return (
        <>
            <div class="row text-center" style={{ marginTop: "25px" }}>
                <div class="row slug-header">
                    <div class="col-lg-2 col-md-4 col-sm-4 logo"><img src={marca.path_img} alt="imagem da marca"/></div>
                    <div class="col-lg-5 col-md-4 com-sm-4 title">{marca.nome}</div>
                    <div class="col-lg-4 col-md-4 com-sm-4 content">
                        {
                            props.checarFavorito(carro)
                                ? (<div onClick={props.fnDesFavoritar}><IoIosStar size={35} /></div>)
                                : (<div onClick={props.fnFavoritar}>< IoIosStarOutline size={33} /></div>)
                        }
                        <div>{carro.name} ({carro.ano_modelo})</div>
                    </div>
                </div>
            </div>
            <div class="row text-center carro-presentation-container">
                <div class="carro-presentation-board">
                    <div class="valor">{carro.preco}</div>
                    <div><b>Modelo:</b> {carro.name} ({carro.marca})</div>
                    <div><b>Ano:</b> {carro.ano_modelo}</div>
                    <div><b>Combustível:</b> {carro.combustivel}</div>
                    <div><b>Código Fipe:</b> {carro.codigo_fipe}</div>
                    <div><b>Mês de Referência:</b> {carro.referencia}</div>
                </div>
            </div>
        </>
    )
}

export default CarroPresentation