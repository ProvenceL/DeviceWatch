
const SET_COMPANY_LIST = 'company/setCompanyList';
const SET_COMPANY_DETAIL = 'company/setCompanyDetail';
const SET_MORE_COMPANY_LIST = 'company/setCompanyMore';

const initState = {
  companyList: {},
  companyDetail:{},
};

export default function reducer(state = initState, action) {
  let listName="",newState={},newList=[];
  switch (action.type) {
    case SET_COMPANY_LIST:
      listName = action.companyType === 0 ? "companyList" : "companyList" + action.companyType;
      newState ={};
      newState[listName] = action.list;
      return Object.assign({}, state, newState);
    case SET_MORE_COMPANY_LIST:
      listName = action.companyType === 0 ? "companyList" : "companyList" + action.companyType;
      newList = state[listName]?state[listName].list.concat(action.list.list):[];
      newState[listName] = Object.assign({},action.list,{list:newList});
      return Object.assign({}, state, newState);
    case SET_COMPANY_DETAIL:
      return Object.assign({}, state, { companyDetail: action.companyDetail });
    default:
      return state;

  }
}

export const setCompanyList = (list,companyType) => window.$dispatch({ type: SET_COMPANY_LIST, list, companyType });
export const setCompanyMore = (list,companyType) => window.$dispatch({ type: SET_MORE_COMPANY_LIST, list, companyType });
export const setCompanyDetail = (companyDetail) => window.$dispatch({ type: SET_COMPANY_DETAIL, companyDetail });
