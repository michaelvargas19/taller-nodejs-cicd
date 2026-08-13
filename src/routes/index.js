const express = require('express');
const router = express.Router();

// GET / — Página de bienvenida
router.get('/', (req, res) => {
  res.json({
    mensaje: '¡Bienvenido al Taller de Azure DevOps!',
    version: '1.0.0',
    estado: 'activo',
    timestamp: new Date().toISOString()
  });
});

// GET /salud — Health check (usado en pipelines)
router.get('/salud', (req, res) => {
  res.json({
    estado: 'OK',
    servicio: 'taller-nodejs-app',
    uptime: process.uptime()
  });
});

// GET /info — Información del entorno
router.get('/info', (req, res) => {
  res.json({
    app: 'taller-nodejs-app',
    version: process.env.npm_package_version || '1.0.0',
    entorno: process.env.NODE_ENV || 'development',
    node: process.version
  });
});

module.exports = router;