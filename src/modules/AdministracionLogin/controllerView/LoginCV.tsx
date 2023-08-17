import React, { useState } from 'react';
import LoginView from '../view/LoginView';
import ILogin from '../../../models/Business/Login/Entities/ILogin';
import LoginCM from '../controllerModel/LoginCM';

const LoginCV = ({ handleLogin }: any) => {
  const [loginUsuarios, setLoginUsuarios] = useState<ILogin>({
    IdLogin: 0,
    NombreUsuario: '',
    Contrasena: '',
  });
  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setMostrarContrasena(!mostrarContrasena);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin(loginUsuarios);
  };

  const LoginUsuariosAutenticacion = async () => {
    // Crear una instancia de LoginCM
    const loginCMInstance = new LoginCM();

    // Llamar al método verificarUsuariosExisten y manejar los resultados
    const usuariosAVerificar = [loginUsuarios]; // Puedes ajustar esto según tus necesidades
    const resultados = await loginCMInstance.verificarUsuariosExisten(usuariosAVerificar);

    console.log('Resultados de verificación de usuarios:', resultados);
    
    // Establecer el estado loginUsuarios con los resultados obtenidos
    setLoginUsuarios(resultados[0] || { IdLogin: 0, NombreUsuario: '', Contrasena: '' });
  };

  return (
    <LoginView
      loginUsuarios={loginUsuarios}
      setLoginUsuarios={setLoginUsuarios}
      mostrarContrasena={mostrarContrasena}
      handleTogglePasswordVisibility={handleTogglePasswordVisibility}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginCV;
