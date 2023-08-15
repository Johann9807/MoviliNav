// App.js
import React, { useState } from 'react';
import LoginContainer from './containers/LoginContainer';

const App = () => {
  const [usuarioActual, setUsuarioActual] = useState(String);

  const handleSuccessfulLogin = (usuario: string) => {
    setUsuarioActual(usuario);
  };

  return (
    <div>
      {usuarioActual ? (
        <div>
          {/* Mostrar la pantalla de administración */}
        </div>
      ) : (
        <LoginContainer handleSuccessfulLogin={handleSuccessfulLogin} />
      )}
    </div>
  );
};

export default App;
