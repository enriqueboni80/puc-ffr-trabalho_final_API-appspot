import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'


const Index = () => {

    const carrosFavoritos = useSelector(state => state.carrosFavoritos)

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                {/* <a class="navbar-brand" href="#"><img title="Tabela Fipe" alt="Tabela Fipe" src="https://tabelafipecarros.com.br/dist/images/logo.png" /></a> */}
                <Link class="navbar-brand" to="/" style={{ color: "red" }}>PUC-FIPE</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/carrosfavoritos">Carros favoritos ({carrosFavoritos.length})</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Index