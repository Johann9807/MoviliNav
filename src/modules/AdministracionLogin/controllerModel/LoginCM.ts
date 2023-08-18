import ILogin from "../../../models/Business/Login/Entities/ILogin";

class LoginCM {
  async verificarUsuariosExisten(nombreUsuario: string, contrasena: string): Promise<ILogin[]> {
    try {
      const response = await fetch(`http://localhost:3001/LoginUsuariosAutenticacion`);
      const data: ILogin[] = await response.json();

      const usuariosEncontrados: ILogin[] = data.filter(usuario => 
        usuario.NombreUsuario === nombreUsuario && usuario.Contrasena === contrasena
      );

      return usuariosEncontrados;
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  }
}

export default LoginCM;
