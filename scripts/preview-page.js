// scripts/preview-page.js
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 获取参数 - 使用 npm run preview -- pageA 格式
// process.argv 的格式为 [node路径, 脚本路径, ...额外参数]
const args = process.argv.slice(2);
console.log('命令行参数:', args);

// 直接获取第一个参数作为页面名称
const pageName = args.length > 0 ? args[0] : null;

// 设置环境变量，将页面名称传递给应用
process.env.VITE_EXAMPLE_PAGE = pageName || '';

console.log(`启动预览服务器，示例页面: ${pageName || '默认'}`);

// 将页面信息写入临时文件，以便应用启动时能够读取
const tempDir = path.join(__dirname, '../.temp');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

fs.writeFileSync(
  path.join(tempDir, 'current-page.json'),
  JSON.stringify({ page: pageName || '' })
);

try {
  // 寻找 uni 命令
  const uniPath = path.join(__dirname, '../node_modules/.bin/uni');
  const uniPathWindows = path.join(__dirname, '../node_modules/.bin/uni.cmd');
  
  if (fs.existsSync(uniPath) || (process.platform === 'win32' && fs.existsSync(uniPathWindows))) {
    // 使用本地的 uni 命令
    const actualUniPath = process.platform === 'win32' && fs.existsSync(uniPathWindows) ? uniPathWindows : uniPath;
    console.log(`使用本地 uni 命令: ${actualUniPath}`);
    
    execSync(`"${actualUniPath}"`, { 
      stdio: 'inherit',
      env: { ...process.env }
    });
  } else {
    // 尝试使用 npx uni
    console.log('找不到本地 uni 命令，尝试使用 npx uni...');
    
    execSync('npx uni', { 
      stdio: 'inherit',
      env: { ...process.env }
    });
  }
} catch (error) {
  console.error('执行命令失败:', error);
  process.exit(1);
}