@echo off
echo 🚀 开始部署到Vercel...

REM 检查Vercel CLI
where vercel >nul 2>nul
if %errorlevel% neq 0 (
    echo 📦 安装Vercel CLI...
    npm install -g vercel
)

REM 构建项目
echo 🔨 构建项目...
call npm run build

REM 部署到Vercel
echo 🌐 部署到Vercel...
call npx vercel --prod

echo ✅ 部署完成！
pause