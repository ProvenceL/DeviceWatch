import * as deviceManage from './deviceManage';
import * as companyManage from './companyManage';
import * as checkManage from './checkManage';
import * as supervisoryReview from './supervisoryReview';

export const getAllDevice = deviceManage.getAllDevice;
export const getDeviceDetail = deviceManage.getDeviceDetail;
export const getDeviceCheckList = deviceManage.getDeviceCheckList;

export const getAllCompanyList = companyManage.getAllCompanyList;
export const getCompanyDetail = companyManage.getCompanyDetail;

export const getAllCheckList = checkManage.getAllCheckList;
export const getCheckDetail = checkManage.getCheckDetail;

export const getSupervisoryList = supervisoryReview.getSupervisoryList;
export const getSupervisoryDetail = supervisoryReview.getSupervisoryDetail;
