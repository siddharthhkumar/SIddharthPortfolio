@echo off
REM Get Started With Your Next.js Portfolio
REM Run this file or copy the commands below

echo.
echo ======================================================
echo   🚀 SIDDHARTH KUMAR - PORTFOLIO SETUP
echo ======================================================
echo.

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ ERROR: Node.js/npm not installed
    echo Please install from: https://nodejs.org
    pause
    exit /b 1
)

echo ✅ Node.js found: 
node --version
npm --version

echo.
echo 📦 Installing dependencies...
echo.
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Installation failed. Check the errors above.
    pause
    exit /b 1
)

echo.
echo ✅ Dependencies installed successfully!
echo.
echo ======================================================
echo   🎨 STARTING DEVELOPMENT SERVER
echo ======================================================
echo.
echo Your portfolio will open at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.

npm run dev

pause
