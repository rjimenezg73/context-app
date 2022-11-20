import React from 'react';
import NavBar from './components/NavBar.jsx';
import MovieList from './components/MovieList.jsx';
import UserContext from './contexts/UserContext.js';

function App() {

  const user = {
    id: 1,
    name: 'Pedrito',
    favoriteMovies: [1, 2, 3]
  }

  const data = { user }

  return (
    <div>
      {/*Este Context va a tener dos promiedades que usaremos: un provaider y un consumer. Cuando trabajamos con Hooks nos interesa principalmente el provider 

      Este contexto lo consumiremos desde la App, ya que nos interesa envolver los componentes a los que se les quiere transmitir la informacion */}
      <UserContext.Provider value={data}>
        <NavBar />
        <MovieList /> 
      </UserContext.Provider>
    </div>
  );
}

export default App;
