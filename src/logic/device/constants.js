//设备详情，注册信息
export const deviceRegInfo = [
  {name:"设备档案号",serKey:"devDocCode",isCompanyInfo:false,isDetailInfo:true },
  {name:"使用登记证编号",serKey:"devRegCode",isCompanyInfo:false,isDetailInfo:true },

  {name:"设备名称",serKey:"devName", isCompanyInfo:false },
  {name:"设备种类",serKey:"devTypeValue", isCompanyInfo:false },
  {name:"设备类别",serKey:"devKindValue", isCompanyInfo:false },
  {name:"设备品种",serKey:"devCategoryValue", isCompanyInfo:false },
  {name:"型号（规格）",serKey:"", isCompanyInfo:false },
  {name:"使用单位名称",serKey:"name", isCompanyInfo:true },
  {name:"使用单位地址",serKey:"detailAddress", isCompanyInfo:true },
  {name:"使用单位统一社会信用代码",serKey:"socialCode", isCompanyInfo:true },
  {name:"设备使用地址",serKey:"insAddress", isCompanyInfo:false },
];
//设备详情，技术参数
export const technicalInfo = [
  {name:"是否资质单位",serKey:""},
];
//设备详情，设备检验信息
export const deviceTestInfo = [
  {name:"检验日期",serKey:"checkDate"},
  {name:"检验机构名称",serKey:"checkOrg"},
  {name:"检验类别",serKey:"checkType"},
  {name:"检验报告编号",serKey:"reportNo"},
  {name:"检验结论",serKey:"checkResult"},
];