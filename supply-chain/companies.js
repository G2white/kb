/* ============================================================
   供应链公司索引数据（单一数据源，驱动首页筛选）
   —— 加一家公司：复制一个对象、填字段、再写对应详情页即可
   注意：下面 3 条均为【示例占位数据】，仅用于预览效果
   ============================================================ */
window.COMPANIES = [
  {
    slug: "skydroid",
    name: "SKYDROID",
    nameZh: "云卓科技（福建）",
    region: "中国 · 福建泉州",
    summary: "全球无人系统方案商，自研数据链/图传、飞控、云台相机与整机；国家级专精特新「小巨人」。",
    capabilities: ["数据链/图传", "飞控", "云台/相机", "整机研发", "SDR 射频", "SMT 贴片"],
    categories:   ["遥控器", "数据链", "云台/吊舱", "无人机整机", "飞控/配件"],
    scenarios:    ["低空物流", "巡检/测绘", "安防/应急", "无人车船"],
    detail: "companies/skydroid.html",
    source: "2026 产品画册",
    addedDate: "2026-06-05"
  },
  {
    slug: "xinhuo",
    name: "SensorMicro",
    nameZh: "芯火微电子",
    region: "中国 · 武汉",
    summary: "高德红外(002414)全资子公司，红外热成像探测器/机芯/模组，覆盖制冷与非制冷，无人机载荷等多领域。",
    capabilities: ["红外探测器设计", "晶圆制造", "封装测试", "整机集成", "制冷/非制冷成像"],
    categories:   ["红外探测器", "红外机芯", "红外模组"],
    scenarios:    ["无人机载荷", "安防监控", "工业测温", "智能驾驶", "气体检漏"],
    detail: "companies/xinhuo.html",
    source: "2026 综合画册",
    addedDate: "2026-06-05"
  },
  {
    slug: "qichuang",
    name: "TritronAI",
    nameZh: "奇创芯源",
    region: "中国 · 山东烟台",
    summary: "「蜻蜓」C-UAS 反无人机系统，多传感器融合探测识别与处置（雷达/光电/射频/激光/拦截）。",
    capabilities: ["雷达探测", "光电跟踪", "射频侦测/干扰", "AI 识别", "激光/拦截处置"],
    categories:   ["反无系统", "探测雷达", "光电转台", "侦干设备", "拦截装备"],
    scenarios:    ["低空安防", "反无人机", "要地防护", "应急处置"],
    detail: "companies/qichuang.html",
    source: "蜻蜓 C-UAS 产品介绍",
    addedDate: "2026-06-05"
  },
  {
    slug: "ruichuan",
    name: "Reebot",
    nameZh: "锐川机器人",
    region: "中国 · 深圳",
    summary: "行业级多旋翼/VTOL 无人机整机平台与光电吊舱，链路/云台/飞控/动力全链条自研。",
    capabilities: ["整机研发", "链路", "云台", "飞控", "动力系统", "软件算法"],
    categories:   ["多旋翼无人机", "VTOL 无人机", "光电吊舱"],
    scenarios:    ["巡检", "测绘", "应急救援", "环保监测", "安防", "系留应用"],
    detail: "companies/ruichuan.html",
    source: "2026 产品画册",
    addedDate: "2026-06-05"
  },
  {
    slug: "raefly",
    name: "RAEFLY",
    nameZh: "雷迅飞行",
    region: "中国 · 广州",
    summary: "VTOL 垂直起降无人机平台供应商（CP900/VT240/VT290/VT370），含技术服务与执照培训。",
    capabilities: ["整机研发", "VTOL 平台", "SMT 贴片", "二次开发", "技术服务/培训"],
    categories:   ["多旋翼无人机", "VTOL 无人机"],
    scenarios:    ["航测", "巡检", "森林防火", "应急救援", "高空喊话", "物资投送"],
    detail: "companies/raefly.html",
    source: "2026 产品宣传册",
    addedDate: "2026-06-05"
  },
  {
    slug: "xianfei",
    name: "XIANFEI",
    nameZh: "先飞机器人",
    region: "中国 · 南京",
    summary: "光电吊舱/三轴云台与灯光秀编队无人机；AI 多目标检测跟踪、激光测距/照明、4K 全彩夜视。",
    capabilities: ["光电吊舱研发", "三轴增稳云台", "AI 目标检测跟踪", "激光测距/照明", "夜视成像"],
    categories:   ["光电吊舱", "云台相机", "编队无人机"],
    scenarios:    ["无人机载荷", "侦察巡检", "安防", "灯光秀表演"],
    detail: "companies/xianfei.html",
    source: "2026 产品合集",
    addedDate: "2026-06-05"
  }
];
