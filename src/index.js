import React from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { HashRouter , Route, hashHistory } from 'react-router-dom';
import reducers from './ducks';
import 'service';
import './theme/index.less';
import routeConfig,{routeMap} from './routeConfig';

import {Alert} from "./components/Common/Alert";
import {Confirm} from "./components/Common/Confirm";

let store = createStore(reducers);
window.$getState = store.getState;
window.$dispatch = store.dispatch;
window.routeMap=routeMap;
ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename='/'>
      <div>
        {renderRoute(routeConfig)}
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

function renderRoute(routeMap){
  let keys = Object.keys(routeMap);
  return keys.map((key,index)=><Route key={index} path={key} component={routeMap[key]} />)
}
window.goRoute(window.routeMap.deviceWatch);

window.alert = Alert;
window.confirm = Confirm;
