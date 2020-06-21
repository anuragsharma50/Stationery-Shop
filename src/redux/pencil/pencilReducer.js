import { BUY_PENCIL } from './pencilTypes'

const initialPencilState = {
    numOfPencils: 20
}

const pencilReducer = (state=initialPencilState,action) => {
    switch(action.type){
        case BUY_PENCIL : return {
            ...state,
            numOfPencils: state.numOfPencils - action.payload
        }

        default : return state
    }
}

export default pencilReducer