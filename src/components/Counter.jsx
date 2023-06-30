import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter } from '../state/actions/counter';

export default function Counter(){
    const counter = useSelector((state)=> state.counter);
    const dispatch = useDispatch()
    const incCounter =()=>{
        dispatch(incrementCounter())
    }
    const decCounter =()=>{
        dispatch(decrementCounter())
    }
    return(
        <div className='conatiner'>
            <p data-testid="counter" className='text-center'>{counter}</p>
            <button data-testid="button-up" className='text-center btn bg-[red] p-4 m-4' onClick={incCounter}>Inc</button>
            <button data-testid="button-down" className='text-center btn bg-[red] p-4 m-4' onClick={decCounter}>Dec</button>
        </div>
    )
}