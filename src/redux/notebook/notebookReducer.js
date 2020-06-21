import { BUY_NOTEBOOK } from './notebookTypes'

const initialNotebookState = {
    numOfNotebooks: 10
}

const notebookReducer = (state=initialNotebookState,action) => {
    switch(action.type){
        case BUY_NOTEBOOK : return {
            ...state,
            numOfNotebooks: state.numOfNotebooks - action.payload
        }

        default : return state
    }
}

export default notebookReducer