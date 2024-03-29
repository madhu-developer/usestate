import React,{useState} from 'react'
import useCustomhooks from '../useCustomhooks';

export const Day4Customhooks2 = () => {

    const [count,setCount] = useState(0);
    useCustomhooks(count);

  return (
    <div>
        <button onClick={()=> setCount(prevCount=>prevCount+1)}>Count - {count}</button>
    </div>
  )
}
