import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviliNavLogo from '../assets/images/MoviliNav_Log_Usuario.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons';
import './Login.css';

const Login = ({ handleLogin }: any) => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setMostrarContrasena(!mostrarContrasena);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin(nombreUsuario, contrasena);
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center login-container">
      <div className="card p-4">
        <div className="text-center mb-4">
          <img
            src={MoviliNavLogo}
            alt="Logo"
            style={{ maxWidth: '600px', maxHeight: '350px' }}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombreUsuario" className="form-label">
              Nombre de Usuario:
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control custom-input"
                id="nombreUsuario"
                value={nombreUsuario}
                onChange={(e) => setNombreUsuario(e.target.value)}
              />
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="contrasena" className="form-label">
              <FontAwesomeIcon icon={faEye} /> Contraseña:
            </label>
            <div className="input-group">
              <input
                type={mostrarContrasena ? 'text' : 'password'}
                className="form-control"
                id="contrasena"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-outline-secondary custom-btn"
                onClick={handleTogglePasswordVisibility}
              >
                {mostrarContrasena ? (
                  <FontAwesomeIcon icon={faEyeSlash} />
                ) : (
                  <FontAwesomeIcon icon={faEye} />
                )}
              </button>
            </div>
          </div>
          <div className="text-center mt-3">
            <button type="submit" className="btn btn-dark">
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default Login;
