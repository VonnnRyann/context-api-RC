import {useContext} from 'react'
import MyContext from '../context/MyContext'

const Counter = () => {
    const {handleAdd, handleMinus} = useContext(MyContext);
  return (
    <div>
        <button onClick={handleAdd}>Increment</button>
        <button onClick={handleMinus}>Decrement</button>
    </div>
  )
}

export default Counter