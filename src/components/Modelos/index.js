import React, { useState, useEffect } from "react"
import useModelos from "./useModelos"
import useMarcas from "../Marcas/useMarcas"
import ModelosPresentation from "./ModelosPresentation"

const Index = (props) => {
    const idMarca = props.match.params.IdMarca
    const marca = useMarcas(idMarca)
    const [loading, setLoading] = useState(false)

    const verificaSeCarregouArray = () => {
        if (!Array.isArray(marca)) {
            setLoading(true)
        }
    }

    useEffect(() => {
        verificaSeCarregouArray();
    }, [verificaSeCarregouArray])

    const modelos = useModelos(idMarca)
    console.log(modelos)

    return (
        <ModelosPresentation modelos={modelos} idMarca={idMarca} marca={marca} loading={loading} />
    )
}

export default Index