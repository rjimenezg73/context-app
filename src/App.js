import React from 'react';
import NavBar from './components/NavBar.jsx';
import MovieList from './components/MovieList.jsx';
import { UserProvider } from './contexts/UserContext.js';


function App() {


  return (
    <div>
      {/*Este Context va a tener dos promiedades que usaremos: un provaider y un consumer. Cuando trabajamos con Hooks nos interesa principalmente el provider 

      Este contexto lo consumiremos desde la App, ya que nos interesa envolver los componentes a los que se les quiere transmitir la informacion */}
      <UserProvider>
        <NavBar />
        <MovieList /> 
      </UserProvider>
    </div>
  );
}

export default App;
