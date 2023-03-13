import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { increment,decrement,reset } from '../../../../redux'

function CounterContainer() {

    const counter = useSelector(state => state.counterR.counter);
    const dispatch = useDispatch();
    return (
        <>
        <h2>Contador</h2>
            <button name='add' onClick={()=>dispatch(increment())} >+</button>
            <button name='sub' onClick={()=>dispatch(decrement())} >-</button>
            <button name='reset' onClick={()=>dispatch(reset())} >reset</button>
            <h3>The value is: {counter}</h3>
        </>
    );
}

export default CounterContainer