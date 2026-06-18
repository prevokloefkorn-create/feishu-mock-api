// POST /open-apis/auth/v3/tenant_access_token/internal
// 模拟飞书 tenant_access_token 接口
export default function handler(req, res) {
  // 只允许 POST
  if (req.method !== "POST") {
    return res.status(405).json({ code: 405, msg: "Method Not Allowed" });
  }

  const { app_id, app_secret } = req.body || {};

  // 简单校验：app_id 必须传
  if (!app_id) {
    return res.status(200).json({
      code: 10003,
      msg: "app_id is required",
      tenant_access_token: "",
      expire: 0,
    });
  }

  // 返回固定假 token，有效期 7200 秒
  return res.status(200).json({
    code: 0,
    msg: "ok",
    tenant_access_token: "mock_token_" + Date.now(),
    expire: 7200,
  });
}
