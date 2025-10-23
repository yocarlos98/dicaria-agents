Write-Host "Desplegando en Vercel (usando npx vercel --prod)..."

if (-not (Get-Command npx -ErrorAction SilentlyContinue)) {
    Write-Host "npx no está disponible. Instalando temporalmente 'vercel' con npx (se requiere Node.js)..."
}

# Ejecutar vercel interactivo
npx vercel --prod

if ($LASTEXITCODE -ne 0) {
    Write-Error "El comando vercel falló. Revisa la salida anterior para más detalles."
    exit $LASTEXITCODE
}

Write-Host "Despliegue finalizado (si la CLI completó exitosamente). Revisa la URL que la CLI imprima o en tu dashboard de Vercel."
