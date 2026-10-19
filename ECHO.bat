@echo off
title ECHO 3D Spatial Studio
cd /d "%~dp0"

:: Check if server is running on port 8000
netstat -ano | findstr :8000 | findstr LISTENING >nul
if %errorlevel% neq 0 (
    start /b "" python -m http.server 8000
    timeout /t 1 /nobreak >nul
)

:: Launch Chrome in Standalone App Window (no URL bar, no tabs, native CAD app feel)
if exist "C:\Program Files\Google\Chrome\Application\chrome.exe" (
    start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --app=http://127.0.0.1:8000 --window-size=1600,950
    exit
)

if exist "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" (
    start "" "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --app=http://127.0.0.1:8000 --window-size=1600,950
    exit
)

:: Fallback to Microsoft Edge App Mode
start msedge --app=http://127.0.0.1:8000 --window-size=1600,950
exit
