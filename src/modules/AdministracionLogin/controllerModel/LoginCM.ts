import ILogin from "../../../models/Business/Login/Entities/ILogin";

class LoginCM {
  async verificarUsuariosExisten(usuarios: ILogin[]) {
    try {
      const nombresUsuarios = usuarios.map(usuario => usuario.NombreUsuario).join(',');
      const response = await fetch(`http://localhost:3001/LoginUsuariosAutenticacion?NombreUsuario=${nombresUsuarios}`);
      const data = await response.json();
      return data as ILogin[];
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  }
}

export default LoginCM;
