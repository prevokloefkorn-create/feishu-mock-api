// GET /open-apis/hire/v1/applications
// 模拟飞书招聘投递列表接口，支持 job_id / page_size / page_token 参数
import { APPLICATIONS } from "../../../data/applications.js";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ code: 405, msg: "Method Not Allowed" });
  }

  const { job_id, page_size = "20", page_token = "0" } = req.query;

  const size = Math.min(parseInt(page_size) || 20, 20);
  const offset = parseInt(page_token) || 0;

  // 按 job_id 过滤
  let filtered = APPLICATIONS;
  if (job_id) {
    filtered = APPLICATIONS.filter((a) => a.job_id === job_id);
  }

  const pageItems = filtered.slice(offset, offset + size);
  const hasMore = offset + size < filtered.length;
  const nextPageToken = hasMore ? String(offset + size) : "";

  return res.status(200).json({
    code: 0,
    msg: "ok",
    data: {
      items: pageItems.map((a) => ({
        application_id: a.application_id,
        job_id: a.job_id,
        talent_id: a.talent_id,
        stage: a.stage,
        stage_entered_at: a.stage_entered_at,
        create_time: a.stage_entered_at, // 用进入阶段时间模拟投递创建时间
      })),
      page_token: nextPageToken,
      has_more: hasMore,
      total: filtered.length,
    },
  });
}
