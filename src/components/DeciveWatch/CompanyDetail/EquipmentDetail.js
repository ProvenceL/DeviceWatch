import React, { Component } from 'react';
import { List } from 'antd-mobile';
import {companyEquipmentDetail} from "../../../logic/company";
let { Item } = List;
let { Brief } = Item;
export default class EquipmentDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { deviceList } = this.props;
    return <List className="equipment-detail-list">
      {deviceList.map((device,index)=>{
        return this._renderDevice(device,index);
      })}
    </List>
  }

  _renderDevice = (device,index) => {
    return <Item 
      multipleLine
      key={index}
      thumb="https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png">
      {companyEquipmentDetail.map((item)=>{
        return <Brief key={`${item.serKey}`} className="equipment-device-item">
          <div className="device-left">{item.name}</div>
          <div className="device-right">{device[item.serKey]}</div>
        </Brief>
      })}
    </Item>
  }
}