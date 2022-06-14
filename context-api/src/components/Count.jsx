import {useContext} from 'react'
import MyContext from '../context/MyContext'

const Count = () => {
    const {count} = useContext(MyContext)
        

  return (
    <div><h1>{count}</h1></div>
  )
}

export default Count