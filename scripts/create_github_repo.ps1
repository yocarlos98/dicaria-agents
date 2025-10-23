param(
    [string]$RepoName = "dicaria-agents",
    [string]$Description = "DICARIA Agents demo",
    [bool]$Private = $false
)

Write-Host "Crear repo GitHub: $RepoName"

# Preferir GitHub CLI si está disponible
if (Get-Command gh -ErrorAction SilentlyContinue) {
    Write-Host "Usando GitHub CLI (gh) para crear el repo..."
    gh repo create $RepoName --description "$Description" --public:$(!($Private)) --confirm
    Write-Host "Repo creado con gh. Añadiendo remote origin si no existe..."
    $remote = git remote get-url origin 2>$null
    if (!$remote) {
        git remote add origin "https://github.com/$((gh api user --jq .login))/ $RepoName" 2>$null
        Write-Host "Remote origin añadido (HTTPS). Si prefieres SSH, cambia manualmente."
    } else {
        Write-Host "Remote origin ya existe: $remote"
    }
    exit 0
}

Write-Host "gh no está disponible. Intentando usar la API de GitHub con GITHUB_TOKEN..."

if (-not $env:GITHUB_TOKEN) {
    Write-Error "Necesitas configurar la variable de entorno GITHUB_TOKEN con un Personal Access Token que tenga permisos 'repo'."
    exit 1
}

$body = @{ name = $RepoName; description = $Description; private = $Private } | ConvertTo-Json
$resp = Invoke-RestMethod -Uri https://api.github.com/user/repos -Method Post -Headers @{
    Authorization = "token $($env:GITHUB_TOKEN)";
    Accept = 'application/vnd.github+json'
} -Body $body

if ($resp.full_name) {
    Write-Host "Repositorio creado: $($resp.full_name)"
    git remote add origin $resp.clone_url 2>$null
    Write-Host "Remote origin añadido: $($resp.clone_url)"
} else {
    Write-Error "No se pudo crear el repositorio. Respuesta: $resp"
}
