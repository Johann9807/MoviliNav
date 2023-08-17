import React from 'react';
import Swal from 'sweetalert2';
import LoginCV from '../modules/AdministracionLogin/controllerView/LoginCV';

const LoginContainer = ({ handleSuccessfulLogin }: { handleSuccessfulLogin: (data: any) => void }) => {
  const handleLogin = async (nombreUsuario: string, contrasena: string) => {
    try {
      const response = await fetch(`http://localhost:3001/UsuariosModel?nombreUsuario=${nombreUsuario}&contrasena=${contrasena}`);
      const data = await response.json();

      
      if (data.length > 0) {
        handleSuccessfulLogin(data[0]);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Credenciales incorrectas',
          text: 'Las credenciales ingresadas no son válidas. Por favor, inténtalo nuevamente.'
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return <LoginCV handleLogin={handleLogin} />;
};

export default LoginContainer;
