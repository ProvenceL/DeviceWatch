import React from 'react';
import { NavBar, Icon, WhiteSpace, Tabs, SearchBar,List } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import { getAllCompanyList,getCompanyDetail } from "../../../sdk";
import InfiniteList from "../../Common/InfiniteList";

export default class CompanyManage extends React.Component {
  constructor(props) {
    super(props);
    this.munuList = [
      { title: '全部'   , companyType:  0, pageIndex:1, },
      { title: '使用单位', companyType:108, pageIndex:1, },
      { title: '产权单位', companyType:109, pageIndex:1, },
      { title: '设计单位', companyType:110, pageIndex:1, },
      { title: '制造单位', companyType:111, pageIndex:1, },
      { title: '安装单位', companyType:112, pageIndex:1, },
      { title: '改造单位', companyType:113, pageIndex:1, },
      { title: '修理单位', companyType:114, pageIndex:1, },
      { title: '维修单位', companyType:115, pageIndex:1, },
      { title: '充装单位', companyType:116, pageIndex:1, },
    ];
    this.isRequesting = false;
    getAllCompanyList();
  }
  render() {
    return <div>
      <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => history.back()}>企业管理</NavBar>
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
          {this._renderTabContent(4)}
          {this._renderTabContent(5)}
          {this._renderTabContent(6)}
          {this._renderTabContent(7)}
          {this._renderTabContent(8)}
          {this._renderTabContent(9)}
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
    let listName = type === 0 ? "companyList" : "companyList"+type;
    let compList = this.props[listName] && this.props[listName].list||[];
    let maxPage = this.props[listName] && this.props[listName].pages || 1;
    console.log("company manage render tab content,listName is ",listName);
    console.warn("company render tab list is ",compList);
    return <InfiniteList
        key={index}
        className="company-list"
        list={compList}
        renderRow={this._renderRowItem}
        pageSize={10}
        hasNoMore = {this.munuList[index].pageIndex >= maxPage}
        onEndReached={this._getNewList(index)}
      />;
  }
  _renderRowItem = (rowData, sectionID, rowID)=>{
    let { companyList } = this.props;
    let company = companyList && companyList.list && companyList.list[rowID];
    return <List.Item
      multipleLine
      key={company.id}
      thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
      // thumbStyle={{width:"60px",height:"60px"}}
      onClick={() => this._openCompanyDetail(company.id)}>
      {company.name}
      <List.Item.Brief>{`${company.contact} ${company.contactNo}`}</List.Item.Brief>
      <List.Item.Brief>{`${company.province}省${company.city}市${company.district}区${company.street}街道${company.detailAddress}`}</List.Item.Brief>
    </List.Item>
  }
  _onTabChange = (item,index) => {
    getAllCompanyList({companyType:item.companyType});
  }
  _getNewList = (index) => () => {
    let type = this.munuList[index].companyType;
    console.log("_getNewList begin isRequesting is",this.isRequesting,"the type is ",type);
    if (!this.isRequesting) {
      this.isRequesting = true;
      this.munuList[index].pageIndex++;
      getAllCompanyList({page:this.munuList[index].pageIndex,companyType:type},true).then(()=>{
        console.log("_getNewList end isRequesting",this.isRequesting);
        this.isRequesting = false;
      });
    }
  }
  _openCompanyDetail = (id) => {
    getCompanyDetail(id).then(()=>{
      window.goRoute(window.routeMap.companyDetail);
    });
  }
}
