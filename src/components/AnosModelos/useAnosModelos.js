import React, { useState, useEffect } from "react";
import CarsServices from "../../services/CarsService"

const useAnosModelos = (idMarca, idModelo) => {

    const [anosModelos, setAnosModelos] = useState([{}])

    const requestAnosModelos = async () => {
        const result = await CarsServices.getAnos(idMarca, idModelo)
        setAnosModelos(result.data)
    }

    useEffect(() => {
        requestAnosModelos();
    }, [])

    return anosModelos

}

export default useAnosModelos