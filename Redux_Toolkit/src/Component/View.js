import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../Redux/counterSlice'

const View = () => {
    const counter = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Count: {counter}</h1>
            <button onClick={() => { dispatch(increment()) }}>Increase</button>
            <button onClick={() => { dispatch(decrement()) }}>Decrese</button>
            <button onClick={() => { dispatch(reset()) }}>Reset</button>
        </div>
    )
}

export default View
