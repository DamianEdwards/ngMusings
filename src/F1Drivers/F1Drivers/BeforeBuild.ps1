try {
    bower > $null
}
catch {
    Write-Host "bower not found. Install it using: npm install -g bower" -ForegroundColor Red
    Exit 1
}

# Restore bower packages
"angular", "angular_route", "bootstrap", "jquery" | % {
    bower install $_
}

# Bundle & minify JS files
$jsDir = Join-Path $pwd "js"
$jsMin = Join-Path $pwd "..\..\..\tools\ajaxmin\AjaxMinifier.exe"
$sourcePaths = Join-Path $jsDir "app.js"
$bundleMinPath = Join-Path $jsDir "app.min.js"
$bundleMapPath = Join-Path $jsDir "app.min.js.map"

# App module
& $jsMin $sourcePaths -out $bundleMinPath -map:v3 $bundleMapPath -clobber

# Other modules by folder
Get-ChildItem $jsDir -Directory | % {
    $moduleDir = $_.FullName
    $moduleName = Split-Path $moduleDir -Leaf
    $bundlePath = Join-Path $jsDir "$moduleName.js"
    $bundleMapPath = Join-Path $jsDir "$moduleName.js.map"
    $bundleMinPath = Join-Path $jsDir "$moduleName.min.js"
    $bundleMinMapPath = Join-Path $jsDir "$moduleName.min.js.map"

    $sourcePaths = (Get-ChildItem $moduleDir -Filter *.js | % { $_.FullName })

    Write-Host "Processing" $sourcePaths.Length "JS files in $moduleDir"

    if ($sourcePaths.Length -gt 0) {
        # Bundle only
        & $jsMin $sourcePaths -out $bundlePath -map:v3 $bundleMapPath -pponly -clobber > $null

        # Bundle & minify
        & $jsMin $sourcePaths -out $bundleMinPath -map:v3 $bundleMinMapPath -clobber > $null
    }
}

