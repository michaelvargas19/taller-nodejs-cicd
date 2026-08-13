const request = require('supertest');
const app = require('../src/app');

// Instalar supertest: npm install --save-dev supertest

describe('API taller-nodejs-app', () => {

  // Prueba 1: Ruta raíz
  test('GET / debe retornar mensaje de bienvenida', async () => {
    const respuesta = await request(app).get('/');
    expect(respuesta.statusCode).toBe(200);
    expect(respuesta.body.mensaje).toBe('¡Bienvenido al Taller de Azure DevOps!');
    expect(respuesta.body.estado).toBe('activo');
  });

  // Prueba 2: Health check
  test('GET /salud debe retornar estado OK', async () => {
    const respuesta = await request(app).get('/salud');
    expect(respuesta.statusCode).toBe(200);
    expect(respuesta.body.estado).toBe('OK');
    expect(respuesta.body.servicio).toBe('taller-nodejs-app');
  });

  // Prueba 3: Información del entorno
  test('GET /info debe retornar información de la aplicación', async () => {
    const respuesta = await request(app).get('/info');
    expect(respuesta.statusCode).toBe(200);
    expect(respuesta.body.app).toBe('taller-nodejs-app');
    expect(respuesta.body.node).toBeDefined();
  });

  // Prueba 4: Ruta inexistente
  test('GET /ruta-inexistente debe retornar 404', async () => {
    const respuesta = await request(app).get('/ruta-inexistente');
    expect(respuesta.statusCode).toBe(404);
  });

});