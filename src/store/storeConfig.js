import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    numeros: function (state, action) {
        console.log(state, ' ', action)
        return {
            min: 11,
            max: 31
        }
    },
    nomes: function (state, action) {
        return [
            'Ana',
            'Bia',
            'Carlos'
        ]
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig