import React, { useState } from 'react';
import ILogin from '../../../models/Business/Login/Entities/ILogin';
import LoginCM from '../controllerModel/LoginCM';
import LoginView from '../view/LoginView';
import Swal from 'sweetalert2';

interface LoginCVProps {
  handleLogin: (nombreUsuario: string, contrasena: string) => void;
}

const LoginCV: React.FC<LoginCVProps> = ({ handleLogin }) => {
  const [loginUsuarios, setLoginUsuarios] = useState<ILogin>({
    IdLogin: 0,
    NombreUsuario: '',
    Contrasena: '',
  });
  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setMostrarContrasena(!mostrarContrasena);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginUsuarios((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginCMInstance = new LoginCM();
    const usuariosEncontrados = await loginCMInstance.verificarUsuariosExisten(
      loginUsuarios.NombreUsuario,
      loginUsuarios.Contrasena
    );

    if (usuariosEncontrados.length > 0) {
      const usuarioValido = usuariosEncontrados[0];
      handleLogin(usuarioValido.NombreUsuario, usuarioValido.Contrasena);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Verifique la información',
        text: 'Los usuarios no fueron encontrados en la base de datos',
        confirmButtonText: 'Aceptar',
      });
    }
  };

  return (
    <LoginView
      loginUsuarios={loginUsuarios}
      setLoginUsuarios={setLoginUsuarios}
      mostrarContrasena={mostrarContrasena}
      handleTogglePasswordVisibility={handleTogglePasswordVisibility}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginCV;
