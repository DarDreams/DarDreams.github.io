echo on
@chcp 861
@set MyPath=G:\data\PlayClaw\PlayClaw 6\Scenes
@set link=https://github.com/DarDreams/PlayClaw.git
@set drive=%MyPath:~0,2%
%drive%
cd %Mypath%
@REM echo "# PlayClaw" > readme.md
@REM @echo !CURRENT_BUILD.json >> ex.gitignore
@REM --------------------------------------------------
@echo %date% >> readme.md
@git init
@git add readme.md
@git commit -m"first commit"
@git branch -M main
@REM git remote remove origin
git remote add origin %link%
git push -u origin main