import { BUY_PENCIL } from './pencilTypes'

export const buyPencil = (number = 1) => {
    return {
        type: BUY_PENCIL,
        payload: number
    }   
}