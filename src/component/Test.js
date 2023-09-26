
import { useDispatch, useSelector } from 'react-redux';
import { addOne, minusOne } from '../Slice/counterSlice';
//import { useState } from 'react';

const Test = () => {
   //const [count, setcount] = useState(0);
   const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();

  return (

    <div>
        <button onClick={()=>dispatch(addOne())}>+</button>
        <span>{count}</span>
        <button onClick={()=>dispatch(minusOne())}>-</button>
      
    </div>
  )
}

export default Test;
