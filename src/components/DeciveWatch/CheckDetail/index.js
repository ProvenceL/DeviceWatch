import React from 'react';
import { NavBar, Icon, WhiteSpace, List, SegmentedControl } from 'antd-mobile';

let { Item } = List;
let { Brief } = Item;
export default class CheckDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { checkDetail } = this.props;
    let { checkDetailList } = checkDetail;
    console.warn("checkDetail", checkDetail);
    return <div>
      <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => history.back()}>任务详情</NavBar>
      <WhiteSpace />
      <List className="check-detail-list">
        <Item className="check-detail-date" extra={`${checkDetail.startDate} 至 ${checkDetail.endDate}`}>
          检查日期：
        </Item>
        <Item multipleLine wrap>
          检查内容描述： <Brief>{checkDetail.content}</Brief>
        </Item>
        <Item multipleLine wrap>
          检查设备类型： <Brief>subtitle</Brief>
        </Item>
        <Item multipleLine className="check-detail-item">
          受检单位：
          <SegmentedControl
            values={['全部', '已检查', '未检查']}
            className="check-detail-segment"
            onChange={this._onChange}
            onValueChange={this._onValueChange}
          />
        </Item>
        <WhiteSpace size="sm" style={{ backgroundColor: "#f5f5f9" }} />
        {checkDetailList.map((checkItem,index) => {
          let {deviceCompany} = checkItem;
          return <Item key={`${checkItem.id}-${index}`} multipleLine extra={checkItem.checkStatus} onClick={() => window.goRoute(window.routeMap.supervisoryReview)}>
            <Brief>{deviceCompany.name}</Brief>
            <Brief>{deviceCompany.companyTypeDesc}</Brief>
            <Brief>{deviceCompany.detailAddress}</Brief>
          </Item>
        })}
      </List>
      <WhiteSpace />
    </div>
  }
  _onChange = (e) => {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
  }
  _onValueChange = (value) => {
    console.log(value);
  }
}
