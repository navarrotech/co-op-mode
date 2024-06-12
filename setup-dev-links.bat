@echo off

@REM This file might not be needed anymore?

:: Get the directory of the batch file
set scriptdir=%~dp0

:: Link protobuf files
set targetfile=schema.proto
set linkfile=frontend\src\modules\protobuf

mkdir "%scriptdir%%linkfile%"

:: Create a hard link to protobuf files
mklink /H "%scriptdir%%linkfile%\schema" "%scriptdir%%targetfile%"
