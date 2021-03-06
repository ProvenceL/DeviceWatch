import React from 'react';
import { NavBar, Icon, WhiteSpace, Tabs, SearchBar,List } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import { getSupervisoryList,getSupervisoryDetail } from "../../../sdk";
import InfiniteList from "../../Common/InfiniteList";

export default class SupervisoryManage extends React.Component {
  constructor(props) {
    super(props);
    this.munuList = [
      { title: '全部'   , companyType:  0, pageIndex:1, },
      { title: '使用单位', companyType:108, pageIndex:1, },
      { title: '产权单位', companyType:109, pageIndex:1, },
      { title: '设计单位', companyType:110, pageIndex:1, },
    ];
    this.isRequesting = false;
  }
  componentDidMount(){
    getSupervisoryList();
  }

  render() {
    return <div>
      <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => history.back()}>子界面2</NavBar>
      <SearchBar placeholder="请输入企业名称、联系人名称、关键词" maxLength={100} />
      <WhiteSpace />
      <StickyContainer>
        <Tabs tabs={this.munuList}
          initalPage={0}
          onTabClick={this._onTabChange}
          renderTabBar={this._renderTabBar}>
          {this._renderTabContent(0)}
          {this._renderTabContent(1)}
          {this._renderTabContent(2)}
          {this._renderTabContent(3)}
        </Tabs>
      </StickyContainer>
      <WhiteSpace />
    </div>
  }
  _renderTabBar = (props) => {
    return (<Sticky>
      {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
  }
  _renderTabContent = (index) => {
    let type = this.munuList[index].companyType;
    let listName = type === 0 ? "supervisoryList" : "supervisoryList"+type;
    let supervList = this.props[listName] && this.props[listName].list||[];
    let maxPage = this.props[listName] && this.props[listName].pages || 1;
    console.log("supervisory manage render tab content,listName is ",listName);
    console.warn("supervisory render tab list is ",supervList);
    return <InfiniteList
        key={index}
        className="supervisory-list"
        list={supervList}
        renderRow={this._renderRowItem}
        pageSize={20}
        hasNoMore = {this.munuList[index].pageIndex >= maxPage}
        onEndReached={this._getNewList(index)}
      />;
  }
  _renderRowItem = (rowData, sectionID, rowID)=>{
    let { supervisoryList } = this.props;
    let supervisory = supervisoryList && supervisoryList.list && supervisoryList.list[rowID];
    return <List.Item
      multipleLine
      key={supervisory.id}
      thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
      onClick={() => this._openSupervisoryDetail(supervisory.id)}>
      {supervisory.companyName}
      <List.Item.Brief>{`${supervisory.devices}`}</List.Item.Brief>
      <List.Item.Brief>{`${supervisory.companyContact}`}</List.Item.Brief>
      <List.Item.Brief>{`${supervisory.companyAddress}`}</List.Item.Brief>
    </List.Item>
  }
  _onTabChange = (item) => {
    getSupervisoryList({companyType:item.companyType});
  }
  _getNewList = (index) => () => {
    let type = this.munuList[index].companyType;
    console.log("Supervisory _getNewList begin isRequesting is",this.isRequesting,"the type is ",type);
    if (!this.isRequesting) {
      this.isRequesting = true;
      this.munuList[index].pageIndex++;
      getSupervisoryList({page:this.munuList[index].pageIndex,companyType:type},true).then(()=>{
        console.log("Supervisory _getNewList end isRequesting",this.isRequesting);
        this.isRequesting = false;
      });
    }
  }
  _openSupervisoryDetail = (id) => {
    getSupervisoryDetail(id).then(()=>{
      window.goRoute(window.routeMap.supervisoryDetail);
    });
  }
}
