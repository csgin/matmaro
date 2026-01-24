# Quick Start Script
# Run this in PowerShell to set up the project

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "English Teacher Website - Setup" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js is not installed!" -ForegroundColor Red
    Write-Host "Please install Node.js from: https://nodejs.org/" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Yellow
Write-Host "This may take a few minutes..." -ForegroundColor Gray
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Dependencies installed successfully!" -ForegroundColor Green
} else {
    Write-Host "✗ Failed to install dependencies" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Setup Complete!" -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Run 'npm run dev' to start the development server" -ForegroundColor White
Write-Host "2. Open http://localhost:3000 in your browser" -ForegroundColor White
Write-Host "3. Read START_HERE.md for customization instructions" -ForegroundColor White
Write-Host ""
Write-Host "Quick commands:" -ForegroundColor Yellow
Write-Host "  npm run dev   - Start development server" -ForegroundColor White
Write-Host "  npm run build - Build for production" -ForegroundColor White
Write-Host "  npm start     - Start production server" -ForegroundColor White
Write-Host ""
Write-Host "Ready to start? Run: npm run dev" -ForegroundColor Cyan
Write-Host ""
