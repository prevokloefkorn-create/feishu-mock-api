// 候选人数据，talent_id → 姓名+基本信息
const TALENTS = {
  // 市场部候选人
  t001: { talent_id: "t001", name: "张晓雨", email: "zhang.xiaoyu@example.com", phone: "138****0001" },
  t002: { talent_id: "t002", name: "李明远", email: "li.mingyuan@example.com", phone: "139****0002" },
  t003: { talent_id: "t003", name: "王思琦", email: "wang.siqi@example.com", phone: "150****0003" },
  t004: { talent_id: "t004", name: "陈佳慧", email: "chen.jiahui@example.com", phone: "151****0004" },
  t005: { talent_id: "t005", name: "赵文博", email: "zhao.wenbo@example.com", phone: "152****0005" },
  t006: { talent_id: "t006", name: "刘欣然", email: "liu.xinran@example.com", phone: "153****0006" },
  t007: { talent_id: "t007", name: "孙晨曦", email: "sun.chenxi@example.com", phone: "155****0007" },
  t008: { talent_id: "t008", name: "周雅婷", email: "zhou.yating@example.com", phone: "156****0008" },

  // 技术部候选人
  t009: { talent_id: "t009", name: "吴俊杰", email: "wu.junjie@example.com", phone: "157****0009" },
  t010: { talent_id: "t010", name: "郑浩然", email: "zheng.haoran@example.com", phone: "158****0010" },
  t011: { talent_id: "t011", name: "冯志远", email: "feng.zhiyuan@example.com", phone: "159****0011" },
  t012: { talent_id: "t012", name: "蒋天宇", email: "jiang.tianyu@example.com", phone: "130****0012" },
  t013: { talent_id: "t013", name: "韩宇翔", email: "han.yuxiang@example.com", phone: "131****0013" },
  t014: { talent_id: "t014", name: "杨晓峰", email: "yang.xiaofeng@example.com", phone: "132****0014" },
  t015: { talent_id: "t015", name: "林子涵", email: "lin.zihan@example.com", phone: "133****0015" },
  t016: { talent_id: "t016", name: "许嘉豪", email: "xu.jiahao@example.com", phone: "134****0016" },
  t017: { talent_id: "t017", name: "何宇轩", email: "he.yuxuan@example.com", phone: "135****0017" },
  t018: { talent_id: "t018", name: "谢晓东", email: "xie.xiaodong@example.com", phone: "136****0018" },

  // 产品部候选人
  t019: { talent_id: "t019", name: "罗思远", email: "luo.siyuan@example.com", phone: "137****0019" },
  t020: { talent_id: "t020", name: "高梦琪", email: "gao.mengqi@example.com", phone: "138****0020" },
  t021: { talent_id: "t021", name: "梁晓燕", email: "liang.xiaoyan@example.com", phone: "139****0021" },
  t022: { talent_id: "t022", name: "宋子轩", email: "song.zixuan@example.com", phone: "150****0022" },

  // 销售部候选人
  t023: { talent_id: "t023", name: "唐浩宇", email: "tang.haoyu@example.com", phone: "151****0023" },
  t024: { talent_id: "t024", name: "秦雨桐", email: "qin.yutong@example.com", phone: "152****0024" },
  t025: { talent_id: "t025", name: "邓嘉怡", email: "deng.jiayi@example.com", phone: "153****0025" },
  t026: { talent_id: "t026", name: "曾子晴", email: "zeng.ziqing@example.com", phone: "155****0026" },

  // HR/财务/运营/其他
  t027: { talent_id: "t027", name: "傅雨欣", email: "fu.yuxin@example.com", phone: "156****0027" },
  t028: { talent_id: "t028", name: "叶思澄", email: "ye.sicheng@example.com", phone: "157****0028" },
  t029: { talent_id: "t029", name: "方博文", email: "fang.bowen@example.com", phone: "158****0029" },
  t030: { talent_id: "t030", name: "钱逸飞", email: "qian.yifei@example.com", phone: "159****0030" },
  t031: { talent_id: "t031", name: "程晓颖", email: "cheng.xiaoying@example.com", phone: "130****0031" },
  t032: { talent_id: "t032", name: "沈子墨", email: "shen.zimo@example.com", phone: "131****0032" },
  t033: { talent_id: "t033", name: "卢雨晴", email: "lu.yuqing@example.com", phone: "132****0033" },
  t034: { talent_id: "t034", name: "姜思远", email: "jiang.siyuan@example.com", phone: "133****0034" },
  t035: { talent_id: "t035", name: "戴晨曦", email: "dai.chenxi@example.com", phone: "134****0035" },
  t036: { talent_id: "t036", name: "余嘉琪", email: "yu.jiaqi@example.com", phone: "135****0036" },
  t037: { talent_id: "t037", name: "夏雨菲", email: "xia.yufei@example.com", phone: "136****0037" },
  t038: { talent_id: "t038", name: "邹晓宇", email: "zou.xiaoyu@example.com", phone: "137****0038" },
  t039: { talent_id: "t039", name: "龚思远", email: "gong.siyuan@example.com", phone: "138****0039" },
  t040: { talent_id: "t040", name: "潘子轩", email: "pan.zixuan@example.com", phone: "139****0040" },
  t041: { talent_id: "t041", name: "魏晓涵", email: "wei.xiaohan@example.com", phone: "150****0041" },
  t042: { talent_id: "t042", name: "蔡雨萱", email: "cai.yuxuan@example.com", phone: "151****0042" },
};

module.exports = { TALENTS };
