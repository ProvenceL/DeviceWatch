
const SET_CHECK_LIST = 'check/setCheckList';
const SET_CHECK_DETAIL = 'check/setCheckDetail';
const SET_MORE_CHECK_LIST = 'check/setCheckMore';

const initState = {
  checkList: {},
  checkDetail:{},
};

export default function reducer(state = initState, action) {
  let listName="",newState={},newList=[];
  switch (action.type) {
    case SET_CHECK_LIST:
      listName = action.checkType === 0 ? "checkList" : "checkList" + action.checkType;
      newState ={};
      newState[listName] = action.list;
      return Object.assign({}, state, newState);
    case SET_MORE_CHECK_LIST:
      listName = action.checkType === 0 ? "checkList" : "checkList" + action.checkType;
      newList = state[listName]?state[listName].list.concat(action.list.list):[];
      newState[listName] = Object.assign({},action.list,{list:newList});
      return Object.assign({}, state, newState);
    case SET_CHECK_DETAIL:
      return Object.assign({}, state, { checkDetail: action.checkDetail });
    default:
      return state;

  }
}

export const setCheckList = (list,checkType) => window.$dispatch({ type: SET_CHECK_LIST, list, checkType });
export const setCheckMore = (list,checkType) => window.$dispatch({ type: SET_MORE_CHECK_LIST, list, checkType });
export const setCheckDetail = (checkDetail) => window.$dispatch({ type: SET_CHECK_DETAIL, checkDetail });
