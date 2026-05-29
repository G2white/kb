/* ============================================================
   供应链公司索引数据（单一数据源，驱动首页筛选）
   —— 加一家公司：复制一个对象、填字段、再写对应详情页即可
   注意：下面 3 条均为【示例占位数据】，仅用于预览效果
   ============================================================ */
window.COMPANIES = [
  {
    slug: "acme-motors",
    name: "Acme Motors",
    nameZh: "艾克米动力",
    region: "中国 · 浙江",
    summary: "专注小型 UTV / 电动越野车的电驱系统总成，含电机、电控、线束一体化方案。",
    capabilities: ["电机", "电控", "线束", "总成装配"],
    categories:   ["传动系统", "电控系统"],
    scenarios:    ["农业", "娱乐越野"],
    detail: "companies/acme-motors.html",
    source: "2025 广交会",
    addedDate: "2026-05-20"
  },
  {
    slug: "ironframe-chassis",
    name: "IronFrame Chassis",
    nameZh: "铁架底盘",
    region: "中国 · 山东",
    summary: "重型管阵式车架与底盘焊接件 OEM，擅长高强钢焊接与 CNC 加工，支持小批量打样。",
    capabilities: ["焊接", "CNC 加工", "冲压", "钣金"],
    categories:   ["车架", "底盘"],
    scenarios:    ["农业", "工业运输", "巡逻"],
    detail: "companies/ironframe-chassis.html",
    source: "2025 上海车展",
    addedDate: "2026-05-22"
  },
  {
    slug: "terra-tire",
    name: "Terra Tire",
    nameZh: "泰拉轮胎",
    region: "中国 · 山东",
    summary: "全地形 UTV/ATV 轮胎制造商，自有橡胶配方与硫化产线，可定制花纹与尺寸。",
    capabilities: ["橡胶成型", "硫化", "模具开发"],
    categories:   ["轮胎", "底盘"],
    scenarios:    ["娱乐越野", "农业"],
    detail: "companies/terra-tire.html",
    source: "2025 广交会",
    addedDate: "2026-05-25"
  }
];
