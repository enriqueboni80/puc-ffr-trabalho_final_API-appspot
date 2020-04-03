import React from "react"
import useMarcas from "../Marcas/useMarcas"
import useModelos from "../Modelos/useModelos"
import useAnosModelos from "./useAnosModelos"
import AnosModelosPresentation from "./AnosModelosPresentation"

const Index = (props) => {
    const idMarca = props.match.params.IdMarca
    const idModelo = props.match.params.IdModelo
    const marca = useMarcas(idMarca)
    const modelo = useModelos(idMarca, idModelo)
    const anosModelos = useAnosModelos(idMarca, idModelo)

    return (
        <AnosModelosPresentation anosModelos={anosModelos} idMarca={idMarca} idModelo={idModelo} marca={marca} modelo={modelo} />
    )
}

export default Index