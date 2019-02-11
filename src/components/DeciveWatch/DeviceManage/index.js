import React from 'react';
import { NavBar, Icon, WhiteSpace, Tabs, SearchBar,List } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import { getAllDevice ,getDeviceDetail,getDeviceCheckList } from "../../../sdk";
import InfiniteList from "../../Common/InfiniteList";
import {companyEquipmentDetail} from "../../../logic/company/constants";

export default class CompanyManage extends React.Component {
  constructor(props) {
    super(props);
    this.munuList = [
      { title: '全部', devTypeId:  0, pageIndex:1, },
      { title: '锅炉', devTypeId:6, pageIndex:1, },
      { title: '电梯', devTypeId:7, pageIndex:1, },
      { title: '起重机械', devTypeId:8, pageIndex:1, },
      { title: '游乐设施', devTypeId:9, pageIndex:1, },
      { title: '客运索道', devTypeId:10, pageIndex:1, },
      { title: '场（厂）内车辆', devTypeId:11, pageIndex:1, },
      { title: '压力容器', devTypeId:12, pageIndex:1, },
      { title: '压力容器', devTypeId:13, pageIndex:1, },
    ];
    this.isRequesting = false;
    getAllDevice();
  }
  render() {
    return <div>
      <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => history.back()}>企业管理</NavBar>
      <SearchBar placeholder="请输入设备名称、注册代码" maxLength={100} />
      <WhiteSpace />
      <StickyContainer>
        <Tabs tabs={this.munuList}
          initalPage={0}
          // prerenderingSiblingsNumber={2}
          onTabClick={this._onTabChange}
          renderTabBar={this._renderTabBar}>
          {this._renderTabContent(0)}
          {this._renderTabContent(1)}
          {this._renderTabContent(2)}
          {this._renderTabContent(3)}
          {this._renderTabContent(4)}
          {this._renderTabContent(5)}
          {this._renderTabContent(6)}
          {this._renderTabContent(7)}
          {this._renderTabContent(8)}
        </Tabs>
      </StickyContainer>
      <WhiteSpace />
    </div>
  }
  _renderTabBar = (props) => {
    return (<Sticky>
      {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} page={3} /></div>}
    </Sticky>);
  }
  _renderTabContent = (index) => {
    let type = this.munuList[index].devTypeId;
    let listName = type === 0 ? "deviceList" : "deviceList"+type;
    let deviList = this.props[listName] && this.props[listName].list||[];
    let maxPage = this.props[listName] && this.props[listName].pages || 1;
    console.log("device manage render tab content,listName is ",listName);
    console.warn("device render tab list is ",deviList);
    return <InfiniteList
        key={index}
        className="device-list"
        list={deviList}
        renderRow={this._renderRowItem}
        pageSize={10}
        hasNoMore = {this.munuList[index].pageIndex >= maxPage}
        onEndReached={this._getNewList(index)}
      />;
  }
  _renderRowItem = (rowData, sectionID, rowID)=>{
    let { deviceList } = this.props;
    let device = deviceList && deviceList.list && deviceList.list[rowID];
    return <List.Item
      multipleLine
      onClick = {()=>{this._openDeviceDetail(device.id)}}
      key={device.id}
      thumb="https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png">
      {companyEquipmentDetail.map((item, index) => {
        return <List.Item.Brief key={`${item.serKey}`} className="equipment-device-item">
          <div className="device-left">{item.name}</div>
          <div className="device-right">{device[item.serKey]}</div>
        </List.Item.Brief>
      })}
    </List.Item>

  }
  _onTabChange = (item,index) => {
    getAllDevice({devTypeId:item.devTypeId});
  }
  _getNewList = (index) => () => {
    let type = this.munuList[index].devTypeId;
    console.log("device _getNewList begin isRequesting is",this.isRequesting,"the type is ",type);
    if (!this.isRequesting) {
      this.isRequesting = true;
      this.munuList[index].pageIndex++;
      getAllDevice({page:this.munuList[index].pageIndex,devTypeId:type},true).then(()=>{
        console.log("device _getNewList end isRequesting",this.isRequesting);
        this.isRequesting = false;
      });
    }
  }
  _openDeviceDetail = (id) => {
    getDeviceDetail(id).then(()=>{
      
      window.goRoute(window.routeMap.deviceDetail);
    });
  }
}
