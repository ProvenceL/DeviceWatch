const SET_DEVICE_LIST = 'device/setDeviceList';
const SET_DEVICE_LIST_MORE = 'device/setDeviceListMore';
const SET_DEVICE_DETAIL = 'device/setDeviceDetail';
const SET_DEVICE_CHECK_LIST = 'device/setDeviceCheckList';

const initState = {
    deviceList: {},
    deviceDetail:{},
    deviceCheckList:[],
};

export default function reducer(state = initState, action) {
    let listName="",newState={},newList=[];
    switch (action.type) {
        case SET_DEVICE_LIST:
            listName = action.devTypeId === 0 ? "deviceList" : "deviceList" + action.devTypeId;
            newState = {};
            newState[listName] = action.list;
            return Object.assign({}, state, newState);
        case SET_DEVICE_LIST_MORE:
            listName = action.devTypeId === 0 ? "deviceList" : "deviceList" + action.devTypeId;
            newList = state[listName] ? state[listName].list.concat(action.list.list) : [];
            newState[listName] = Object.assign({}, action.list, { list: newList });
            return Object.assign({}, state, newState);
        case SET_DEVICE_DETAIL:
            return Object.assign({}, state, {deviceDetail: action.deviceDetail});
        case SET_DEVICE_CHECK_LIST:
            return Object.assign({}, state, {deviceCheckList: action.deviceCheckList});

        default:
            return state;

    }
}

export const setDeviceList = (list,devTypeId) => window.$dispatch({ type: SET_DEVICE_LIST, list, devTypeId });
export const setDeviceMore = (list,devTypeId) => window.$dispatch({ type: SET_DEVICE_LIST_MORE, list, devTypeId });
export const setDeviceDetail = (deviceDetail) => window.$dispatch({ type: SET_DEVICE_DETAIL, deviceDetail });
export const setDeviceCheckList = (deviceCheckList) => window.$dispatch({ type: SET_DEVICE_CHECK_LIST, deviceCheckList });
