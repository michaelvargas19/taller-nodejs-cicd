# 🚀 taller-nodejs-app

Proyecto base para el **Taller de Azure DevOps + GitHub Copilot**.

## Descripción

API REST construida con **Node.js + Express** que sirve como base para practicar:
- Control de versiones con **Azure Repos**
- Pipelines CI/CD con **Azure Pipelines**
- Generación de código con **GitHub Copilot**

## Endpoints disponibles

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/` | Mensaje de bienvenida |
| GET | `/salud` | Health check del servicio |
| GET | `/info` | Información del entorno |

## Instalación y ejecución local

```bash
# Clonar el repositorio
git clone <URL_DEL_REPO>
cd taller-nodejs-app

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Ejecutar en modo producción
npm start
```

## Pruebas

```bash
npm test
```

## Pipeline CI/CD

Este proyecto incluye `azure-pipelines.yml` con 3 stages:
1. **Build** — Instala dependencias
2. **Test** — Ejecuta pruebas unitarias
3. **Deploy** — Simula el despliegue *(solo en rama main)*