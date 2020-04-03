import React, { useState, useEffect } from "react";
import useMarcas from "./useMarcas"
import MarcasPresentation from "./MarcasPresentation"

const Index = () => {
    const marcas = useMarcas()
    const [loading, setLoading] = useState(false)

    const verificaSeCarregouArray = () => {
        if (marcas.length > 1) {
            setLoading(true)
        }
    }

    useEffect(() => {
        verificaSeCarregouArray();
    }, [verificaSeCarregouArray])

    return (
        <MarcasPresentation marcas={marcas} loading={loading} />
    )
}

export default Index
