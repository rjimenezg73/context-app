import { createContext } from 'react';

const UserContext = createContext(); // Así es como se usa en la documentacion 

// Este Context va a tener dos promiedades que usaremos: un provaider y un consumer. Cuando trabajamos con Hooks nos interesa principalmente el provider 

// Este contexto lo consumiremos desde la App, ya que nos interesa envolver los componentes a los que se les quiere transmitir la informacion

export default UserContext;