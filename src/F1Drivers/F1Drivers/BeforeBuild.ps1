try {
    bower > $null
}
catch {
    Write-Host "bower not found. Install it using: npm install -i bower" -ForegroundColor Red
    Exit 1
}

# Restore bower packages
#bower install angular
#bower install angular-route
#bower install bootstrap

# Bundle & minify JS files
$jsDir = Join-Path $pwd "js"

# App module
& "..\..\..\tools\ajaxmin\AjaxMinifier.exe" (Join-Path $jsDir "app.js") -out (Join-Path $jsDir "app.min.js") -clobber

# Other modules by folder
Get-ChildItem $jsDir -Directory | % {
    $moduleDir = $_.FullName
    $moduleName = Split-Path $moduleDir -Leaf
    $bundlePath = Join-Path $jsDir "$moduleName.js"
    $bundleMinPath = Join-Path $jsDir "$moduleName.min.js"
    $bundleMapPath = Join-Path $jsDir "$moduleName.min.js.map"

    Remove-Item $bundlePath -Force -ErrorAction SilentlyContinue
    
    Write-Host "Processing JS files in $moduleDir"

    Get-ChildItem $moduleDir -Filter *.js | Sort-Object | % {
        Get-Content $_.FullName | Add-Content $bundlePath
    }

    # Minify
    if (Test-Path $bundlePath) {
        & "..\..\..\tools\ajaxmin\AjaxMinifier.exe" $bundlePath -out $bundleMinPath -map $bundleMapPath > $null
    }
}

