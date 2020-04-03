import axios from "axios";

class CarsService {

  //Manual da API - https://deividfortuna.github.io/fipe/

  static _withBaseUrl(path = "/marcas") {
    return `https://fipeapi.appspot.com/api/1/carros/${path}.json`;
  }

  static getMarcas() {
    return axios(CarsService._withBaseUrl("marcas"));
  }

  static getModelos(idMarca) {
    return axios(CarsService._withBaseUrl(`veiculos/${idMarca}`));
  }

  static getAnos(idMarca, idModelo) {
    return axios(CarsService._withBaseUrl(`veiculo/${idMarca}/${idModelo}`));
  }
  
  static getCarro(idMarca, idModelo, idAno) {
    return axios(CarsService._withBaseUrl(`veiculo/${idMarca}/${idModelo}/${idAno}}`));
  }

}

export default CarsService
