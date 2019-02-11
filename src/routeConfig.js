import MainPage from './containers/DeciveWatch/MainPage';
import StatisticlAnalysis from './containers/DeciveWatch/StatisticlAnalysis';
import CompanyManage from './containers/DeciveWatch/CompanyManage';
import CompanyDetail from './containers/DeciveWatch/CompanyDetail';
import DeviceManage from './containers/DeciveWatch/DeviceManage';
import DeviceDetail from './containers/DeciveWatch/DeviceDetail';
import CheckManage from './containers/DeciveWatch/CheckManage';
import CheckDetail from './containers/DeciveWatch/CheckDetail';
import SupervisoryReview from './containers/DeciveWatch/SupervisoryReview';
import SupervisoryDetail from "./components/DeciveWatch/SupervisoryDetail/ProduceCheckList";


export const routeMap = {
  deviceWatch:'/deviceWatch',
  statisticlAnalysis:'/statisticlAnalysis',
  companyManage:'/companyManage',
  companyDetail:'/companyDetail',
  deviceManage:'/deviceManage',
  deviceDetail:'/deviceDetail',
  checkManage:'/checkManage',
  checkDetail:'/checkDetail',
  supervisoryReview:'/supervisoryReview',
  example:'/example',
};
const routeConfig = {
  [routeMap.deviceWatch]:MainPage,//智慧市场监管
  [routeMap.statisticlAnalysis]:StatisticlAnalysis,//统计分析
  [routeMap.companyManage]:CompanyManage,//企业管理
  [routeMap.companyDetail]:CompanyDetail,//企业详情
  [routeMap.deviceManage]:DeviceManage,//设备管理
  [routeMap.deviceDetail]:DeviceDetail,//设备详情
  [routeMap.checkManage]:CheckManage,//任务管理
  [routeMap.checkDetail]:CheckDetail,//任务详情
  [routeMap.supervisoryReview]:SupervisoryReview,//监督检查
  [routeMap.example]:SupervisoryDetail,//example
};

export default routeConfig;
