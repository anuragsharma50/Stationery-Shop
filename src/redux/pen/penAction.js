import { BUY_PEN } from './penType'

export const buyPen = (number = 1) => {
    return {
        type: BUY_PEN,
        payload: number
    }   
}