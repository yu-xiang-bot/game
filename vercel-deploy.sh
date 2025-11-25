#!/bin/bash

echo "🚀 开始部署到Vercel..."

# 检查Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "📦 安装Vercel CLI..."
    npm install -g vercel
fi

# 构建项目
echo "🔨 构建项目..."
npm run build

# 部署到Vercel
echo "🌐 部署到Vercel..."
vercel --prod

echo "✅ 部署完成！"