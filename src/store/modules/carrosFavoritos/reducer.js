const carrosFavoritos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CARROS_FAVORITOS':
            var ehRepetido = false
            for (const carro of state) {
                if (carro.Modelo === action.carro.Modelo
                    && carro.AnoModelo === action.carro.AnoModelo
                    && carro.Combustivel === action.carro.Combustivel) {
                    ehRepetido = true;
                }
            }
            if (!ehRepetido) {
                console.log(state)
                return [...state, action.carro]
            }
        case 'DEL_CARROS_FAVORITOS':
            return state.filter((carro) => !(carro.Modelo === action.carro.Modelo
                && carro.AnoModelo === action.carro.AnoModelo
                && carro.Combustivel === action.carro.Combustivel))
        default:
            return state
    }
}

export default carrosFavoritos