import {setDeviceList,setDeviceMore,setDeviceDetail,setDeviceCheckList} from '../ducks/device';

export const getAllDevice = (conditions={},isMore=false)=>{
  let { devTypeId = 0, page = 1, size = 10 } = conditions;
  let url = "/api/device/register/info/list?" + "page=" + page + "&size=" + size;
  devTypeId !== "" && devTypeId !== 0 ? url += `&devTypeId=${devTypeId}` : null;
  console.log("getAllDevice the url is ",url);
  try {
    return ajaxGet(url).then((data) => {
      isMore?setDeviceMore(data,devTypeId):
      setDeviceList(data,devTypeId);
    });
  } catch (error) {
    console.log("getAllDevice error",error);
  }
};

/**
 * 获取设备详情
 * @param {number} id - 企业主键id
 * @returns {null} null
 */
export const getDeviceDetail = async (id) => {
  let url = "/api/device/register/info/findDetail/"+id;
  try {
    let data =  await ajaxGet(url);
    await getDeviceCheckList(data.devBaseId);
    await setDeviceDetail(data);
  } catch (error) {
    console.log("getDeviceDetail error",error);
  }
};

/**
 * 获取设备历史检查记录
 * @param {number} id - 企业主键id
 * @returns {null} null
 */
export const getDeviceCheckList = async (id) => {
  let url = "/api/device/check/info/getListByDevBaseId/"+id;
  try {
    await ajaxGet(url).then((data) => {
      setDeviceCheckList(data)
    });
  } catch (error) {
    console.log("getDeviceCheckList error",error);
  }
};
