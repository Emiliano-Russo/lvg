import sequelize from '../aws/db';
import { uploadFile } from '../aws/s3';

class Core {
  constructor() {
    // Inicializa cualquier estado o configuración
    console.log('App initialized');
  }

  run() {
    // Aquí manejas las órdenes principales
    console.log('Running main method...');
    sequelize;
    // Llamadas a otros métodos o módulos
  }
}

// Crear una instancia de la clase y ejecutar el método principal
const core = new Core();
export default core;
