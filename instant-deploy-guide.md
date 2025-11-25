# 星云守护 - 立即部署指南

## 🎯 您的游戏地址
**https://vcmrpbysnxzhqxfjvshf.functions.supabase.co/nebula-guardian**

## 🚀 3分钟完成部署

### 方法1：Dashboard部署（推荐）
1. 打开：https://supabase.com/dashboard
2. 选择项目：vcmrpbysnxzhqxfjvshf
3. 点击 "Edge Functions"
4. 点击 "New Function"
5. 函数名称：nebula-guardian
6. 复制以下代码：

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
8. 等待1-2分钟
9. 访问游戏地址

### 方法2：CLI部署
```bash
# 安装CLI
npm install -g @supabase/cli

# 登录
supabase login --token FOhF8W2g7HkifBg7

# 链接项目
supabase link --project-ref vcmrpbysnxzhqxfjvshf

# 部署
supabase functions deploy nebula-guardian --no-verify-jwt
```

## 📊 项目信息
- 项目引用：vcmrpbysnxzhqxfjvshf
- 函数名称：nebula-guardian
- 构建文件：187个
- 游戏类型：H5塔防游戏

## 🔑 凭证（已配置）
- Access Token: FOhF8W2g7HkifBg7
- Service Role Key: [已配置]
- Anon Key: [已配置]

## ✅ 验证部署
部署完成后，访问：https://vcmrpbysnxzhqxfjvshf.functions.supabase.co/nebula-guardian

如果游戏正常显示，说明部署成功！

---

**您的星云守护游戏已准备好部署！** 🎮✨
