import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviliNavLogo from '../../../assets/images/MoviliNav_Log_Usuario.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons';
import '../../../modules/AdministracionLogin/view/LoginView.css';
import ILogin from '../../../models/Business/Login/Entities/ILogin';

interface LoginViewProps {
  loginUsuarios: ILogin;
  setLoginUsuarios: React.Dispatch<React.SetStateAction<ILogin>>;
  mostrarContrasena: boolean;
  handleTogglePasswordVisibility: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginView: React.FC<LoginViewProps> = ({
  loginUsuarios,
  setLoginUsuarios,
  mostrarContrasena,
  handleTogglePasswordVisibility,
  handleSubmit,
  handleInputChange
}: LoginViewProps) => {

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
                name="NombreUsuario"
                value={loginUsuarios.NombreUsuario}
                onChange={(e) => {
                  console.log('NombreUsuario:', e.target.value);
                  handleInputChange(e);
                  setLoginUsuarios({ ...loginUsuarios, NombreUsuario: e.target.value });
                }}
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
                name="Contrasena"
                value={loginUsuarios.Contrasena}
                onChange={(e) => {
                  console.log('Contrasena:', e.target.value);
                  handleInputChange(e);
                  setLoginUsuarios({ ...loginUsuarios, Contrasena: e.target.value });
                }}
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

export default LoginView;
