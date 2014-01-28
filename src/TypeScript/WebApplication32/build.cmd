@ECHO OFF
cd %~dp0

:: Server

IF EXIST .nuget\NuGet.exe goto start
echo Downloading latest version of NuGet.exe...
mkdir .nuget
@powershell -NoProfile -ExecutionPolicy unrestricted -Command "((new-object net.webclient).DownloadFile('https://nuget.org/nuget.exe', '.nuget\NuGet.exe'))"

:start

SET EnableNuGetPackageRestore=true

ECHO Restoring NuGet packages
.nuget\nuget.exe restore -o ..\packages

ECHO Build the csproj
msbuild WebApplication32.csproj

:: Client

ECHO Restoring NPM packages
CALL npm install

ECHO Installing Bower components
CALL bower install

ECHO Building client assets via Grunt
CALL grunt