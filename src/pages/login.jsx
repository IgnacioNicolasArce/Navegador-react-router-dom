// /pages/Login.jsx
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  // Definir el estado para los campos del formulario
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');

  // Manejar el cambio en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'usuario') {
      setUsuario(value);
    } else if (name === 'contraseña') {
      setContraseña(value);
    }
    setError(''); // Limpiar el error cuando el usuario escribe
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!usuario || !contraseña) {
      setError('Por favor, complete todos los campos');
      return;
    }
    // Aquí puedes agregar la lógica para autenticar al usuario
    console.log('Iniciando sesión...', { usuario, contraseña });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>
        <div className="form-group">
          <label htmlFor="usuario">Usuario</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            value={usuario}
            onChange={handleInputChange}
            placeholder="Ingrese su usuario"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contraseña">Contraseña</label>
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            value={contraseña}
            onChange={handleInputChange}
            placeholder="Ingrese su contraseña"
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="login-button">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;

