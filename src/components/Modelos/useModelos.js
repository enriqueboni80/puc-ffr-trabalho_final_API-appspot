import React, { useState, useEffect } from "react";
import CarsServices from "../../services/CarsService"

const useModelos = (idMarca, idModelo = null) => {

    const [modelos, setModelos] = useState([{}])

    const requestModelos = async () => {
        const result = await CarsServices.getModelos(idMarca)
        if (idModelo) {
            result.data.map((modelo) => {
                if (modelo.id == idModelo) {
                    setModelos(modelo)
                }
            })
        } else {
            setModelos(result.data)
        }
    }

    useEffect(() => {
        requestModelos();
    }, [])

    return modelos

}

export default useModelos