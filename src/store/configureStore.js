import { createStore, combineReducers } from 'redux'

import formReducer from '../reducers/form'

const configureStore = () => {
    const store = createStore(
        combineReducers({
            form: formReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}

export default configureStore