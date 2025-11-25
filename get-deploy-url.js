const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🌐 获取Vercel部署URL...');

try {
    // 获取最新的部署URL
    const result = execSync('npx vercel ls --scope=team_Az6hH6tIHJLadSOEESvmhGPO', { 
        encoding: 'utf8',
        cwd: process.cwd() 
    });
    
    console.log('部署信息：');
    console.log(result);
    
    // 项目信息
    const projectInfo = {
        projectId: 'prj_UY3QTy1ClPSLLBFfnfzNgg0v555W',
        orgId: 'team_Az6hH6tIHJLadSOEESvmhGPO',
        projectName: 'nebula-guardian-game'
    };
    
    console.log('\n📋 项目信息：');
    console.log(`项目名称: ${projectInfo.projectName}`);
    console.log(`项目ID: ${projectInfo.projectId}`);
    
    console.log('\n🔗 预计的部署URL:');
    console.log(`https://${projectInfo.projectName}.vercel.app`);
    console.log(`https://${projectInfo.projectId}.vercel.app`);
    
} catch (error) {
    console.error('获取部署信息失败:', error.message);
    
    // 提供手动获取方法
    console.log('\n📱 手动获取部署URL的方法：');
    console.log('1. 访问: https://vercel.com/dashboard');
    console.log('2. 查找项目: nebula-guardian-game');
    console.log('3. 点击项目查看部署URL');
}