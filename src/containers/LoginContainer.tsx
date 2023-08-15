
import React from 'react';
import UsuariosModel from '../models/UsuariosModel';
import Login from '../components/Login';

const LoginContainer = ({ handleSuccessfulLogin }: any ) => {
  const handleLogin = (nombreUsuario: string, contrasena: string) => {
    const usuarioEncontrado = UsuariosModel.find(user => user.nombreUsuario === nombreUsuario && user.contrasena === contrasena);
    if (usuarioEncontrado) {
      handleSuccessfulLogin(usuarioEncontrado);
    } else {
      alert('Credenciales incorrectas. Inténtalo nuevamente.');
    }
  };

  return <Login handleLogin={handleLogin} />;
};

export default LoginContainer;
