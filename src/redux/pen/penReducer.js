import { BUY_PEN } from './penType'

const initialPenState = {
    numOfPens: 50
}

const penReducer = (state=initialPenState,action) => {
    switch(action.type){
        case BUY_PEN : return {
            ...state,
            numOfPens: state.numOfPens - action.payload
        }

        default : return state
    }
}

export default penReducer