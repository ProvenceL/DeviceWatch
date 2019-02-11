import { setSupervisoryList,setSupervisoryDetail,setSupervisoryMore } from '../ducks/supervisory';
/**
 * 获取所有监督检查列表
 * @param {object} conditions 参数对象 { page = 0, size = 0 }；
 * @param {boolean} isMore 是否加载更多
 * @returns {Promise} ajax promise result
 */
export const getSupervisoryList = (conditions={},isMore=false) => {
  let { page = 1, size = 10 } = conditions;
  let url = "/api/check/detail/list?" + "page=" + page + "&size=" + size;
  console.log("getSupervisoryList current page is ",page);
  try {
    return ajaxGet(url).then((data) => {
      isMore?setSupervisoryMore(data,0):
      setSupervisoryList(data,0);
    });
  } catch (error) {
    console.log("getSupervisoryList error",error);
  }
};

/**
 * 获取监督检查详情
 * @param {number} id - 计划主键id
 * @returns {null} null
 */
export const getSupervisoryDetail = async (id) => {
  let url = "/api/check/plan/detail/"+id;
  try {
    await ajaxGet(url).then((data) => {
      setSupervisoryDetail(data)
    });
  } catch (error) {
    console.log("getSupervisoryDetail error",error);
  }
};
