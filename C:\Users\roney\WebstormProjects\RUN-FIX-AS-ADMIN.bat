@echo off
echo ================================================
echo     PROJECT PERMISSIONS FIXER - LAUNCHER
echo ================================================
echo.
echo This will fix ALL project permissions in WebstormProjects
echo.
echo IMPORTANT: This will automatically request Administrator privileges
echo.
pause

powershell -Command "Start-Process PowerShell -ArgumentList '-ExecutionPolicy Bypass -File \"%~dp0fix-all-projects-permissions.ps1\"' -Verb RunAs"

echo.
echo Script launched with Administrator privileges!
echo Check the PowerShell window that opened.
echo.
pause