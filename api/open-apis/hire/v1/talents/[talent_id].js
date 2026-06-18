// GET /open-apis/hire/v1/talents/[talent_id]
// 模拟飞书招聘候选人详情接口
import { TALENTS } from "../../../../data/talents.js";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ code: 405, msg: "Method Not Allowed" });
  }

  const { talent_id } = req.query;
  const talent = TALENTS[talent_id];

  if (!talent) {
    return res.status(200).json({
      code: 1254000,
      msg: "talent not found",
      data: null,
    });
  }

  return res.status(200).json({
    code: 0,
    msg: "ok",
    data: {
      talent: {
        talent_id: talent.talent_id,
        name: talent.name,
        email: talent.email,
        phone: talent.phone,
      },
    },
  });
}
