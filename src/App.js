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
      <UserContext.Provider value={data}>
        <NavBar />
        <MovieList /> 
      </UserContext.Provider>
    </div>
  );
}

export default App;
