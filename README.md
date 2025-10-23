# Dicaria Agents — Proyecto

Pequeñas instrucciones para desarrollar y desplegar este proyecto (Next.js) en GitHub y Vercel.

## Requisitos
- Node.js (recomendado LTS, compatible con Next 14)
- npm
- Cuenta en GitHub
- Cuenta en Vercel (puedes iniciar sesión con GitHub)

## Scripts útiles (package.json)
- `npm run dev` — ejecutar en modo desarrollo
- `npm run build` — crear build de producción
- `npm start` — servir la build (requiere `next start`)

## Comandos PowerShell para preparar el repo y subir a GitHub
Reemplaza `TU_USUARIO` por tu usuario de GitHub y `dicaria-agents` por el nombre que desees.

```powershell
# Inicializar repo (si aún no existe)
git init
git add .
git commit -m "Primer commit - DICARIA Agents"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/dicaria-agents.git
git push -u origin main
```

Si ya tienes el remote configurado, sólo haz:

```powershell
git add README.md
git commit -m "Add README with deploy instructions"
git push
```

## Desplegar en Vercel (pasos)
1. Entra en https://vercel.com y crea una cuenta o inicia sesión con GitHub.
2. Haz clic en **New Project** → **Import Git Repository**.
3. Selecciona tu repositorio `dicaria-agents`.
4. Vercel detectará Next.js automáticamente. Deja la configuración por defecto y haz clic en **Deploy**.
5. Espera a que termine la build y abre la URL pública que te asigna Vercel.

### Variables de entorno
Si necesitas variables de entorno, ve a Project → Settings → Environment Variables en Vercel y añádelas antes de redeploy.

## Conectar dominio personalizado (opcional)
1. Compra el dominio donde prefieras.
2. En Vercel → Settings → Domains → Add Domain. Añade tu dominio y sigue las instrucciones para actualizar los DNS en tu registrador.

## Comprobaciones locales rápidas
```powershell
npm ci
npm run build
npm run dev
```

## Notas de verificación
En este entorno verifiqué que `npm ci` y `npm run build` terminan correctamente con Next.js 14.2.3.

Si quieres, puedo:
- Añadir más documentación al `README` (CI, variables de entorno concretas, comandos de QA).
- Ayudarte a crear el repositorio en GitHub y hacer el `push` desde aquí (necesitas configurar el remote o darme instrucciones).

---
Si quieres que haga el push remoto desde esta máquina, dime la URL del repo remoto (https) o configura el remote tú y yo haré el push.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
