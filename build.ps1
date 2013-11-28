# Download nuget.exe if needed
if(!(Test-Path .nuget\nuget.exe))
{
    Write-Host "Downloading NuGet.exe"
    curl http://nuget.org/nuget.exe -outfile .nuget\nuget.exe
}

$F1DriversSlnDir = Join-Path $pwd "src\F1Drivers"
$F1DriversProjetDir = Join-Path $F1DriversSlnDir "F1Drivers"
$F1DriversProjectPath = Join-Path $F1DriversProjetDir "F1Drivers.csproj"

# Restore nuget packages
cd $F1DriversSlnDir
& .\.nuget\nuget.exe restore

# Build the project
msbuild $F1DriversProjectPath /m /v:quiet /nologo