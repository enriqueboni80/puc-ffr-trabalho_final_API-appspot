import { combineReducers } from 'redux'

import favorites from './favorites/reducer'
import marca from './marca/reducer'
import carrosFavoritos from './carrosFavoritos/reducer'

export default combineReducers ({
    favorites, 
    marca,
    carrosFavoritos,
})