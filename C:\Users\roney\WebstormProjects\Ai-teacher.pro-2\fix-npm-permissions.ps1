# Fix NPM Permission Error Script
# Run as Administrator for best results

Write-Host "Fixing NPM permissions issue..." -ForegroundColor Green

# Take ownership of the project directory
Write-Host "Taking ownership of project files..." -ForegroundColor Yellow
$projectPath = "C:\Users\roney\WebstormProjects\Ai-teacher.pro-2"
takeown /f "$projectPath" /r /d y 2>$null

# Grant full permissions to current user
Write-Host "Granting permissions to current user..." -ForegroundColor Yellow
$currentUser = [System.Security.Principal.WindowsIdentity]::GetCurrent().Name
icacls "$projectPath" /grant "${currentUser}:(OI)(CI)F" /T /Q

# Clear npm cache
Write-Host "Clearing npm cache..." -ForegroundColor Yellow
npm cache clean --force

# Check if any processes are using the files
Write-Host "Checking for file locks..." -ForegroundColor Yellow
$lockedFiles = @()
try {
    $handle = Start-Process -FilePath "handle.exe" -ArgumentList "-accepteula", "$projectPath" -NoNewWindow -Wait -PassThru -RedirectStandardOutput "handle_output.txt" 2>$null
    if (Test-Path "handle_output.txt") {
        $output = Get-Content "handle_output.txt"
        Remove-Item "handle_output.txt" -Force
        if ($output -match "pid:") {
            Write-Host "Warning: Some files may be locked by other processes" -ForegroundColor Red
            Write-Host "Close any editors or programs using project files" -ForegroundColor Yellow
        }
    }
} catch {
    Write-Host "Could not check for file locks (handle.exe not found)" -ForegroundColor Gray
}

# Reset file attributes
Write-Host "Resetting file attributes..." -ForegroundColor Yellow
Get-ChildItem -Path $projectPath -Recurse -Force | ForEach-Object {
    if ($_.Attributes -band [System.IO.FileAttributes]::ReadOnly) {
        $_.Attributes = $_.Attributes -bxor [System.IO.FileAttributes]::ReadOnly
    }
}

# Specifically fix package.json permissions
$packageJsonPath = Join-Path $projectPath "package.json"
if (Test-Path $packageJsonPath) {
    Write-Host "Fixing package.json specifically..." -ForegroundColor Yellow
    icacls "$packageJsonPath" /reset /T /Q
    icacls "$packageJsonPath" /grant "${currentUser}:F" /Q
}

Write-Host "`nPermissions fixed!" -ForegroundColor Green
Write-Host "Try running 'npm run dev' again" -ForegroundColor Cyan

# Alternative method if still having issues
Write-Host "`nIf you still have issues, try these commands manually:" -ForegroundColor Yellow
Write-Host "1. Run PowerShell as Administrator" -ForegroundColor Gray
Write-Host "2. cd $projectPath" -ForegroundColor Gray
Write-Host "3. npm run dev" -ForegroundColor Gray