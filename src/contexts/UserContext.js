import React, { createContext, useState } from 'react';

const UserContext = createContext(); // Así es como se usa en la documentacion 

// Este Context va a tener dos promiedades que usaremos: un provaider y un consumer. Cuando trabajamos con Hooks nos interesa principalmente el provider 

// Este contexto lo consumiremos desde la App, ya que nos interesa envolver los componentes a los que se les quiere transmitir la informacion

const initialUser = {
  id: 1,
  name: "Roberto",
  favoriteMovies: [ 2, 4]
}


const UserProvider = ({children}) => {

  const [user, setUser] = useState(initialUser);

  const login = () => {
    setUser(initialUser);
  }

  const logout = () => {
    setUser(null)
  }

  const data = {user, login, logout}

  return(
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )
}


export {UserProvider};
export default UserContext;