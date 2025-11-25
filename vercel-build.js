const fs = require('fs-extra');
const path = require('path');

console.log('🚀 Vercel部署构建开始...');

// 创建dist目录
const distDir = path.resolve(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
  console.log('✅ 创建dist目录');
}

// 复制public目录到dist
const publicDir = path.resolve(__dirname, 'public');
if (fs.existsSync(publicDir)) {
  fs.copySync(publicDir, distDir, { recursive: true });
  console.log('✅ 复制public资源到dist');
}

// 确保audio目录存在
const audioDir = path.join(distDir, 'audio');
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
  console.log('✅ 创建audio目录');
}

// 确保其他必要目录存在
const necessaryDirs = ['img', 'plist', 'scene', 'script', 'gameData'];
necessaryDirs.forEach(dir => {
  const dirPath = path.join(distDir, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✅ 创建${dir}目录`);
  }
});

console.log('🎉 Vercel构建完成！');