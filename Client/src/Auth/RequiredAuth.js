import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function RequiredAuth({children}) {
  const token = cookies.get('token');
  console.log('from Required Auth children is : ',children);
  const Location = useLocation();
  return token ? children : <Navigate to="/user/login" replace state={{path: Location.pathname}}/> ;
}

export default RequiredAuth;