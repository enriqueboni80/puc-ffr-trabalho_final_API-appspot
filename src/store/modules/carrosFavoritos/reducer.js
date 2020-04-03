const carrosFavoritos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CARROS_FAVORITOS':
            var ehRepetido = false
            for (const carro of state) {
                if (carro.name === action.carro.name
                    && carro.ano_Modelo === action.carro.ano_modelo
                    && carro.combustivel === action.carro.combustivel) {
                    ehRepetido = true;
                }
            }
            if (!ehRepetido) {
                console.log(state)
                return [...state, action.carro]
            }
        case 'DEL_CARROS_FAVORITOS':
            return state.filter((carro) => !(carro.name === action.carro.name
                && carro.ano_modelo === action.carro.ano_modelo
                && carro.combustivel === action.carro.combustivel))
        default:
            return state
    }
}

export default carrosFavoritos