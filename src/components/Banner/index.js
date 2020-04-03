import React from "react"
import { Link } from "react-router-dom"

const Index = () => {
    let imgUrl = 'http://www.annualreports.com/HostedData/CompanyHeader/NYSE_RACE.jpg';
    return (
        <header class="jumbotron my-4"
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }}>
            <h1 class="display-3"
                style={{
                    color: "yellow",
                    fontWeight: "bold"
                }}>
                Quanto R$ seu carro?</h1>
            <p class="lead"
                style={{
                    color: "white"
                }}>
                Através da tabela FIPE você consegue saber o valor de mercado do seu carro!</p>
                <Link class="btn btn-primary btn-lg" to="/filtro">Tabela FIPE Completa</Link>
        </header>
    )
}

export default Index