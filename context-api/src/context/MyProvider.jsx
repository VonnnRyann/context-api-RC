import {useState} from 'react'
import MyContext from './MyContext';

const MyProvider = ({children}) => {
    const [count,setCount] = useState(0)
    console.log(MyContext);

    const handleSubmit = (e) => {
      console.log('wow');
    }

    const handleAdd = () => {
      setCount((prevCount) => prevCount + 1)
    };
    const handleMinus = () => {
      setCount((prevCount) => prevCount - 1)
    };

  return (
    <MyContext.Provider value={{count,handleAdd,handleMinus, handleSubmit}}>
      {children}
    </MyContext.Provider>
  )
}

export default MyProvider;