import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext';

const NavBar = () => {

  const {user, login, logout} = useContext(UserContext); // El argumento que recibe es el contexto que creamos llamado UserContext.
  // data se refiere a los datos que se envian en el value en App.jsx que básicamente es un objeto, por tanto necesitamos etraer el usuario de ese objeto
 
  console.log('NavBar');

  return (
    <nav className='navbar navbar-dark bg-dark mb-4'>
      <div className='container'>
         <span className='navbar-brand'>
            <h2>{user ? `Hola ${user.name}` : 'Bienvenid@' }</h2>
          </span>
          { user 
            ? <button className='btn btn-primary' onClick={logout}>
                Cerrar Sesión
              </button>
            : <button className='btn btn-primary' onClick={login}>
                Iniciar Sesión
              </button>
          }
      </div>
    </nav>
  )
}

export default NavBar

