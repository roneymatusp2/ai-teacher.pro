# PowerShell Script to Fix ALL Project Permissions
# Must be run as Administrator
# Fixes permissions for all projects in WebstormProjects folder

#Requires -RunAsAdministrator

param(
    [switch]$Force = $false
)

$ErrorActionPreference = "SilentlyContinue"
$ProgressPreference = "SilentlyContinue"

# ASCII Art Header
Write-Host @"
╔═══════════════════════════════════════════════════════════════════════════════╗
║                        PROJECT PERMISSIONS FIXER                             ║
║                     Fixes ALL WebStorm Projects at Once                      ║
║                           Run as Administrator                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
"@ -ForegroundColor Cyan

# Check if running as Administrator
$currentPrincipal = New-Object Security.Principal.WindowsPrincipal([Security.Principal.WindowsIdentity]::GetCurrent())
if (-not $currentPrincipal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    Write-Host "❌ ERROR: This script must be run as Administrator!" -ForegroundColor Red
    Write-Host "💡 Right-click on PowerShell and select 'Run as Administrator'" -ForegroundColor Yellow
    Write-Host "Press any key to exit..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}

$rootPath = "C:\Users\roney\WebstormProjects"
$currentUser = [System.Security.Principal.WindowsIdentity]::GetCurrent().Name
$userName = "roney"

Write-Host "🚀 Starting comprehensive permissions fix..." -ForegroundColor Green
Write-Host "📁 Target directory: $rootPath" -ForegroundColor Cyan
Write-Host "👤 Current user: $currentUser" -ForegroundColor Cyan

if (-not (Test-Path $rootPath)) {
    Write-Host "❌ ERROR: Directory $rootPath not found!" -ForegroundColor Red
    exit 1
}

# Function to display progress
function Show-Progress {
    param($Activity, $Status, $PercentComplete)
    Write-Progress -Activity $Activity -Status $Status -PercentComplete $PercentComplete
}

# Function to stop interfering processes
function Stop-InterferingProcesses {
    Write-Host "🔄 Stopping potentially interfering processes..." -ForegroundColor Yellow
    
    $processesToStop = @("node", "npm", "yarn", "webpack", "vite", "tsc", "eslint")
    foreach ($proc in $processesToStop) {
        try {
            Get-Process -Name $proc -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
            Write-Host "   ✓ Stopped $proc processes" -ForegroundColor Green
        } catch {
            # Silently continue if process not found
        }
    }
}

# Function to fix folder permissions
function Fix-FolderPermissions {
    param($FolderPath)
    
    try {
        # Take ownership
        takeown /f "$FolderPath" /r /d y >$null 2>&1
        
        # Grant full permissions to user
        icacls "$FolderPath" /grant "${userName}:(OI)(CI)F" /T /Q >$null 2>&1
        icacls "$FolderPath" /grant "Everyone:(OI)(CI)F" /T /Q >$null 2>&1
        icacls "$FolderPath" /grant "Users:(OI)(CI)F" /T /Q >$null 2>&1
        
        # Remove read-only attributes
        attrib -r "$FolderPath\*.*" /s /d >$null 2>&1
        
        return $true
    } catch {
        return $false
    }
}

# Function to clean npm/yarn caches
function Clean-PackageManagerCaches {
    Write-Host "🧹 Cleaning package manager caches..." -ForegroundColor Yellow
    
    try {
        # Clean npm cache
        npm cache clean --force >$null 2>&1
        Write-Host "   ✓ NPM cache cleaned" -ForegroundColor Green
    } catch {
        Write-Host "   ⚠️ Could not clean NPM cache" -ForegroundColor Yellow
    }
    
    try {
        # Clean yarn cache
        yarn cache clean >$null 2>&1
        Write-Host "   ✓ Yarn cache cleaned" -ForegroundColor Green
    } catch {
        Write-Host "   ⚠️ Could not clean Yarn cache" -ForegroundColor Yellow
    }
}

# Function to fix specific file types
function Fix-SpecificFiles {
    param($ProjectPath)
    
    $criticalFiles = @("package.json", "package-lock.json", "yarn.lock", "tsconfig.json", ".env", "vite.config.*", "astro.config.*")
    
    foreach ($filePattern in $criticalFiles) {
        $files = Get-ChildItem -Path $ProjectPath -Name $filePattern -Recurse -ErrorAction SilentlyContinue
        foreach ($file in $files) {
            $fullPath = Join-Path $ProjectPath $file
            try {
                icacls "$fullPath" /reset /Q >$null 2>&1
                icacls "$fullPath" /grant "${userName}:F" /Q >$null 2>&1
                attrib -r "$fullPath" >$null 2>&1
            } catch {
                # Continue on error
            }
        }
    }
}

# Main execution
Write-Host ""
Write-Host "🛑 STEP 1: Stopping interfering processes" -ForegroundColor Magenta
Stop-InterferingProcesses

Write-Host ""
Write-Host "🧹 STEP 2: Cleaning package manager caches" -ForegroundColor Magenta
Clean-PackageManagerCaches

Write-Host ""
Write-Host "📁 STEP 3: Discovering projects..." -ForegroundColor Magenta

# Get all subdirectories
$projects = Get-ChildItem -Path $rootPath -Directory -ErrorAction SilentlyContinue
$totalProjects = $projects.Count

if ($totalProjects -eq 0) {
    Write-Host "❌ No projects found in $rootPath" -ForegroundColor Red
    exit 1
}

Write-Host "   Found $totalProjects projects to fix" -ForegroundColor Green

Write-Host ""
Write-Host "🔧 STEP 4: Fixing permissions for all projects..." -ForegroundColor Magenta

$completedProjects = 0
$successfulFixes = 0

foreach ($project in $projects) {
    $projectPath = $project.FullName
    $projectName = $project.Name
    
    $percentComplete = [math]::Round(($completedProjects / $totalProjects) * 100)
    Show-Progress "Fixing Project Permissions" "Processing: $projectName" $percentComplete
    
    Write-Host "   🔨 Fixing: $projectName" -ForegroundColor Cyan
    
    # Skip if it's not a development project
    $hasPackageJson = Test-Path (Join-Path $projectPath "package.json")
    $hasNodeModules = Test-Path (Join-Path $projectPath "node_modules")
    
    if ($hasPackageJson -or $hasNodeModules) {
        $success = Fix-FolderPermissions $projectPath
        
        if ($success) {
            Fix-SpecificFiles $projectPath
            Write-Host "      ✅ $projectName - FIXED" -ForegroundColor Green
            $successfulFixes++
        } else {
            Write-Host "      ❌ $projectName - FAILED" -ForegroundColor Red
        }
    } else {
        # Still fix permissions but don't count as dev project
        Fix-FolderPermissions $projectPath | Out-Null
        Write-Host "      ℹ️ $projectName - Not a dev project, basic permissions applied" -ForegroundColor Gray
    }
    
    $completedProjects++
}

Write-Progress -Activity "Fixing Project Permissions" -Completed

Write-Host ""
Write-Host "🎯 STEP 5: Final system optimizations..." -ForegroundColor Magenta

# Fix the root WebstormProjects folder itself
Write-Host "   🔧 Fixing root directory permissions..." -ForegroundColor Yellow
Fix-FolderPermissions $rootPath | Out-Null

# Clear system file cache
Write-Host "   💾 Clearing system file cache..." -ForegroundColor Yellow
try {
    [System.GC]::Collect()
    [System.GC]::WaitForPendingFinalizers()
    Write-Host "      ✓ System cache cleared" -ForegroundColor Green
} catch {
    Write-Host "      ⚠️ Could not clear system cache" -ForegroundColor Yellow
}

# Summary
Write-Host ""
Write-Host "╔═══════════════════════════════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║                              SUMMARY REPORT                                  ║" -ForegroundColor Green
Write-Host "╚═══════════════════════════════════════════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""
Write-Host "📊 Total projects processed: $totalProjects" -ForegroundColor Cyan
Write-Host "✅ Successfully fixed: $successfulFixes" -ForegroundColor Green
Write-Host "❌ Failed to fix: $($totalProjects - $successfulFixes)" -ForegroundColor Red
Write-Host ""

if ($successfulFixes -eq $totalProjects) {
    Write-Host "🎉 ALL PROJECTS FIXED SUCCESSFULLY!" -ForegroundColor Green
    Write-Host "💡 You can now run 'npm run dev' in any project" -ForegroundColor Cyan
} else {
    Write-Host "⚠️ Some projects had issues. Try running the script again." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🔧 RECOMMENDED NEXT STEPS:" -ForegroundColor Magenta
Write-Host "   1. Navigate to your project: cd 'C:\Users\roney\WebstormProjects\Ai-teacher.pro-2'" -ForegroundColor White
Write-Host "   2. Try running: npm run dev" -ForegroundColor White
Write-Host "   3. If still having issues, restart your computer" -ForegroundColor White
Write-Host ""

# Create a shortcut script for quick access
$shortcutContent = @"
# Quick Project Permission Fix
# Run this anytime you have permission issues

Set-Location "C:\Users\roney\WebstormProjects"
PowerShell -ExecutionPolicy Bypass -File "fix-all-projects-permissions.ps1" -Force
"@

$shortcutPath = "C:\Users\roney\WebstormProjects\quick-fix-permissions.ps1"
try {
    $shortcutContent | Out-File -FilePath $shortcutPath -Encoding UTF8 -Force
    Write-Host "📎 Created quick-fix shortcut: $shortcutPath" -ForegroundColor Cyan
} catch {
    # Silently continue if can't create shortcut
}

Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")