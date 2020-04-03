import React from "react"
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import Banner from "../../components/Banner"
import Spinner from "../Utils/spinner"

const MarcasPresentation = (props) => {

    var loading = props.loading
    var marcas = props.marcas

    const dispatch = useDispatch();
    const guardarStatus = (marca) => {
        dispatch({
            type: 'GUARDA_MARCA',
            marca
        })
    }

    return (
        <>
            <Banner />
            {!loading ? <Spinner /> : ""}
            <div class="row text-center">
                {marcas.map((marca) => {
                    if (marca.path_img) {
                        return (
                            <div class="col-lg-3 col-md-6 mb-4">
                                <Link to={`/marcas/${marca.id}/modelos`} onClick={(e) => guardarStatus(marca)}>
                                    <div class="card h-100">
                                        <img class="card-img-top" src={marca.path_img} alt="" />
                                        <div class="card-body">
                                            <p class="card-text">{marca.nome}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>
        </>
    )
}

export default MarcasPresentation

