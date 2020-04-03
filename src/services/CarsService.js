import axios from "axios";

class CarsService {

  //Manual da API - https://deividfortuna.github.io/fipe/

  static _withBaseUrl(path = "/marcas") {
    return `https://parallelum.com.br/fipe/api/v1/carros/${path}`;
  }

  /* static getMarcas() {
    return axios(CarsService._withBaseUrl("marcas"));
  } */

  static getMarcas() {
    return axios('http://fipeapi.appspot.com/api/1/carros/marcas.json');
  }

  /* static getModelos(idMarca){
    return axios(CarsService._withBaseUrl(`marcas/${idMarca}/modelos`));
  } */

  static getModelos(idMarca){
    return axios(`http://fipeapi.appspot.com/api/1/carros/veiculos/${idMarca}.json`);
  }

  /* static getAnos(idMarca, idModelo){
    return axios(CarsService._withBaseUrl(`marcas/${idMarca}/modelos/${idModelo}/anos`));
  } */

  static getAnos(idMarca, idModelo){
    return axios(`http://fipeapi.appspot.com/api/1/carros/veiculo/${idMarca}/${idModelo}.json`);
  }

  static getCarro(idMarca, idModelo, idAno) {
    return axios(CarsService._withBaseUrl(`marcas/${idMarca}/modelos/${idModelo}/anos/${idAno}`));
  }

  static getCarro(idMarca, idModelo, idAno) {
    return axios(`http://fipeapi.appspot.com/api/1/carros/veiculo/${idMarca}/${idModelo}/${idAno}.json`);
  }

}

export default CarsService
