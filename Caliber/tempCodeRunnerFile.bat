@echo off
setlocal enabledelayedexpansion

chcp 65001 > nul

set "folderPath=c:\1"
set "prevFile="
set "newFile="

:MonitorLoop
dir /b "%folderPath%" > "%temp%\currentList.txt"
fc "%temp%\currentList.txt" "%temp%\prevList.txt" > nul
if errorlevel 1 (
    for /f "usebackq delims=" %%i in ("%temp%\currentList.txt") do (
        set "newFile=%%i"
    )
)

copy /y "%temp%\currentList.txt" "%temp%\prevList.txt" > nul
del "%temp%\currentList.txt" > nul

if defined newFile (
    echo Новый файл: %newFile%
    echo %newFile% > "%temp%\newFile.txt"
    set "prevFile=%newFile%"

    set "FTPSERVER=ptservice.kz"
    set "USER=caliber"
    set "ENCRYPTED_PASSWORD=data_replay"
    echo open %FTPSERVER%> ftpscript.txt
    echo %USER%>> ftpscript.txt
    echo %ENCRYPTED_PASSWORD%>> ftpscript.txt
    echo put "%newFile%">> ftpscript.txt
    echo quit>> ftpscript.txt

    ftp -s:ftpscript.txt

    del ftpscript.txt
)

if defined prevFile (
    type "%temp%\newFile.txt"
) else (
    echo Новый файл: нет новых файлов
)

timeout /t 1 >nul
goto MonitorLoop

