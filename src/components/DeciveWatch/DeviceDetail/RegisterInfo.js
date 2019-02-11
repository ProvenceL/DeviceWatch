import React, { Component } from 'react';
import { List,WhiteSpace } from 'antd-mobile';
import { deviceRegInfo } from "../../../logic/device";

const { Item } = List;
const TOP_ITEM_NUM = 2;
export default class BasicDetail extends Component {
  render() {
    let { deviceDetail={} } = this.props;
    let { deviceInfo={},useCompany={} } = deviceDetail;
    let ItemList = [];
    deviceRegInfo.forEach((item,index)=>{
      let extraInfo = "";
      if (item.isDetailInfo) {
        extraInfo = deviceDetail[item.serKey];
      } else if (item.isCompanyInfo) {
        extraInfo = useCompany[item.serKey];
      } else {
        extraInfo = deviceInfo[item.serKey];
      }
      if (index+1 === TOP_ITEM_NUM) {
        ItemList.push(<Item key={`${item.serKey}-${index}`} extra={extraInfo}>{item.name}</Item>);
        ItemList.push(<WhiteSpace key="white-space" style={{backgroundColor:"#f5f5f9"}}/>);
      } else {
        ItemList.push(<Item key={`${item.serKey}-${index}`} extra={extraInfo}>{item.name}</Item>);
      }
    });
    return <List className="device-reg-list">
      {ItemList}
    </List>
  }
}