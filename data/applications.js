// 工具：生成若干天前的时间戳（毫秒）
function daysAgo(n) {
  return Date.now() - n * 24 * 60 * 60 * 1000;
}

// 阶段枚举（对应飞书招聘真实阶段名）
const STAGES = {
  RESUME: "简历筛选",
  WRITTEN: "笔试",
  INTERVIEW_1: "初试",
  INTERVIEW_2: "复试",
  OFFER: "Offer沟通",
  HIRED: "待入职",
};

// 投递数据
// 每条记录：application_id, job_id, talent_id, stage, stage_entered_at(ms), status
// 健康度规则：
//   🔴 预警：近7天新增简历≤3 OR 阶段停留>14天
//   🟡 关注：阶段停留7-14天
//   🟢 正常：其他
const APPLICATIONS = [

  // ══ job_001 市场总监 ══ 场景：预警（近7天简历不足+有候选人卡14天以上）
  { application_id: "app_001", job_id: "job_001", talent_id: "t001", stage: STAGES.RESUME,      stage_entered_at: daysAgo(20) },
  { application_id: "app_002", job_id: "job_001", talent_id: "t002", stage: STAGES.INTERVIEW_1, stage_entered_at: daysAgo(16) },
  // 近7天仅1条新增（app_003）→ 触发预警
  { application_id: "app_003", job_id: "job_001", talent_id: "t003", stage: STAGES.RESUME,      stage_entered_at: daysAgo(3) },

  // ══ job_002 品牌营销经理 ══ 场景：关注（有候选人停留10天）
  { application_id: "app_004", job_id: "job_002", talent_id: "t004", stage: STAGES.RESUME,      stage_entered_at: daysAgo(2) },
  { application_id: "app_005", job_id: "job_002", talent_id: "t005", stage: STAGES.INTERVIEW_1, stage_entered_at: daysAgo(10) },
  { application_id: "app_006", job_id: "job_002", talent_id: "t006", stage: STAGES.RESUME,      stage_entered_at: daysAgo(4) },
  { application_id: "app_007", job_id: "job_002", talent_id: "t007", stage: STAGES.WRITTEN,     stage_entered_at: daysAgo(6) },

  // ══ job_003 新媒体运营 ══ 场景：正常（近7天多份简历，阶段停留短）
  { application_id: "app_008", job_id: "job_003", talent_id: "t008", stage: STAGES.RESUME,      stage_entered_at: daysAgo(1) },
  { application_id: "app_009", job_id: "job_003", talent_id: "t001", stage: STAGES.RESUME,      stage_entered_at: daysAgo(2) },
  { application_id: "app_010", job_id: "job_003", talent_id: "t002", stage: STAGES.INTERVIEW_1, stage_entered_at: daysAgo(3) },
  { application_id: "app_011", job_id: "job_003", talent_id: "t003", stage: STAGES.RESUME,      stage_entered_at: daysAgo(4) },
  { application_id: "app_012", job_id: "job_003", talent_id: "t004", stage: STAGES.WRITTEN,     stage_entered_at: daysAgo(5) },

  // ══ job_004 市场活动策划 ══ 场景：预警（阶段停留超14天）
  { application_id: "app_013", job_id: "job_004", talent_id: "t005", stage: STAGES.INTERVIEW_2, stage_entered_at: daysAgo(18) },
  { application_id: "app_014", job_id: "job_004", talent_id: "t006", stage: STAGES.RESUME,      stage_entered_at: daysAgo(5) },
  { application_id: "app_015", job_id: "job_004", talent_id: "t007", stage: STAGES.RESUME,      stage_entered_at: daysAgo(6) },

  // ══ job_005 前端工程师 ══ 场景：正常
  { application_id: "app_016", job_id: "job_005", talent_id: "t009", stage: STAGES.RESUME,      stage_entered_at: daysAgo(1) },
  { application_id: "app_017", job_id: "job_005", talent_id: "t010", stage: STAGES.INTERVIEW_1, stage_entered_at: daysAgo(2) },
  { application_id: "app_018", job_id: "job_005", talent_id: "t011", stage: STAGES.RESUME,      stage_entered_at: daysAgo(3) },
  { application_id: "app_019", job_id: "job_005", talent_id: "t012", stage: STAGES.RESUME,      stage_entered_at: daysAgo(4) },
  { application_id: "app_020", job_id: "job_005", talent_id: "t013", stage: STAGES.WRITTEN,     stage_entered_at: daysAgo(5) },
  { application_id: "app_021", job_id: "job_005", talent_id: "t014", stage: STAGES.RESUME,      stage_entered_at: daysAgo(6) },

  // ══ job_006 后端工程师（Java）══ 场景：关注（停留8天）
  { application_id: "app_022", job_id: "job_006", talent_id: "t015", stage: STAGES.INTERVIEW_2, stage_entered_at: daysAgo(8) },
  { application_id: "app_023", job_id: "job_006", talent_id: "t016", stage: STAGES.RESUME,      stage_entered_at: daysAgo(3) },
  { application_id: "app_024", job_id: "job_006", talent_id: "t017", stage: STAGES.RESUME,      stage_entered_at: daysAgo(5) },
  { application_id: "app_025", job_id: "job_006", talent_id: "t018", stage: STAGES.INTERVIEW_1, stage_entered_at: daysAgo(2) },

  // ══ job_007 算法工程师 ══ 场景：预警（近7天0条新增）
  { application_id: "app_026", job_id: "job_007", talent_id: "t009", stage: STAGES.OFFER,       stage_entered_at: daysAgo(30) },
  { application_id: "app_027", job_id: "job_007", talent_id: "t010", stage: STAGES.INTERVIEW_2, stage_entered_at: daysAgo(25) },
  // 最近一条简历是10天前，近7天无新增 → 预警

  // ══ job_008 DevOps工程师 ══ 场景：正常
  { application_id: "app_028", job_id: "job_008", talent_id: "t011", stage: STAGES.RESUME,      stage_entered_at: daysAgo(1) },
  { application_id: "app_029", job_id: "job_008", talent_id: "t012", stage: STAGES.RESUME,      stage_entered_at: daysAgo(2) },
  { application_id: "app_030", job_id: "job_008", talent_id: "t013", stage: STAGES.INTERVIEW_1, stage_entered_at: daysAgo(4) },
  { application_id: "app_031", job_id: "job_008", talent_id: "t014", stage: STAGES.RESUME,      stage_entered_at: daysAgo(6) },

  // ══ job_009 测试工程师 ══ 场景：关注（停留12天）
  { application_id: "app_032", job_id: "job_009", talent_id: "t015", stage: STAGES.INTERVIEW_1, stage_entered_at: daysAgo(12) },
  { application_id: "app_033", job_id: "job_009", talent_id: "t016", stage: STAGES.RESUME,      stage_entered_at: daysAgo(3) },
  { application_id: "app_034", job_id: "job_009", talent_id: "t017", stage: STAGES.RESUME,      stage_entered_at: daysAgo(5) },

  // ══ job_010 产品经理（C端）══ 场景：正常
  { application_id: "app_035", job_id: "job_010", talent_id: "t019", stage: STAGES.RESUME,      stage_entered_at: daysAgo(1) },
  { application_id: "app_036", job_id: "job_010", talent_id: "t020", stage: STAGES.INTERVIEW_1, stage_entered_at: daysAgo(3) },
  { application_id: "app_037", job_id: "job_010", talent_id: "t021", stage: STAGES.RESUME,      stage_entered_at: daysAgo(5) },
  { application_id: "app_038", job_id: "job_010", talent_id: "t022", stage: STAGES.WRITTEN,     stage_entered_at: daysAgo(6) },

  // ══ job_011 产品经理（B端）══ 场景：预警（停留16天）
  { application_id: "app_039", job_id: "job_011", talent_id: "t019", stage: STAGES.OFFER,       stage_entered_at: daysAgo(16) },
  { application_id: "app_040", job_id: "job_011", talent_id: "t020", stage: STAGES.RESUME,      stage_entered_at: daysAgo(8) },

  // ══ job_012 产品设计师 ══ 场景：正常
  { application_id: "app_041", job_id: "job_012", talent_id: "t021", stage: STAGES.RESUME,      stage_entered_at: daysAgo(2) },
  { application_id: "app_042", job_id: "job_012", talent_id: "t022", stage: STAGES.INTERVIEW_1, stage_entered_at: daysAgo(4) },
  { application_id: "app_043", job_id: "job_012", talent_id: "t019", stage: STAGES.RESUME,      stage_entered_at: daysAgo(6) },

  // ══ job_013 大客户销售 ══ 场景：预警（近7天仅2条）
  { application_id: "app_044", job_id: "job_013", talent_id: "t023", stage: STAGES.RESUME,      stage_entered_at: daysAgo(3) },
  { application_id: "app_045", job_id: "job_013", talent_id: "t024", stage: STAGES.RESUME,      stage_entered_at: daysAgo(6) },

  // ══ job_014 区域销售经理 ══ 场景：关注（停留9天）
  { application_id: "app_046", job_id: "job_014", talent_id: "t025", stage: STAGES.INTERVIEW_2, stage_entered_at: daysAgo(9) },
  { application_id: "app_047", job_id: "job_014", talent_id: "t026", stage: STAGES.RESUME,      stage_entered_at: daysAgo(4) },
  { application_id: "app_048", job_id: "job_014", talent_id: "t023", stage: STAGES.RESUME,      stage_entered_at: daysAgo(5) },
  { application_id: "app_049", job_id: "job_014", talent_id: "t024", stage: STAGES.WRITTEN,     stage_entered_at: daysAgo(2) },

  // ══ job_015 销售助理 ══ 场景：正常
  { application_id: "app_050", job_id: "job_015", talent_id: "t025", stage: STAGES.RESUME,      stage_entered_at: daysAgo(1) },
  { application_id: "app_051", job_id: "job_015", talent_id: "t026", stage: STAGES.RESUME,      stage_entered_at: daysAgo(2) },
  { application_id: "app_052", job_id: "job_015", talent_id: "t023", stage: STAGES.INTERVIEW_1, stage_entered_at: daysAgo(3) },
  { application_id: "app_053", job_id: "job_015", talent_id: "t024", stage: STAGES.RESUME,      stage_entered_at: daysAgo(4) },
  { application_id: "app_054", job_id: "job_015", talent_id: "t025", stage: STAGES.RESUME,      stage_entered_at: daysAgo(5) },

  // ══ job_016 HR BP ══ 场景：正常
  { application_id: "app_055", job_id: "job_016", talent_id: "t027", stage: STAGES.RESUME,      stage_entered_at: daysAgo(2) },
  { application_id: "app_056", job_id: "job_016", talent_id: "t028", stage: STAGES.INTERVIEW_1, stage_entered_at: daysAgo(4) },
  { application_id: "app_057", job_id: "job_016", talent_id: "t029", stage: STAGES.RESUME,      stage_entered_at: daysAgo(6) },

  // ══ job_017 招聘专员 ══ 场景：预警（停留15天+近7天仅1条）
  { application_id: "app_058", job_id: "job_017", talent_id: "t030", stage: STAGES.INTERVIEW_2, stage_entered_at: daysAgo(15) },
  { application_id: "app_059", job_id: "job_017", talent_id: "t031", stage: STAGES.RESUME,      stage_entered_at: daysAgo(5) },

  // ══ job_018 财务经理 ══ 场景：关注（停留11天）
  { application_id: "app_060", job_id: "job_018", talent_id: "t032", stage: STAGES.INTERVIEW_1, stage_entered_at: daysAgo(11) },
  { application_id: "app_061", job_id: "job_018", talent_id: "t033", stage: STAGES.RESUME,      stage_entered_at: daysAgo(3) },
  { application_id: "app_062", job_id: "job_018", talent_id: "t034", stage: STAGES.RESUME,      stage_entered_at: daysAgo(5) },

  // ══ job_019 成本分析师 ══ 场景：正常
  { application_id: "app_063", job_id: "job_019", talent_id: "t035", stage: STAGES.RESUME,      stage_entered_at: daysAgo(1) },
  { application_id: "app_064", job_id: "job_019", talent_id: "t036", stage: STAGES.RESUME,      stage_entered_at: daysAgo(3) },
  { application_id: "app_065", job_id: "job_019", talent_id: "t037", stage: STAGES.INTERVIEW_1, stage_entered_at: daysAgo(5) },
  { application_id: "app_066", job_id: "job_019", talent_id: "t038", stage: STAGES.RESUME,      stage_entered_at: daysAgo(6) },

  // ══ job_020~030 其余岗位（混合场景）══
  { application_id: "app_067", job_id: "job_020", talent_id: "t039", stage: STAGES.RESUME,      stage_entered_at: daysAgo(2) },
  { application_id: "app_068", job_id: "job_020", talent_id: "t040", stage: STAGES.RESUME,      stage_entered_at: daysAgo(4) },
  { application_id: "app_069", job_id: "job_020", talent_id: "t041", stage: STAGES.INTERVIEW_1, stage_entered_at: daysAgo(13) }, // 关注
  { application_id: "app_070", job_id: "job_021", talent_id: "t042", stage: STAGES.RESUME,      stage_entered_at: daysAgo(1) },
  { application_id: "app_071", job_id: "job_021", talent_id: "t039", stage: STAGES.RESUME,      stage_entered_at: daysAgo(3) },
  { application_id: "app_072", job_id: "job_022", talent_id: "t040", stage: STAGES.INTERVIEW_2, stage_entered_at: daysAgo(17) }, // 预警
  { application_id: "app_073", job_id: "job_023", talent_id: "t041", stage: STAGES.RESUME,      stage_entered_at: daysAgo(6) },
  { application_id: "app_074", job_id: "job_023", talent_id: "t042", stage: STAGES.RESUME,      stage_entered_at: daysAgo(4) },
  { application_id: "app_075", job_id: "job_024", talent_id: "t039", stage: STAGES.OFFER,       stage_entered_at: daysAgo(19) }, // 预警
  { application_id: "app_076", job_id: "job_025", talent_id: "t040", stage: STAGES.RESUME,      stage_entered_at: daysAgo(2) },
  { application_id: "app_077", job_id: "job_025", talent_id: "t041", stage: STAGES.RESUME,      stage_entered_at: daysAgo(5) },
  { application_id: "app_078", job_id: "job_026", talent_id: "t042", stage: STAGES.INTERVIEW_1, stage_entered_at: daysAgo(7) }, // 关注临界
  { application_id: "app_079", job_id: "job_026", talent_id: "t039", stage: STAGES.RESUME,      stage_entered_at: daysAgo(3) },
  { application_id: "app_080", job_id: "job_027", talent_id: "t040", stage: STAGES.RESUME,      stage_entered_at: daysAgo(1) },
  { application_id: "app_081", job_id: "job_027", talent_id: "t041", stage: STAGES.RESUME,      stage_entered_at: daysAgo(2) },
  { application_id: "app_082", job_id: "job_027", talent_id: "t042", stage: STAGES.INTERVIEW_1, stage_entered_at: daysAgo(4) },
  { application_id: "app_083", job_id: "job_028", talent_id: "t039", stage: STAGES.RESUME,      stage_entered_at: daysAgo(3) },
  { application_id: "app_084", job_id: "job_028", talent_id: "t040", stage: STAGES.RESUME,      stage_entered_at: daysAgo(5) },
  { application_id: "app_085", job_id: "job_029", talent_id: "t041", stage: STAGES.INTERVIEW_2, stage_entered_at: daysAgo(9) }, // 关注
  { application_id: "app_086", job_id: "job_029", talent_id: "t042", stage: STAGES.RESUME,      stage_entered_at: daysAgo(4) },
  { application_id: "app_087", job_id: "job_030", talent_id: "t039", stage: STAGES.RESUME,      stage_entered_at: daysAgo(2) },
  { application_id: "app_088", job_id: "job_030", talent_id: "t040", stage: STAGES.RESUME,      stage_entered_at: daysAgo(4) },
  { application_id: "app_089", job_id: "job_030", talent_id: "t041", stage: STAGES.INTERVIEW_1, stage_entered_at: daysAgo(6) },
];

module.exports = { APPLICATIONS };
