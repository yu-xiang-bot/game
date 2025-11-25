console.log('🔧 开始修复构建问题...');

const fs = require('fs-extra');
const path = require('path');

// 确保dist目录存在
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
  
  // 验证音频文件
  const audioDir = path.join(distDir, 'audio');
  if (fs.existsSync(audioDir)) {
    const audioFiles = fs.readdirSync(audioDir);
    console.log(`🎵 音频文件: ${audioFiles.join(', ')}`);
  }
}

// 创建一个基本的HTML文件用于测试
const htmlContent = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>星云守护 - 测试页面</title>
</head>
<body>
    <h1>星云守护游戏</h1>
    <p>音频资源测试</p>
    <script>
        console.log('页面加载完成');
        
        // 测试音频文件是否可访问
        fetch('/audio/openMenu.wav')
            .then(response => {
                if (response.ok) {
                    console.log('✅ 音频文件可访问: openMenu.wav');
                    document.body.innerHTML += '<p style="color: green;">✅ 音频文件加载成功</p>';
                } else {
                    console.error('❌ 音频文件无法访问');
                    document.body.innerHTML += '<p style="color: red;">❌ 音频文件加载失败</p>';
                }
            })
            .catch(error => {
                console.error('❌ 网络错误:', error);
                document.body.innerHTML += '<p style="color: red;">❌ 网络连接错误</p>';
            });
    </script>
</body>
</html>`;

fs.writeFileSync(path.join(distDir, 'test.html'), htmlContent);
console.log('✅ 创建测试HTML文件');

// 检查关键文件
const filesToCheck = [
  'audio/openMenu.wav',
  'gameData/config.json',
  'img/grass.png'
];

filesToCheck.forEach(file => {
  const filePath = path.join(distDir, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} 存在`);
  } else {
    console.log(`❌ ${file} 不存在`);
  }
});

console.log('🎉 构建验证完成！');
console.log('📁 dist目录内容:');
try {
  const items = fs.readdirSync(distDir);
  items.forEach(item => {
    const itemPath = path.join(distDir, item);
    const stats = fs.statSync(itemPath);
    if (stats.isDirectory()) {
      const subItems = fs.readdirSync(itemPath);
      console.log(`  📂 ${item}/ (${subItems.length} 文件)`);
    } else {
      console.log(`  📄 ${item}`);
    }
  });
} catch (error) {
  console.error('❌ 无法读取dist目录:', error.message);
}