import { useDispatch, useSelector } from 'react-redux';
import {setLogin, setLogout} from '../reducers/userSlice';
import { RootState } form '../reducers/store/store'

const Login () =>{
  const dispatch = useDispatch();
  const handleLogin = () =>{
    dispatch(setLogin({name:'test01',status:'user'}));
  }

  const handleLogout = () =>{
    dispatch(setLogout());
  }

  const user = useSelector((state:RootState) => state.user)

  reture(
    <>
      <button onClick = {handleLogin}> login</button>
      <button onClick = {handleLogout}> logout</button>
      Login User : {state.name}
    </>
  )
  
}
