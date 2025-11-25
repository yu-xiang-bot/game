# 星云守护 - Supabase手动部署指南

## 📋 部署信息
- 项目引用: vcmrpbysnxzhqxfjvshf
- 文件数量: 187
- 构建时间: 2025-11-25T06:58:22.112Z
- 游戏地址: https://vcmrpbysnxzhqxfjvshf.functions.supabase.co/nebula-guardian

## 🚀 手动部署步骤

### 方式一：使用Supabase Dashboard
1. 访问 https://supabase.com/dashboard
2. 选择项目: vcmrpbysnxzhqxfjvshf
3. 进入 Edge Functions
4. 创建新函数，名称：nebula-guardian
5. 复制以下函数代码：

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const url = new URL(req.url)
    const path = url.pathname

    if (path === '/' || path === '/index.html') {
      // 这里需要手动上传index.html内容
      const html = `<!DOCTYPE html>\n<html>\n<head><title>星云守护</title></head>\n<body>\n<h1>星云守护游戏</h1>\n<p>游戏加载中...</p>\n<script src="https://cdn.jsdelivr.net/gh/your-repo/nebula-guardian/main.js"></script>\n</body>\n</html>`
      return new Response(html, {
        headers: { ...corsHeaders, 'Content-Type': 'text/html' }
      })
    }

    return new Response('Not Found', { status: 404, headers: corsHeaders })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})
```

### 方式二：使用Supabase CLI
1. 安装CLI:
   ```bash
   npm install -g @supabase/cli
   ```
2. 登录:
   ```bash
   supabase login --token FOhF8W2g7HkifBg7
   ```
3. 链接项目:
   ```bash
   supabase link --project-ref vcmrpbysnxzhqxfjvshf
   ```
4. 部署函数:
   ```bash
   supabase functions deploy nebula-guardian --no-verify-jwt
   ```

## 📁 文件列表
- 404.html (1394 bytes)
- audio\openMenu.wav (53108 bytes)
- build-info.json (113 bytes)
- editTiledmap\bootstrap\css\bootstrap-grid.css (75616 bytes)
- editTiledmap\bootstrap\css\bootstrap-grid.css.map (226018 bytes)
- editTiledmap\bootstrap\css\bootstrap-grid.min.css (56464 bytes)
- editTiledmap\bootstrap\css\bootstrap-grid.min.css.map (142342 bytes)
- editTiledmap\bootstrap\css\bootstrap-grid.rtl.css (75690 bytes)
- editTiledmap\bootstrap\css\bootstrap-grid.rtl.css.map (226022 bytes)
- editTiledmap\bootstrap\css\bootstrap-grid.rtl.min.css (56539 bytes)
- editTiledmap\bootstrap\css\bootstrap-grid.rtl.min.css.map (142419 bytes)
- editTiledmap\bootstrap\css\bootstrap-reboot.css (11735 bytes)
- editTiledmap\bootstrap\css\bootstrap-reboot.css.map (126626 bytes)
- editTiledmap\bootstrap\css\bootstrap-reboot.min.css (9817 bytes)
- editTiledmap\bootstrap\css\bootstrap-reboot.min.css.map (51406 bytes)
- editTiledmap\bootstrap\css\bootstrap-reboot.rtl.css (11728 bytes)
- editTiledmap\bootstrap\css\bootstrap-reboot.rtl.css.map (126641 bytes)
- editTiledmap\bootstrap\css\bootstrap-reboot.rtl.min.css (9889 bytes)
- editTiledmap\bootstrap\css\bootstrap-reboot.rtl.min.css.map (63643 bytes)
- editTiledmap\bootstrap\css\bootstrap-utilities.css (96254 bytes)
- editTiledmap\bootstrap\css\bootstrap-utilities.css.map (250681 bytes)
- editTiledmap\bootstrap\css\bootstrap-utilities.min.css (74887 bytes)
- editTiledmap\bootstrap\css\bootstrap-utilities.min.css.map (163881 bytes)
- editTiledmap\bootstrap\css\bootstrap-utilities.rtl.css (96121 bytes)
- editTiledmap\bootstrap\css\bootstrap-utilities.rtl.css.map (250622 bytes)
- editTiledmap\bootstrap\css\bootstrap-utilities.rtl.min.css (74815 bytes)
- editTiledmap\bootstrap\css\bootstrap-utilities.rtl.min.css.map (163716 bytes)
- editTiledmap\bootstrap\css\bootstrap.css (267476 bytes)
- editTiledmap\bootstrap\css\bootstrap.css.map (658460 bytes)
- editTiledmap\bootstrap\css\bootstrap.min.css (220780 bytes)
- editTiledmap\bootstrap\css\bootstrap.min.css.map (568408 bytes)
- editTiledmap\bootstrap\css\bootstrap.rtl.css (267055 bytes)
- editTiledmap\bootstrap\css\bootstrap.rtl.css.map (658305 bytes)
- editTiledmap\bootstrap\css\bootstrap.rtl.min.css (220887 bytes)
- editTiledmap\bootstrap\css\bootstrap.rtl.min.css.map (567947 bytes)
- editTiledmap\bootstrap\js\bootstrap.bundle.js (208288 bytes)
- editTiledmap\bootstrap\js\bootstrap.bundle.js.map (448884 bytes)
- editTiledmap\bootstrap\js\bootstrap.bundle.min.js (80599 bytes)
- editTiledmap\bootstrap\js\bootstrap.bundle.min.js.map (333974 bytes)
- editTiledmap\bootstrap\js\bootstrap.esm.js (136243 bytes)
- editTiledmap\bootstrap\js\bootstrap.esm.js.map (305274 bytes)
- editTiledmap\bootstrap\js\bootstrap.esm.min.js (74135 bytes)
- editTiledmap\bootstrap\js\bootstrap.esm.min.js.map (222070 bytes)
- editTiledmap\bootstrap\js\bootstrap.js (145819 bytes)
- editTiledmap\bootstrap\js\bootstrap.js.map (306458 bytes)
- editTiledmap\bootstrap\js\bootstrap.min.js (60554 bytes)
- editTiledmap\bootstrap\js\bootstrap.min.js.map (217885 bytes)
- editTiledmap\style\index.css (3092 bytes)
- gameData\actor\zh.json (343 bytes)
- gameData\config.json (1417 bytes)
- gameData\gameData.bin (2069769 bytes)
- gameData\lang\zh.json (3037 bytes)
- gameData\mod\res.json (14826 bytes)
- gameData\task\start.json (341 bytes)
- gameData\task\start2.json (346 bytes)
- gameData\task\start3.json (346 bytes)
- img\brick.png (599 bytes)
- img\default\defaultHead.png (656 bytes)
- img\default\defHj.png (2323 bytes)
- img\default\defMjz.png (4698 bytes)
- img\default\defqt.png (3623 bytes)
- img\default\defXz.png (1346 bytes)
- img\default\gunDefIcon.png (2186 bytes)
- img\grass.png (813 bytes)
- img\icon\angle-left.png (303 bytes)
- img\icon\angle-right.png (297 bytes)
- img\icon\delete.png (355 bytes)
- img\icon\move.png (400 bytes)
- img\icon\update.png (307 bytes)
- img\Retina\roadTexture_01.png (1072 bytes)
- img\Retina\roadTexture_02.png (1912 bytes)
- img\Retina\roadTexture_03.png (1947 bytes)
- img\Retina\roadTexture_04.png (1660 bytes)
- img\Retina\roadTexture_05.png (1665 bytes)
- img\Retina\roadTexture_06.png (1239 bytes)
- img\Retina\roadTexture_07.png (1236 bytes)
- img\Retina\roadTexture_08.png (1155 bytes)
- img\Retina\roadTexture_09.png (1154 bytes)
- img\Retina\roadTexture_10.png (1340 bytes)
- img\Retina\roadTexture_11.png (1231 bytes)
- img\Retina\roadTexture_12.png (1215 bytes)
- img\Retina\roadTexture_13.png (1047 bytes)
- img\Retina\roadTexture_14.png (2013 bytes)
- img\Retina\roadTexture_15.png (2026 bytes)
- img\Retina\roadTexture_16.png (1721 bytes)
- img\Retina\roadTexture_17.png (1732 bytes)
- img\Retina\roadTexture_18.png (1229 bytes)
- img\Retina\roadTexture_19.png (1241 bytes)
- img\Retina\roadTexture_20.png (1152 bytes)
- img\Retina\roadTexture_21.png (1151 bytes)
- img\Retina\roadTexture_22.png (1935 bytes)
- img\Retina\roadTexture_23.png (1221 bytes)
- img\Retina\roadTexture_24.png (1226 bytes)
- img\Retina\roadTexture_25.png (970 bytes)
- img\Retina\roadTexture_26.png (970 bytes)
- img\Retina\roadTexture_27.png (1036 bytes)
- img\Retina\roadTexture_28.png (1036 bytes)
- img\Retina\roadTexture_29.png (1224 bytes)
- img\Retina\roadTexture_30.png (1245 bytes)
- img\Retina\roadTexture_31.png (1204 bytes)
- img\Retina\roadTexture_32.png (1222 bytes)
- img\Retina\roadTexture_33.png (1584 bytes)
- img\Retina\roadTexture_34.png (1652 bytes)
- img\Retina\roadTexture_35.png (1153 bytes)
- img\Retina\roadTexture_36.png (1154 bytes)
- img\Retina\roadTexture_37.png (970 bytes)
- img\Retina\roadTexture_38.png (970 bytes)
- img\Retina\roadTexture_39.png (1031 bytes)
- img\Retina\roadTexture_40.png (1031 bytes)
- img\Retina\roadTexture_41.png (1254 bytes)
- img\Retina\roadTexture_42.png (1250 bytes)
- img\Retina\roadTexture_43.png (1239 bytes)
- img\Retina\roadTexture_44.png (1239 bytes)
- img\Retina\roadTexture_45.png (1628 bytes)
- img\Retina\roadTexture_46.png (1605 bytes)
- img\Retina\roadTexture_47.png (1150 bytes)
- img\Retina\roadTexture_48.png (1153 bytes)
- img\Retina\roadTexture_49.png (1044 bytes)
- img\Retina\roadTexture_50.png (1036 bytes)
- img\Retina\roadTexture_51.png (1036 bytes)
- img\Retina\roadTexture_52.png (1685 bytes)
- img\Retina\roadTexture_53.png (1672 bytes)
- img\Retina\roadTexture_54.png (1710 bytes)
- img\Retina\roadTexture_55.png (1715 bytes)
- img\Retina\roadTexture_56.png (1204 bytes)
- img\Retina\roadTexture_57.png (1221 bytes)
- img\Retina\roadTexture_58.png (1222 bytes)
- img\Retina\roadTexture_59.png (1232 bytes)
- img\Retina\roadTexture_60.png (1055 bytes)
- img\Retina\roadTexture_61.png (1035 bytes)
- img\Retina\roadTexture_62.png (1031 bytes)
- img\Retina\roadTexture_63.png (1031 bytes)
- img\Retina\roadTexture_64.png (1704 bytes)
- img\Retina\roadTexture_65.png (1730 bytes)
- img\Retina\roadTexture_66.png (1765 bytes)
- img\Retina\roadTexture_67.png (1771 bytes)
- img\Retina\roadTexture_68.png (1225 bytes)
- img\Retina\roadTexture_69.png (1233 bytes)
- img\Retina\roadTexture_70.png (1234 bytes)
- img\Retina\roadTexture_71.png (1222 bytes)
- img\Retina\roadTexture_72.png (1048 bytes)
- img\Retina\roadTexture_73.png (1051 bytes)
- img\Retina\roadTexture_74.png (1042 bytes)
- img\Retina\roadTexture_75.png (1042 bytes)
- img\Retina\roadTexture_76.png (1797 bytes)
- img\Retina\roadTexture_77.png (1790 bytes)
- img\Retina\roadTexture_78.png (1892 bytes)
- img\Retina\roadTexture_79.png (1891 bytes)
- img\Retina\roadTexture_80.png (1223 bytes)
- img\Retina\roadTexture_81.png (1219 bytes)
- img\Retina\roadTexture_82.png (1312 bytes)
- img\Retina\roadTexture_83.png (1304 bytes)
- img\Retina\roadTexture_84.png (1095 bytes)
- img\Retina\roadTexture_85.png (1042 bytes)
- img\Retina\roadTexture_86.png (1036 bytes)
- img\Retina\roadTexture_87.png (1036 bytes)
- img\Retina\roadTexture_88.png (1841 bytes)
- img\Retina\roadTexture_89.png (1863 bytes)
- img\Retina\roadTexture_90.png (1990 bytes)
- img\Retina\roadTexture_91.png (2006 bytes)
- img\Retina\roadTexture_92.png (1232 bytes)
- img\Retina\roadTexture_93.png (1234 bytes)
- img\Retina\roadTexture_94.png (1329 bytes)
- img\Retina\roadTexture_95.png (1332 bytes)
- img\Retina\roadTexture_96.png (1086 bytes)
- index.html (8925 bytes)
- main.ec614c61eccdd3baa142.js (220610 bytes)
- plist\comm.plist (26246 bytes)
- plist\comm.png (311019 bytes)
- plist\csm2.plist (10102 bytes)
- plist\csm2.png (1113916 bytes)
- plist\info.plist (4031 bytes)
- plist\info.png (129423 bytes)
- plist\ui_bullet.plist (16173 bytes)
- plist\ui_bullet.png (122631 bytes)
- scene\allLevel\0.json (9178 bytes)
- scene\allLevel\1.json (1119 bytes)
- scene\allLevel\2.json (1679 bytes)
- scene\allLevel\3.json (2601 bytes)
- scene\script\level\0.js (2601 bytes)
- scene\script\selectALevel.js (6459 bytes)
- scene\script\startMenu.js (12943 bytes)
- scene\selectALevel.json (311 bytes)
- scene\start.json (307 bytes)
- script\core.js (3778 bytes)
- vendors.19a626655b21dd7ac64f.js (1465977 bytes)
- vendors.19a626655b21dd7ac64f.js.LICENSE.txt (5639 bytes)

## 🌐 访问游戏
部署完成后，访问: https://vcmrpbysnxzhqxfjvshf.functions.supabase.co/nebula-guardian
