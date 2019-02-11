import React, { Component } from 'react';
import { List,WhiteSpace } from 'antd-mobile';
import {deviceTestInfo} from "../../../logic/device";
let { Item } = List;
let { Brief } = Item;
export default class DeviceTestInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { deviceCheckList } = this.props;
    return <List className="device-check-list">
      {deviceCheckList.map((checkItem,index)=>{
        return this._renderDevice(checkItem,index);
      })}
    </List>
  }

  _renderDevice = (checkItem, index) => {
    return <div key={index}>
      <WhiteSpace size="sm" style={{backgroundColor:"#f5f5f9"}}/>
      <Item multipleLine >
        {deviceTestInfo.map((item) => {
          return <Brief key={`${item.serKey}`} className="device-checkItem-item">
            <div className="checkItem-left">{item.name}</div>
            <div className="checkItem-right">{checkItem[item.serKey]}</div>
          </Brief>
        })}
      </Item>
    </div>
  }
}