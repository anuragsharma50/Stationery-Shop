import React,{useState} from 'react'
import { connect } from 'react-redux'
import { GiWhiteBook } from "react-icons/gi";
import { TiPen,TiPencil } from "react-icons/ti";

import { buyPen,buyPencil,buyNotebook } from '../../redux/index'
import './item.css'

function Item(props) {

    const [number, setNumber] = useState(1)

    if(props.name === 'pen'){
        return (
        <div className={props.name}>
            
            <TiPen size="20em" />
            <h2>Total {props.name}s - {props.item}</h2>
            <label>Enter number of {props.name}s to buy :- </label>
            <div>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            </div>
            <button onClick={() => props.buyItem(number)}>Buy {number} {props.name}</button>
        </div>
        )
    }
    else if(props.name === 'notebook'){ 
        return (
            <div className={props.name}>
                
                <GiWhiteBook size="20em" />
                <h2>Total {props.name}s - {props.item}</h2>
                <label>Enter number of {props.name}s to buy :- </label>
                <div>
                <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
                </div>
                <button onClick={() => props.buyItem(number)}>Buy {number} {props.name}</button>
            </div>
        )
    }
    else{
        return (
            <div className={props.name}>
                
                <TiPencil size="20em" />
                <h2>Total {props.name}s - {props.item}</h2>
                <label>Enter number of {props.name}s to buy :- </label>
                <div>
                <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
                </div>
                <button onClick={() => props.buyItem(number)}>Buy {number} {props.name}</button>
            </div>
        )
    }

    // return (
    //     <div className={props.name}>
            
            
    //         <h2>Total {props.name}s - {props.item}</h2>
    //         <label>Enter number of {props.name}s to buy :- </label>
    //         <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
    //         <button onClick={() => props.buyItem(number)}>Buy {number} {props.name}</button>
    //     </div>
    // )
}

const mapStateToProps = (state,ownProps) => {
    const itemState = ownProps.pen 
    ? state.pen.numOfPens
    : ownProps.pencil ? state.pencil.numOfPencils : state.notebook.numOfNotebooks
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {

    const dispatchAction = ownProps.pen 
    ? number => dispatch(buyPen(number))
    : ownProps.pencil 
    ? number => dispatch(buyPencil(number))
    : number => dispatch(buyNotebook(number))

    return {
        buyItem : dispatchAction
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Item)

