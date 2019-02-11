import React, { Component } from 'react';
import { List } from 'antd-mobile';
import {companyBasicDetail} from "../../../logic/company";
let { Item } = List;
export default class BasicDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { companyDetail } = this.props;
    return <List className="basic-detail-list">
      {companyBasicDetail.map((item,index)=>{
        return <Item key={`${item.serKey}-${index}`} extra={companyDetail[item.serKey]}>{item.name}</Item>;
      })}
    </List>
  }
}