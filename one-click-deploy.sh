# 星云守护 - 一键部署脚本
# 在任何终端中运行以下命令完成部署

# 方法1: 使用curl (Linux/macOS/Git Bash)
curl -X POST "https://vcmrpbysnxzhqxfjvshf.supabase.co/rest/v1/functions" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjbXJwYnlzbnh6cWh4amZ2c2hmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Mzk2NzcwNiwiZXhwIjoyMDc5NTQzNzA2fQ.xguaCBWLUtpu0Fd2dyftnAC6sV0TGehBkUKwBhBKgrQ" \
  -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjbXJwYnlzbnh6cWh4amZ2c2hmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Mzk2NzcwNiwiZXhwIjoyMDc5NTQzNzA2fQ.xguaCBWLUtpu0Fd2dyftnAC6sV0TGehBkUKwBhBKgrQ" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "nebula-guardian",
    "runtime": "deno",
    "verify_jwt": false,
    "entrypoint_path": "index.ts"
  }'

# 上传函数代码
curl -X PUT "https://vcmrpbysnxzhqxfjvshf.supabase.co/rest/v1/functions/nebula-guardian/body" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjbXJwYnlzbnh6cWh4amZ2c2hmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Mzk2NzcwNiwiZXhwIjoyMDc5NTQzNzA2fQ.xguaCBWLUtpu0Fd2dyftnAC6sV0TGehBkUKwBhBKgrQ" \
  -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjbXJwYnlzbnh6cWh4amZ2c2hmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Mzk2NzcwNiwiZXhwIjoyMDc5NTQzNzA2fQ.xguaCBWLUtpu0Fd2dyftnAC6sV0TGehBkUKwBhBKgrQ" \
  -H "Content-Type: text/plain" \
  --data-binary @supabase/functions/nebula-guardian/index.ts

# 方法2: 使用PowerShell (Windows)
$headers = @{
    "Authorization" = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjbXJwYnlzbnh6cWh4amZ2c2hmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Mzk2NzcwNiwiZXhwIjoyMDc5NTQzNzA2fQ.xguaCBWLUtpu0Fd2dyftnAC6sV0TGehBkUKwBhBKgrQ"
    "apikey" = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjbXJwYnlzbnh6cWh4amZ2c2hmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Mzk2NzcwNiwiZXhwIjoyMDc5NTQzNzA2fQ.xguaCBWLUtpu0Fd2dyftnAC6sV0TGehBkUKwBhBKgrQ"
    "Content-Type" = "application/json"
}

$functionData = @{
    "name" = "nebula-guardian"
    "runtime" = "deno"
    "verify_jwt" = $false
    "entrypoint_path" = "index.ts"
}

# 创建函数
Invoke-RestMethod -Uri "https://vcmrpbysnxzhqxfjvshf.supabase.co/rest/v1/functions" -Method POST -Headers $headers -Body ($functionData | ConvertTo-Json)

# 上传代码
$codeHeaders = @{
    "Authorization" = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjbXJwYnlzbnh6cWh4amZ2c2hmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Mzk2NzcwNiwiZXhwIjoyMDc5NTQzNzA2fQ.xguaCBWLUtpu0Fd2dyftnAC6sV0TGehBkUKwBhBKgrQ"
    "apikey" = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjbXJwYnlzbnh6cWh4amZ2c2hmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Mzk2NzcwNiwiZXhwIjoyMDc5NTQzNzA2fQ.xguaCBWLUtpu0Fd2dyftnAC6sV0TGehBkUKwBhBKgrQ"
    "Content-Type" = "text/plain"
}

$functionCode = Get-Content "supabase/functions/nebula-guardian/index.ts" -Raw
Invoke-RestMethod -Uri "https://vcmrpbysnxzhqxfjvshf.supabase.co/rest/v1/functions/nebula-guardian/body" -Method PUT -Headers $codeHeaders -Body $functionCode
