
const SET_SUPERVISORY_LIST = 'supervisory/setSupervisoryList';
const SET_SUPERVISORY_DETAIL = 'supervisory/setSupervisoryDetail';
const SET_MORE_SUPERVISORY_LIST = 'supervisory/setSupervisoryMore';

const initState = {
  supervisoryList: {},
  supervisoryDetail:{},
};

export default function reducer(state = initState, action) {
  let listName="",newState={},newList=[];
  switch (action.type) {
    case SET_SUPERVISORY_LIST:
      listName = action.supervisoryType === 0 ? "supervisoryList" : "supervisoryList" + action.supervisoryType;
      newState ={};
      newState[listName] = action.list;
      return Object.assign({}, state, newState);
    case SET_MORE_SUPERVISORY_LIST:
      listName = action.supervisoryType === 0 ? "supervisoryList" : "supervisoryList" + action.supervisoryType;
      newList = state[listName]?state[listName].list.concat(action.list.list):[];
      newState[listName] = Object.assign({},action.list,{list:newList});
      return Object.assign({}, state, newState);
    case SET_SUPERVISORY_DETAIL:
      return Object.assign({}, state, { supervisoryDetail: action.supervisoryDetail });
    default:
      return state;

  }
}

export const setSupervisoryList = (list,supervisoryType) => window.$dispatch({ type: SET_SUPERVISORY_LIST, list, supervisoryType });
export const setSupervisoryMore = (list,supervisoryType) => window.$dispatch({ type: SET_MORE_SUPERVISORY_LIST, list, supervisoryType });
export const setSupervisoryDetail = (supervisoryDetail) => window.$dispatch({ type: SET_SUPERVISORY_DETAIL, supervisoryDetail });
