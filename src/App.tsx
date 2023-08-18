import React, { useState } from 'react';
import LoginCV from './modules/AdministracionLogin/controllerView/LoginCV';
import Swal from 'sweetalert2';


const App = () => {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState<string | null>(null);

  const handleLogin = (usuario: string) => {
    setUsuarioAutenticado(usuario);
  };

  return (
    <div>
      {!usuarioAutenticado && <LoginCV handleLogin={handleLogin} />}
    </div>
  );
};

export default App;
