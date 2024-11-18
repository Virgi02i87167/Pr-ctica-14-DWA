import React, { useState } from 'react';

function App() {
  // Estado para almacenar el nombre ingresado por el usuario
  const [nombre, setNombre] = useState("");

  // Estado para almacenar el mensaje de bienvenida
  const [mensaje, setMensaje] = useState("¡Hola, bienvenidos!");

  // Función para manejar el cambio en el input de texto
  const manejarCambio = (e) => {
    setNombre(e.target.value); // Actualiza el estado 'nombre' con el valor ingresado
  };

  // Función para obtener un saludo basado en la hora del día
  const obtenerSaludo = () => {
    const hora = new Date().getHours();
    if (hora < 12) return "¡Buenos días";
    else if (hora < 18) return "¡Buenas tardes";
    else return "¡Buenas noches";
  };

  // Función para actualizar el mensaje de bienvenida
  const actualizarMensaje = () => {
    const saludo = obtenerSaludo();
    setMensaje(`${saludo}, ${nombre}!`); // Actualiza el mensaje con el saludo y nombre del usuario
  };

  return (
    // Contenedor principal con estilo centrado
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {/* Muestra el mensaje de bienvenida */}
      <h1>{mensaje}</h1>
      
      {/* Campo de entrada de texto para el nombre del usuario */}
      <input
        type="text"
        placeholder="Ingresa tu nombre"
        value={nombre}
        onChange={manejarCambio}
        style={{ padding: '8px', fontSize: '16px' }}
      />
      
      {/* Botón para actualizar el mensaje de bienvenida */}
      <button 
        onClick={actualizarMensaje} 
        style={{ marginLeft: '10px', padding: '8px', fontSize: '16px' }}
      >
        Saludar
      </button>
      
      {/* Muestra un mensaje de despedida si el usuario no ha ingresado su nombre */}
      {nombre === "" && <p style={{ fontStyle: 'italic' }}>¡Esperamos que tengas un gran día!</p>}
    </div>
  );
}

export default App;
