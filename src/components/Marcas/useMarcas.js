import { useState, useEffect } from "react";
import CarsServices from "../../services/CarsService"

const useMarcas = (idMarca = null) => {
    const [marcas, setMarcas] = useState([{}])
    const requestMarcas = async () => {
        const result = await CarsServices.getMarcas()
        var marcasComImagens = concatArrayImagens(result.data)
        if (idMarca) {
            marcasComImagens.map((marca) => {
                if (marca.id == idMarca) {
                    setMarcas(marca)
                }
            })
        }
        else {
            setMarcas(marcasComImagens)
        }
    }
    useEffect(() => {
        requestMarcas();
    }, [])

    return marcas

}

const concatArrayImagens = (arrayDeMarcas) => {
    const marcasImages = getMarcasImages()
    arrayDeMarcas.map((marca, index) => {
        marcasImages.forEach(imagens => {
            if (marca.id == imagens.codigo) {
                arrayDeMarcas[index] = { ...arrayDeMarcas[index], path_img: imagens.path_img }
            }
        });
    });
    return arrayDeMarcas
}

const getMarcasImages = () => {
    const urlLogos = "https://www.carlogos.org/logo"
    return [
        { codigo: "1", path_img: `${urlLogos}/Acura-logo.png` },
        { codigo: "2", path_img: `` },
        { codigo: "3", path_img: `${urlLogos}/Alfa-Romeo-logo.png` },
        { codigo: "4", path_img: `` },
        { codigo: "5", path_img: `` },
        { codigo: "6", path_img: `${urlLogos}/Audi-logo.png` },
        { codigo: "7", path_img: `${urlLogos}/BMW-logo.png` },
        { codigo: "8", path_img: `` },
        { codigo: "10", path_img: `${urlLogos}/Cadillac-logo.png` },
        { codigo: "11", path_img: `` },
        { codigo: "12", path_img: `${urlLogos}/Chrysler-logo.png` },
        { codigo: "13", path_img: `${urlLogos}/Citroen-logo.png` },
        { codigo: "14", path_img: `` },
        { codigo: "15", path_img: `${urlLogos}/Daewoo-logo.png` },
        { codigo: "16", path_img: `${urlLogos}/Daihatsu-logo.png` },
        { codigo: "17", path_img: `${urlLogos}/Dodge-logo.png` },
        { codigo: "18", path_img: `` },
        { codigo: "19", path_img: `` },
        { codigo: "20", path_img: `${urlLogos}/Ferrari-logo.png` },
        { codigo: "21", path_img: `${urlLogos}/Fiat-logo.png` },
        { codigo: "22", path_img: `${urlLogos}/Ford-logo.png` },
        { codigo: "23", path_img: `${urlLogos}/General-Motors-logo.png` },
        { codigo: "24", path_img: `` },
        { codigo: "25", path_img: `${urlLogos}/Honda-logo.png` },
        { codigo: "26", path_img: `${urlLogos}/Hyundai-logo.png` },
        { codigo: "28", path_img: `${urlLogos}/Jaguar-logo.png` },
        { codigo: "29", path_img: `${urlLogos}/Jeep-logo.png` },
        { codigo: "31", path_img: `${urlLogos}/Kia-logo.png` },
        { codigo: "32", path_img: `${urlLogos}/General-Motors-logo.png` },
        { codigo: "33", path_img: `${urlLogos}/Land-Rover-logo.png` },
        { codigo: "34", path_img: `${urlLogos}/Lexus-logo.png` },
        { codigo: "35", path_img: `${urlLogos}/Lotus-logo.png` },
        { codigo: "36", path_img: `${urlLogos}/Maserati-logo.png` },
        { codigo: "37", path_img: `` },
        { codigo: "38", path_img: `${urlLogos}/Mazda-logo.png` },
        { codigo: "39", path_img: `${urlLogos}/Mercedes-Benz-logo.png` },
        { codigo: "41", path_img: `` },
        { codigo: "42", path_img: `` },
        { codigo: "43", path_img: `${urlLogos}/Nissan-logo.png` },
        { codigo: "44", path_img: `${urlLogos}/Peugeot-logo.png` },
        { codigo: "46", path_img: `${urlLogos}/Pontiac-logo.png` },
        { codigo: "47", path_img: `${urlLogos}/Porsche-logo.png` },
        { codigo: "48", path_img: `${urlLogos}/Renault-logo.png` },
        { codigo: "49", path_img: `` },
        { codigo: "50", path_img: `` },
        { codigo: "52", path_img: `` },
        { codigo: "54", path_img: `${urlLogos}/Subaru-logo.png` },
        { codigo: "55", path_img: `${urlLogos}/Suzuki-logo.png` },
        { codigo: "56", path_img: `${urlLogos}/Toyota-logo.png` },
        { codigo: "57", path_img: `${urlLogos}/Troller-logo.png` },
        { codigo: "58", path_img: `${urlLogos}/Volvo-logo.png` },
        { codigo: "59", path_img: `${urlLogos}/Volkswagen-logo.png` },
        { codigo: "123", path_img: `` },
        { codigo: "136", path_img: `` },
        { codigo: "147", path_img: `` },
        { codigo: "149", path_img: `` },
        { codigo: "152", path_img: `` },
        { codigo: "153", path_img: `` },
        { codigo: "156", path_img: `${urlLogos}/Mini-logo.png` },
        { codigo: "161", path_img: `${urlLogos}/Chery-logo.png` },
        { codigo: "165", path_img: `` },
        { codigo: "170", path_img: `` },
        { codigo: "171", path_img: `${urlLogos}/Lamborghini-logo.png` },
        { codigo: "182", path_img: `` },
        { codigo: "189", path_img: `${urlLogos}/Aston-Martin-logo.png` },
        { codigo: "190", path_img: `` },
        { codigo: "195", path_img: `${urlLogos}/Rolls-Royce-logo.png` },
        { codigo: "199", path_img: `` },
        { codigo: "207", path_img: `` },
        { codigo: "211", path_img: `${urlLogos}/McLaren-logo.png` },
        { codigo: "214", path_img: `` },
    ]
}

export default useMarcas