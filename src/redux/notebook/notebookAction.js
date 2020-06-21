import { BUY_NOTEBOOK } from './notebookTypes'

export const buyNotebook = (number = 1) => {
    return {
        type: BUY_NOTEBOOK,
        payload: number
    }   
}