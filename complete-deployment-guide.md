# 星云守护 - 完整Supabase部署指南

## 🔑 项目凭证
- **项目引用**: vcmrpbysnxzhqxfjvshf
- **项目URL**: https://vcmrpbysnxzhqxfjvshf.supabase.co
- **Access Token**: FOhF8W2g7HkifBg7
- **Service Role Key**: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjbXJwYnlzbnh6cWh4amZ2c2hmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Mzk2NzcwNiwiZXhwIjoyMDc5NTQzNzA2fQ.xguaCBWLUtpu0Fd2dyftnAC6sV0TGehBkUKwBhBKgrQ

## 🎮 游戏信息
- **游戏名称**: 星云守护
- **游戏类型**: H5塔防游戏
- **访问地址**: https://vcmrpbysnxzhqxfjvshf.functions.supabase.co/nebula-guardian

## 📁 项目结构
```
dist/
├── index.html (主页)
├── main.*.js (主游戏逻辑)
├── vendors.*.js (依赖库)
├── audio/ (音频文件)
├── img/ (图片资源)
├── scene/ (场景配置)
├── gameData/ (游戏数据)
└── plist/ (动画配置)
```

## 🚀 部署方法

### 方法一：Supabase Dashboard（推荐）
1. 访问 https://supabase.com/dashboard
2. 选择项目：vcmrpbysnxzhqxfjvshf
3. 进入 "Edge Functions"
4. 点击 "New Function"
5. 函数名称：`nebula-guardian`
6. 粘贴以下代码：

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // 处理CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const url = new URL(req.url)
    const path = url.pathname

    console.log(`请求路径: ${path}`)

    // 提供静态文件
    if (path === '/' || path === '/index.html') {
      const html = await Deno.readTextFile('./dist/index.html')
      return new Response(html, {
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'text/html',
          'Cache-Control': 'public, max-age=3600'
        }
      })
    }

    // 处理其他静态资源
    if (path.startsWith('/')) {
      try {
        const filePath = `./dist${path}`
        const content = await Deno.readFile(filePath)
        const ext = path.split('.').pop()
        
        const mimeTypes: { [key: string]: string } = {
          'js': 'application/javascript',
          'css': 'text/css',
          'png': 'image/png',
          'jpg': 'image/jpeg',
          'jpeg': 'image/jpeg',
          'gif': 'image/gif',
          'json': 'application/json',
          'wav': 'audio/wav',
          'mp3': 'audio/mpeg',
          'ogg': 'audio/ogg',
          'plist': 'text/plain',
          'bin': 'application/octet-stream'
        }

        const contentType = mimeTypes[ext || ''] || 'text/plain'
        
        // 设置缓存策略
        let cacheControl = 'public, max-age=3600'
        if (['js', 'css', 'png', 'jpg', 'jpeg', 'gif', 'wav', 'mp3', 'ogg'].includes(ext || '')) {
          cacheControl = 'public, max-age=31536000' // 静态资源长期缓存
        }
        
        return new Response(content, {
          headers: { 
            ...corsHeaders, 
            'Content-Type': contentType,
            'Cache-Control': cacheControl
          }
        })
      } catch (e) {
        console.log(`文件未找到: ${path}`)
        
        // 404页面
        try {
          const html = await Deno.readTextFile('./dist/404.html')
          return new Response(html, {
            status: 404,
            headers: { ...corsHeaders, 'Content-Type': 'text/html' }
          })
        } catch {
          return new Response('页面未找到', {
            status: 404,
            headers: corsHeaders 
          })
        }
      }
    }

    return new Response('Not Found', { 
      status: 404,
      headers: corsHeaders 
    })

  } catch (error) {
    console.error('服务器错误:', error)
    return new Response(JSON.stringify({ 
      error: '服务器内部错误',
      message: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})
```

7. 点击 "Deploy"
8. 等待部署完成
9. 访问：https://vcmrpbysnxzhqxfjvshf.functions.supabase.co/nebula-guardian

### 方法二：Supabase CLI
```bash
# 安装CLI
npm install -g @supabase/cli

# 登录
supabase login --token FOhF8W2g7HkifBg7

# 链接项目
supabase link --project-ref vcmrpbysnxzhqxfjvshf

# 部署函数
supabase functions deploy nebula-guardian --no-verify-jwt

# 验证部署
curl https://vcmrpbysnxzhqxfjvshf.functions.supabase.co/nebula-guardian
```

### 方法三：直接API调用
```bash
# 创建函数
curl -X POST 'https://vcmrpbysnxzhqxfjvshf.supabase.co/rest/v1/functions' \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjbXJwYnlzbnh6cWh4amZ2c2hmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Mzk2NzcwNiwiZXhwIjoyMDc5NTQzNzA2fQ.xguaCBWLUtpu0Fd2dyftnAC6sV0TGehBkUKwBhBKgrQ" \
  -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjbXJwYnlzbnh6cWh4amZ2c2hmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Mzk2NzcwNiwiZXhwIjoyMDc5NTQzNzA2fQ.xguaCBWLUtpu0Fd2dyftnAC6sV0TGehBkUKwBhBKgrQ" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "nebula-guardian",
    "runtime": "deno",
    "verify_jwt": false,
    "entrypoint_path": "index.ts",
    "import_map_path": "import_map.json"
  }'

# 上传函数代码
curl -X PUT 'https://vcmrpbysnxzhqxfjvshf.supabase.co/rest/v1/functions/nebula-guardian/body' \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjbXJwYnlzbnh6cWh4amZ2c2hmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Mzk2NzcwNiwiZXhwIjoyMDc5NTQzNzA2fQ.xguaCBWLUtpu0Fd2dyftnAC6sV0TGehBkUKwBhBKgrQ" \
  -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjbXJwYnlzbnh6cWh4amZ2c2hmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Mzk2NzcwNiwiZXhwIjoyMDc5NTQzNzA2fQ.xguaCBWLUtpu0Fd2dyftnAC6sV0TGehBkUKwBhBKgrQ" \
  -H "Content-Type: text/plain" \
  --data-binary @supabase/functions/nebula-guardian/index.ts
```

## 🎯 部署验证

### 检查函数状态
```bash
curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjbXJwYnlzbnh6cWh4amZ2c2hmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5Njc3MDYsImV4cCI6MjA3OTU0MzcwNn0.QrC98Co6699N8-3KDbRvRHtAxayCP93NxSclRB8P1Dg" \
  https://vcmrpbysnxzhqxfjvshf.functions.supabase.co/nebula-guardian
```

### 测试游戏
- 在浏览器中访问：https://vcmrpbysnxzhqxfjvshf.functions.supabase.co/nebula-guardian
- 检查游戏是否正常加载
- 测试音效和动画

## 🔧 故障排除

### 常见问题
1. **函数返回404**: 检查函数名称是否正确
2. **音效无法播放**: 确保音频文件路径正确
3. **CSS样式缺失**: 检查CSS文件是否正确加载
4. **页面空白**: 检查浏览器控制台错误信息

### 调试技巧
- 打开浏览器开发者工具
- 检查Network标签页的请求状态
- 查看Console标签页的错误信息
- 验证静态资源是否正确加载

## 📊 性能优化

### 缓存配置
```
# 静态资源缓存一年
Cache-Control: public, max-age=31536000

# HTML文件缓存一小时
Cache-Control: public, max-age=3600
```

### CDN配置
Supabase Edge Functions自带CDN，无需额外配置。

## 🌐 域名配置（可选）
如果需要自定义域名，可以：
1. 在Supabase项目中配置自定义域名
2. 设置CNAME记录指向Supabase提供的地址

---

## 🎉 部署完成！

部署成功后，您的星云守护游戏将在以下地址可用：
**https://vcmrpbysnxzhqxfjvshf.functions.supabase.co/nebula-guardian**

享受您的游戏吧！🎮✨
