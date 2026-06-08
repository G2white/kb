/* ============================================================
   供应链公司索引数据（单一数据源，驱动首页筛选）
   —— 加一家公司：复制一个对象、填字段、再写对应详情页即可
   标签原则：能力 / 产品类别 / 应用场景，每个维度只留最核心的 ≤3 个
   ============================================================ */
window.COMPANIES = [
  {
    slug: "skydroid",
    name: "SKYDROID",
    nameZh: "云卓科技（福建）",
    region: "中国 · 福建泉州",
    summary: "无人系统全栈部件商：遥控器 / 图传链路 / 相机吊舱 / 飞控 / 整机一应俱全；国家级专精特新「小巨人」。",
    capabilities: ["图传/数传", "飞控", "云台/相机"],
    categories:   ["遥控器", "图传", "云台/吊舱", "飞控/配件", "无人机整机"],
    scenarios:    ["低空物流", "巡检/测绘", "无人车船"],
    detail: "companies/skydroid.html",
    source: "2026 产品画册",
    addedDate: "2026-06-05"
  },
  {
    slug: "xinhuo",
    name: "SensorMicro",
    nameZh: "芯火微电子",
    region: "中国 · 武汉",
    summary: "红外热成像探测器/机芯/模组供应商，制冷与非制冷全覆盖；高德红外(002414)子公司。",
    capabilities: ["红外探测器设计", "晶圆制造", "封装测试"],
    categories:   ["红外探测器", "红外机芯", "红外模组"],
    scenarios:    ["无人机载荷", "安防监控", "工业测温"],
    detail: "companies/xinhuo.html",
    source: "2026 综合画册",
    addedDate: "2026-06-05"
  },
  {
    slug: "qichuang",
    name: "TritronAI",
    nameZh: "奇创芯源",
    region: "中国 · 山东烟台",
    summary: "「蜻蜓」C-UAS 反无人机整体方案商，多传感器探测识别 + 干扰/激光/拦截处置。",
    capabilities: ["雷达探测", "射频侦测/干扰", "激光/拦截处置"],
    categories:   ["反无系统", "侦干设备", "拦截装备"],
    scenarios:    ["低空安防", "要地防护", "应急处置"],
    detail: "companies/qichuang.html",
    source: "蜻蜓 C-UAS 产品介绍",
    addedDate: "2026-06-05"
  },
  {
    slug: "ruichuan",
    name: "Reebot",
    nameZh: "锐川机器人",
    region: "中国 · 深圳",
    summary: "行业级多旋翼/VTOL 无人机整机平台供应商，链路/云台/飞控/动力全链条自研。",
    capabilities: ["整机研发", "飞控", "动力系统"],
    categories:   ["多旋翼无人机", "VTOL 无人机", "光电吊舱"],
    scenarios:    ["巡检", "测绘", "应急救援"],
    detail: "companies/ruichuan.html",
    source: "2026 产品画册",
    addedDate: "2026-06-05"
  },
  {
    slug: "raefly",
    name: "RAEFLY",
    nameZh: "雷迅飞行",
    region: "中国 · 广州",
    summary: "VTOL 垂直起降无人机整机供应商（CP900 / VT 系列），含技术服务与执照培训。",
    capabilities: ["整机研发", "VTOL 平台", "技术服务/培训"],
    categories:   ["多旋翼无人机", "VTOL 无人机"],
    scenarios:    ["航测", "巡检", "应急救援"],
    detail: "companies/raefly.html",
    source: "2026 产品宣传册",
    addedDate: "2026-06-05"
  },
  {
    slug: "xianfei",
    name: "XIANFEI",
    nameZh: "先飞机器人",
    region: "中国 · 南京",
    summary: "无人机光电吊舱/三轴云台供应商，AI 检测跟踪 + 激光测距 + 4K 全彩夜视；兼营灯光秀编队机。",
    capabilities: ["光电吊舱研发", "AI 目标检测跟踪", "夜视成像"],
    categories:   ["光电吊舱", "云台相机", "编队无人机"],
    scenarios:    ["无人机载荷", "侦察巡检", "灯光秀表演"],
    detail: "companies/xianfei.html",
    source: "2026 产品合集",
    addedDate: "2026-06-05"
  }
];
