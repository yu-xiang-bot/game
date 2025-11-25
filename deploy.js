const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

console.log('🚀 开始部署星云守护H5游戏...\n');

// 1. 构建项目
console.log('📦 构建项目...');
try {
  execSync('npx webpack --mode=development', { stdio: 'inherit' });
  console.log('✅ 构建完成\n');
} catch (error) {
  console.error('❌ 构建失败:', error.message);
  process.exit(1);
}

// 2. 复制资源文件
console.log('📁 复制资源文件...');
try {
  fs.copySync('./public', './dist', { recursive: true });
  console.log('✅ 资源复制完成\n');
} catch (error) {
  console.error('❌ 资源复制失败:', error.message);
  process.exit(1);
}

// 3. 检查dist目录
const distPath = path.resolve('./dist');
if (!fs.existsSync(distPath)) {
  console.error('❌ dist目录不存在');
  process.exit(1);
}

console.log('🎮 部署准备完成！');
console.log('\n📋 部署选项：');
console.log('1. 本地预览: npx serve dist');
console.log('2. Vercel部署: npx vercel --prod');
console.log('3. 上传dist目录到任意Web服务器');

// 4. 启动本地预览服务（可选）
console.log('\n🌐 启动本地预览服务...');
try {
  execSync('npx serve dist -p 3000', { stdio: 'inherit' });
} catch (error) {
  console.log('⚠️  请手动安装serve: npm install -g serve');
}