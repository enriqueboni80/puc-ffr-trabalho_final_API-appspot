import React from "react"
import { FaRegTrashAlt } from 'react-icons/fa'

const CarrosFavoritosPresentation = (props) => {
    var carrosFavoritos = props.carrosFavoritos
    return (
        <>
            {carrosFavoritos.length > 0 ?
                <div class="row text-center" style={{ marginTop: "25px" }}>
                    <table class="table table-striped table-bordered table-hover" style={{ border: "1px solid black" }}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Modelo</th>
                                <th scope="col">Preço</th>
                                <th scope="col">Acao</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carrosFavoritos.map((carro, key) => {
                                return (
                                    <tr>
                                        <td>{key + 1}</td>
                                        <td>
                                            <b>{carro.marca},</b> {carro.name} {carro.ano_modelo} {carro.combustivel}
                                        </td>
                                        <td>
                                            <b>{carro.preco}</b>
                                            <p style={{ fontSize: "13px" }}>em {carro.referencia}</p>
                                        </td>
                                        <td><div style={{cursor: "pointer"}} onClick={(e) => props.fnDesFavoritar(e, carro)}><FaRegTrashAlt size={20} /></div></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                :
                <div class="row text-center carro-presentation-container" style={{ marginTop: "200px", marginBottom: "200px" }}>
                    <div class="carro-presentation-board">
                        VOCÊ AINDA NÃO TEM CARROS FAVORITOS
                    </div>
                </div>
            }
        </>



    )
}

export default CarrosFavoritosPresentation