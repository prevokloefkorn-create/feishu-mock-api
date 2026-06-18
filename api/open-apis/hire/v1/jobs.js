// GET /open-apis/hire/v1/jobs
// 模拟飞书招聘职位列表接口，支持 page_size / page_token / job_status 参数
import { JOBS } from "../../../data/jobs.js";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ code: 405, msg: "Method Not Allowed" });
  }

  const { page_size = "20", page_token = "0", job_status } = req.query;

  const size = Math.min(parseInt(page_size) || 20, 20); // 最大20，模拟真实限制
  const offset = parseInt(page_token) || 0;

  // 按 job_status 过滤（1=招聘中）
  let filtered = JOBS;
  if (job_status !== undefined) {
    filtered = JOBS.filter((j) => String(j.job_status) === String(job_status));
  }

  const pageItems = filtered.slice(offset, offset + size);
  const hasMore = offset + size < filtered.length;
  const nextPageToken = hasMore ? String(offset + size) : "";

  return res.status(200).json({
    code: 0,
    msg: "ok",
    data: {
      items: pageItems.map((j) => ({
        job_id: j.job_id,
        job_name: j.job_name,
        department: j.department,
        job_status: j.job_status,
      })),
      page_token: nextPageToken,
      has_more: hasMore,
      total: filtered.length,
    },
  });
}
