import React, { useState, useEffect } from "react";
import CarsServices from "../../services/CarsService"

const useCarro = (idMarca, idModelo, idAno) => {

    const [carro, setCarro] = useState([{}])

    const requestCarro = async () => {
        const result = await CarsServices.getCarro(idMarca, idModelo, idAno)
        setCarro(result.data)
    }

    useEffect(() => {
        requestCarro();
    }, [])

    return carro

}

export default useCarro