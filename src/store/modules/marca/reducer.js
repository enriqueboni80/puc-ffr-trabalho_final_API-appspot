const marca = (state = [], action) => {
    switch (action.type) {
        case 'GUARDA_MARCA':
            state = action.marca
            return state
        default:
            return state
    }
}

export default marca