import React from 'react'
import { Provider } from 'react-redux'
import store from '../../redux/store'

import Item from '../Item/Item'

import './Container.css'

const Container = () => {
    return (
        <div className='container'>
            <Provider store={store}>
           <Item name={'pen'}  pen /> 
           <Item name={'pencil'} pencil  />
           <Item name={'notebook'} notebook /> 
           </Provider>
        </div>
    )
}

export default Container
