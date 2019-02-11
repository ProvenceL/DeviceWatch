import { setCheckDetail,setCheckList,setCheckMore } from '../ducks/check';
/**
 * 获取所有计划列表
 * @param {object} conditions 参数对象 { page = 0, size = 0 }；
 * @param {boolean} isMore 是否加载更多
 * @returns {Promise} ajax promise result
 */
export const getAllCheckList = (conditions={},isMore=false) => {
  let { page = 1, size = 10 } = conditions;
  let url = "/api/check/plan/list?" + "page=" + page + "&size=" + size;
  name !== "" ? url += `&name=${name}` : null;
  console.log("getAllCheckList current page is ",page);
  try {
    return ajaxGet(url).then((data) => {
      isMore?setCheckMore(data,0):
      setCheckList(data,0);
    });
  } catch (error) {
    console.log("getAllCheckList error",error);
  }
};

/**
 * 获取计划详情
 * @param {number} id - 计划主键id
 * @returns {null} null
 */
export const getCheckDetail = async (id) => {
  let url = "/api/check/plan/detail/"+id;
  try {
    await ajaxGet(url).then((data) => {
      setCheckDetail(data)
    });
  } catch (error) {
    console.log("getCheckDetail error",error);
  }
};
