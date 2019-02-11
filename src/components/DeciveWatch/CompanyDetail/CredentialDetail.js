import React, { Component } from 'react';
import { List } from 'antd-mobile';
import {companyCredentialDetail} from "../../../logic/company";
let { Item } = List;
export default class CredentialDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { companyDetail } = this.props;
    return <List className="credential-detail-list">
      {companyCredentialDetail.map((item,index)=>{
        return <Item key={`${item.serKey}-${index}`} extra={companyDetail[item.serKey]}>{item.name}</Item>;
      })}
    </List>
  }
}