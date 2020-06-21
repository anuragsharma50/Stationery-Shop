import { combineReducers } from 'redux'

import penReducer from './pen/penReducer'
import pencilReducer from './pencil/pencilReducer'
import notebookReducer from './notebook/notebookReducer'

const rootReducer = combineReducers({
    pen: penReducer,
    pencil: pencilReducer,
    notebook: notebookReducer
})

export default rootReducer