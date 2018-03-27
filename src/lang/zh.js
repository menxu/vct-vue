export default {
  app: {
    // name: 'VCT-管理配置系统'
    name: 'MX的系统'
  },
  route: {
    dashboard: '首页',
    customer: "客户管理",
    balance: "客户账户管理",
    order: "客户行程订单",
    price: "价格管理",
    flowPackage: "流量套餐管理",
    masterCard: "预置主卡管理",
    viceCard: "副卡信息管理",
    viceCardConfig: "副卡配置管理",
    viceCardPLMN: "副卡PLMN配置",
  },
  navbar: {
    home: '主页',
    logOut: '退出登录',
    dashboard: '首页',
    github: '项目地址',
    screenfull: '全屏',
    theme: '换肤'
  },
  login: {
    title: '系统登录',
    logIn: '登录',
    username: '账号',
    password: '密码',
    any: '随便填',
    thirdparty: '第三方登录',
    thirdpartyTips: '本地不能模拟，请结合自己业务进行模拟！！！'
  },
  customer: {
    id: "ID",
    phoneNumber: "手机号",
    name: "名字",
    realName: "显示名",
    email: "邮箱",
    countryCode: "所属国家",
    currency: "使用币种",
    status: "状态",
  },
  balance: {
    id: "ID",
    tsid: "tsid",
    date: "更新时间",
    balance: "余额",
    presenter: "赠送余额",
    currency: "币种",
    customerId: "客户ID",
    customerPhoneNumber: "客户手机号",
    customerRealName: "客户名",
  },
  country_price: {
    id: "ID",
    countryCode: "国家",
    customerId: "客户ID",
    customerRealName: "客户名",
    currency: "币种",
    price: "日价格",
    maxData: "最大流量(KB)",
    speedLimit: "超额限速(KBPS)",
    describe: "说明"
  },
  order: {
    id: "ID",
    identifier: "订单编号",
    customerID: "客户ID",
    customerRealName: "客户名",
    tsCount: "设备数量",
    type: "订单类型",
    countryCode: "国家列表",
    beginDate: "行程开始时间",
    endDate: "行程结束时间",
    total: "总价",
    currency: "币种",
    status: "状态",
  },
  orderTrip: {
    orderID: "订单ID",
    tsid: "设备号",
    countryCode: "国家编码",
    tripDate: "日期",
    price: "单价",
    customerID: "客户ID",
    maxData: "最大流量",
    speedLimit: "超额限速",
    status: "状态",
  },

  country: {
    id: "ID",
    countryCode: "国家编码",
    countryName: "国家名",
    continentCode: "所属洲",
    timeZone: "时区",
    nameCn: "中文名",
    longItude: "经度",
    latItude: "纬度",
    status: "状态",
  },

  operator: {
    id: "ID",
    operatorCode: "运营商编号",
    operatorNameEn: "名称",
    operatorNameCn: "中文名称",
    countryCode: "所属国家",
    mcc: "MCC",
    mnc: "MNC",
    apn: "APN",
    level: "优先级",
    status: "状态",
    groupSize: "分组系数",
  },

  country_operator: {
    id: "ID",
    roamCountryCode: "国家编码",
    roamCountryCodeCn: "国家名称",
    operatorCode: "运营商编码",
    operatorCodeCn: "运营商名称",
    level: "优先级",
    status: "状态",
  },

  operator_prefer: {
    id: "ID",
    operatorCode: "运营商编码",
    operatorCodeCn: "运营商名称",
    roamMcc: "接入MCC",
    pPlmn: "PPLMN",
    fPlmn: "FPLMN",
  },

  used_net: {
    id: "ID",
    operatorCode: "运营商编码",
    operatorCodeCn: "运营商名称",
    packageId: "套餐ID",
    packageCn: "套餐名",
    mcc: "MCC",
    usedNet: "使用网络策略",
  },

  terminal_sim: {
    id: "ID",
    tsid: "终端",
    imsi: "IMSI",
    date: "开始时间",
    beatTime: "最后一次心跳时间",
    vCountryCode: "使用国家",
  },

  terminal: {
    id: "ID",
    tsid: "编号",
    ssid: "SSID",
    wifiPassword: "密码",
    mac: "MAC",
    batch: "批次",
    sversion: "版本",
    status: "状态",
    imei: "IMEI",
    upLog: "上传日志",
  },

  terminal_version: {
    id: "ID",
    describe: "版本说明",
    oVersion: "源版本号",
    tVersion: "目标版本号",
    downUrl: "目标版本路径",
    type: "升级方式",
    status: "状态",
    terminalList: "终端列表",
  },

  flow_balance: {
    id: "ID",
    tsid: "终端",
    allowFlow: "可用流量",
    validityDate: "有效期",
    note: "说明",
  },

  simpool: {
    id: "ID",
    spid: "卡池编号",
    ip: "代理IP",
    port: "代理端口",
    sumIp: "卡池IP",
    webPort: "卡池端口",
    version: "版本号",
  },

  simcard: {
    id: "ID",
    imsi: "IMSI码",
    number: "卡号",
    iccid: "ICCID",
    pin: "PIN码",
    operatorCode: "运营商编码",
    mcNumber: "短信中心号码",
    packageId: "流量套餐ID",
    offPeriod: "账期日",
    suStained: "账期持结时间",
    simMeProtocol: "协议类型",
    status: "状态",
    cpStatus: "卡位状态",
    cpId: "卡池编号",
    cpIP: "卡池编号",
    cpChannelId: "卡池通道编号",
    countryCode: "国家编码",
    provinceCode: "省编码",
    expiryDate: "有效期截卡时间",
    insertDate: "插入时间",
    usedVpn: "是否支持VPN",
    vpnIP: "VPNIP",
    vpnName: "VPN名称",
    vpnPass: "VPNPASS",
    softType: "是否是软卡",
    ki: "KI",
    opc: "OPC",
    op: "OP",
    apn: "APN",
    openDate: "开卡日期",
    note: "备注",
  },

  sim_group: {
    id: "ID",
    tsid: "终端",
    allowFlow: "可用流量",
    validityDate: "有效期",
    note: "说明",
  },

  simpackage: {
    id: "ID",
    name: "套餐名",
    operatorCode: "运营商编码",
    maxFlow: "最大本地流量（KB)",
    maxRoamFlow: "最大漫游流量(KB)",
    level: "优先级",
    mccs: "支持的漫游国家",
    status: "状态",
  },

  ready_terminal_sim: {
    id: "ID",
    tsid: "终端编号",
    imsi: "主卡IMSI",
    lastStatus: "卡指定前状态",
    insertDate: "预置时间",
    type: "预置类型",
  },

  /**
   * 副卡信息管理
   列表： IMSI  卡号  ICCID 运营商编码 国家编码  短信中心号码  状态
        IMSI  NUMBER  ICCID OPERATORCODE  COUNTRYCODE MCNUMBER  STATUS
   0：预置卡、1：临时卡、2：作废
   查询条件： IMSI(模糊查询）
   操作： 无
   批量修改： 修改状态（下拉字典）
   private int id ;
   private long imsi;
   private String number;
   private String iccid;
   private int operatorCode;
   private int countryCode;
   private String mcNumber; //短信中心号码
   private Date rechargeTime; //最后充值时间
   private Double balance;  //账户余额
   private int status; //状态
   private String detail;  //详情，加密的卡信息
   */
  channel_card: {
    id: "ID",
    imsi: "IMSI",
    number: "卡号",
    iccid: "ICCID",
    operatorCode: "运营商编码",
    countryCode: "国家编码",
    mcNumber: "短信中心号码",
    status: "状态",
  },

  /**
   * 副卡配置管理
   列表： TSID  IMSI  状态
        TSID  IMSI  Status
   0:已同步；1：新增；2：删除
   查询  TSID（模糊查询）
   IMSI（模糊查询）
   状态（下拉字典）
   操作  无
   批量操作： 添加  tsid,IMSI,状态
   修改  状态  （只能修改状态字段）
   删除
   private int id ;
   private int tsid;
   private Long imsi;
   private Integer status;
   */
  terminal_channel: {
    id: "ID",
    tsid: "TSID",
    imsi: "IMSI",
    status: "状态",
  },

  /**
   * 副卡PLMN配置
   列表： 运营商编码 MCC rplmn pplmn fplmn
          operatorcode  mcc rplmn pplmn fplmn
   查询： 运营商编码（模糊查询）
   MCC（精确匹配）
   操作： 修改 (只能修改rplmn，pplmn，fplmn
   批量操作： 添加：运营商编码、MCC、RPLMN、PPLMN、FPLMN
   删除：
   private int id ;
   private int operatorCode;
   private String mcc;
   private String rplmn;
   private String pplmn;
   private String fplmn;
   */
  channel_card_prefer: {
    id: "ID",
    operatorCode: "运营商编码",
    mcc: "MCC",
    rplmn: "rplmn",
    pplmn: "pplmn",
    fplmn: "fplmn",
  },

  errorLog: {
    tips: '请点击右上角bug小图标',
    description: '现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。',
    documentation: '文档介绍',
    username: '请输入正确的用户名',
    passwordLength: '密码不能小于5位',
  },
  theme: {
    change: '换肤',
    documentation: '换肤文档',
    tips: 'Tips: 它区别于 navbar 上的 theme-pick, 是两种不同的换肤方法，各自有不同的应用场景，具体请参考文档。'
  }
}
