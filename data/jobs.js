// 模拟职位数据
// 覆盖场景：正常 / 关注（阶段停留7-14天）/ 预警（近7天简历≤3 或 停留>14天）
const JOBS = [
  // ── 市场部 ──────────────────────────────────
  { job_id: "job_001", job_name: "市场总监", department: "市场部", job_status: 1 },
  { job_id: "job_002", job_name: "品牌营销经理", department: "市场部", job_status: 1 },
  { job_id: "job_003", job_name: "新媒体运营", department: "市场部", job_status: 1 },
  { job_id: "job_004", job_name: "市场活动策划", department: "市场部", job_status: 1 },

  // ── 技术部 ──────────────────────────────────
  { job_id: "job_005", job_name: "前端工程师", department: "技术部", job_status: 1 },
  { job_id: "job_006", job_name: "后端工程师（Java）", department: "技术部", job_status: 1 },
  { job_id: "job_007", job_name: "算法工程师", department: "技术部", job_status: 1 },
  { job_id: "job_008", job_name: "DevOps工程师", department: "技术部", job_status: 1 },
  { job_id: "job_009", job_name: "测试工程师", department: "技术部", job_status: 1 },

  // ── 产品部 ──────────────────────────────────
  { job_id: "job_010", job_name: "产品经理（C端）", department: "产品部", job_status: 1 },
  { job_id: "job_011", job_name: "产品经理（B端）", department: "产品部", job_status: 1 },
  { job_id: "job_012", job_name: "产品设计师", department: "产品部", job_status: 1 },

  // ── 销售部 ──────────────────────────────────
  { job_id: "job_013", job_name: "大客户销售", department: "销售部", job_status: 1 },
  { job_id: "job_014", job_name: "区域销售经理", department: "销售部", job_status: 1 },
  { job_id: "job_015", job_name: "销售助理", department: "销售部", job_status: 1 },

  // ── 人力资源部 ──────────────────────────────
  { job_id: "job_016", job_name: "HR BP", department: "人力资源部", job_status: 1 },
  { job_id: "job_017", job_name: "招聘专员", department: "人力资源部", job_status: 1 },

  // ── 财务部 ──────────────────────────────────
  { job_id: "job_018", job_name: "财务经理", department: "财务部", job_status: 1 },
  { job_id: "job_019", job_name: "成本分析师", department: "财务部", job_status: 1 },

  // ── 运营部 ──────────────────────────────────
  { job_id: "job_020", job_name: "用户运营", department: "运营部", job_status: 1 },
  { job_id: "job_021", job_name: "内容运营", department: "运营部", job_status: 1 },
  { job_id: "job_022", job_name: "数据运营", department: "运营部", job_status: 1 },

  // ── 法务部 ──────────────────────────────────
  { job_id: "job_023", job_name: "法务专员", department: "法务部", job_status: 1 },

  // ── 供应链部 ─────────────────────────────────
  { job_id: "job_024", job_name: "采购经理", department: "供应链部", job_status: 1 },
  { job_id: "job_025", job_name: "物流专员", department: "供应链部", job_status: 1 },

  // ── 客服部 ──────────────────────────────────
  { job_id: "job_026", job_name: "客服主管", department: "客服部", job_status: 1 },
  { job_id: "job_027", job_name: "客服专员", department: "客服部", job_status: 1 },

  // ── 行政部 ──────────────────────────────────
  { job_id: "job_028", job_name: "行政专员", department: "行政部", job_status: 1 },

  // ── 数据部 ──────────────────────────────────
  { job_id: "job_029", job_name: "数据分析师", department: "数据部", job_status: 1 },
  { job_id: "job_030", job_name: "数据工程师", department: "数据部", job_status: 1 },
];

module.exports = { JOBS };
