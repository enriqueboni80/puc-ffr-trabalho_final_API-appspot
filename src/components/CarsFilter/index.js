import React, { useState, useEffect } from "react";
import CarsServices from "../../services/CarsService"
import { Link } from "react-router-dom"
import SelectField from "./selectField"
import Spinner from "../Utils/spinner"
import "./carsfilter.css"

const Index = () => {
  const [marcas, setMarcas] = useState([{}])
  const [idMarca, setIdMarca] = useState(1)
  const [modelos, setModelos] = useState([{}])
  const [idModelo, setIdModelo] = useState()
  const [anos, setAnos] = useState([{}])
  const [idAno, setIdAno] = useState()
  const [loading, setLoading] = useState(false)

  const requestMarcas = async () => {
    const result = await CarsServices.getMarcas()
    setMarcas(result.data)
    setLoading(true)
  }

  const requestModelos = async (idMarca) => {
    const result = await CarsServices.getModelos(idMarca)
    setModelos(result.data)
  }

  const requestAnos = async (idModelo) => {
    const result = await CarsServices.getAnos(idMarca, idModelo)
    setAnos(result.data)
  }

  useEffect(() => {
    requestMarcas();
    requestModelos();
    requestAnos();
  }, [])

  const getModelosDaMarca = (idMarca) => {
    setModelos([])
    setAnos([])
    setIdMarca(idMarca)
    requestModelos(idMarca)
  }

  const getAnosDosModelos = (idModelo) => {
    setAnos([])
    setIdModelo(idModelo)
    requestAnos(idModelo)
  }

  const getAno = (idAno) => {
    setIdAno(idAno)
  }

  return (
    <>
      {!loading ? <Spinner />
        :
        <div class="text-center carsfilter-container">
          <form>
            <header>Selecione o Modelo</header>
            <SelectField funcao={(e) => getModelosDaMarca(e.target.value)} array={marcas} />
            <SelectField funcao={(e) => getAnosDosModelos(e.target.value)} array={modelos} />
            <SelectField funcao={(e) => getAno(e.target.value)} array={anos} />
            <Link to={`/marcas/${idMarca}/modelos/${idModelo}/anos/${idAno}`} class="btn btn-primary col-md-12" >Procurar</Link>
          </form>
        </div>
      }
    </>
  )
};

export default Index
