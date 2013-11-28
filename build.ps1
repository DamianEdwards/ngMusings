try {
    bower > $null
} catch {
    Write-Host "bower not found. Please ensure you've installed bower globally via npm, e.g. npm install -g bower" -ForegroundColor Red
    Exit
}

$F1DriversRoot = Join-Path $pwd "\src\F1Drivers\F1Drivers\"

# Restore bower packages
cd $F1DriversRoot
bower install angular
bower install angular-route
bower install boostrap

# Bundle JS


# Minify JS

