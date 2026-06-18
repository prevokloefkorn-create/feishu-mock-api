# 飞书招聘 Mock API

模拟飞书招聘 API 的三个接口 + token 认证，用于在飞书多维表格工作流①中调试，无需开通真实权限。

## 接口列表

部署后，将飞书工作流①中所有 `open.feishu.cn` 替换为你的 Vercel 域名（如 `feishu-mock-api.vercel.app`）。

### 1. 获取 Token
```
POST /open-apis/auth/v3/tenant_access_token/internal
Content-Type: application/json

{
  "app_id": "cli_a8341a00e095d00e",
  "app_secret": "任意值"
}

返回：
{
  "code": 0,
  "msg": "ok",
  "tenant_access_token": "mock_token_xxx",
  "expire": 7200
}
```

### 2. 获取职位列表
```
GET /open-apis/hire/v1/jobs?page_size=20&job_status=1

返回 30 个职位，分两页（page_size 最大 20，和真实 API 一致）
分页：返回 page_token，has_more=true 时继续传 page_token 翻页
```

### 3. 获取投递列表
```
GET /open-apis/hire/v1/applications?job_id=job_001&page_size=20

按 job_id 过滤返回对应投递
```

### 4. 获取候选人详情
```
GET /open-apis/hire/v1/talents/t001

返回候选人姓名、邮箱、电话
```

## 数据说明

共 30 个职位，9 个部门，42 个候选人，89 条投递记录。

健康度场景覆盖：

| 场景 | 职位举例 |
|------|------|
| 🔴 预警（近7天简历≤3条） | job_001 市场总监、job_013 大客户销售 |
| 🔴 预警（阶段停留>14天） | job_004 市场活动策划、job_011 产品经理B端 |
| 🔴 预警（近7天无新增） | job_007 算法工程师 |
| 🟡 关注（停留7-14天） | job_002 品牌营销经理、job_006 后端工程师 |
| 🟢 正常 | job_003 新媒体运营、job_005 前端工程师 |

## 部署步骤

1. 把本项目 push 到 GitHub
2. 登录 [vercel.com](https://vercel.com)，Import 该仓库
3. 一键部署，获得形如 `https://feishu-mock-api-xxx.vercel.app` 的域名
4. 在飞书工作流①中替换域名，其余路径完全不变

## 飞书工作流①修改说明

| 节点 | 原 URL | 改为 |
|------|------|------|
| 节点2 获取Token | `https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal` | `https://你的域名/open-apis/auth/v3/tenant_access_token/internal` |
| 节点3 拉职位 | `https://open.feishu.cn/open-apis/hire/v1/jobs` | `https://你的域名/open-apis/hire/v1/jobs` |
| 节点5 拉投递 | `https://open.feishu.cn/open-apis/hire/v1/applications` | `https://你的域名/open-apis/hire/v1/applications` |
| 节点7 拉候选人 | `https://open.feishu.cn/open-apis/hire/v1/talents/{talent_id}` | `https://你的域名/open-apis/hire/v1/talents/{talent_id}` |

Authorization Header 保持不变，Mock 服务不校验 token 值。
