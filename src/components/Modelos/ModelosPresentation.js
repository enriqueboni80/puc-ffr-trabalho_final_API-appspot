import React from "react"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import Spinner from "../Utils/spinner"

const ModelosPresentation = (props) => {
    var idMarca = props.idMarca
    var modelos = props.modelos
    var marca = props.marca
    var loading = props.loading
    /* const marca = useSelector(state => state.marca) */

    console.log(marca)

    return (
        <>
            {/* {!loading ? <Spinner />
                : */}
                <div class="row text-center" style={{ marginTop: "25px" }}>
                    <div class="row slug-header">
                        <div class="col-lg-2 col-sm-4 logo"><img src={marca.path_img} /></div>
                        <div class="col-lg-8 com-sm-8 title">{marca.name}</div>
                    </div>
                    <table class="table table-striped table-bordered table-hover" style={{ border: "1px solid black" }}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Modelos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {modelos.map((modelo, key) => {
                                let toUrl = `/marcas/${idMarca}/modelos/${modelo.id}/anos`
                                return (
                                    <tr style={{ cursor: "pointer" }} onClick={() => window.location.href = toUrl}>
                                        <td>{key + 1}</td>
                                        <td><Link to={toUrl}>{modelo.name}</Link></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            {/* } */}
        </>

    )
}

export default ModelosPresentation