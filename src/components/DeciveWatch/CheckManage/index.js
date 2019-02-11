import React from 'react';
import { NavBar, Icon, WhiteSpace, List } from 'antd-mobile';
import { getCheckDetail, getAllCheckList} from "../../../sdk";
import InfiniteList from "../../Common/InfiniteList";
export default class CheckManage extends React.Component {
  constructor(props) {
    super(props);
    this.pageIndex = 1;
    getAllCheckList();
  }
  render() {
    let { checkList } = this.props;
    let maxPage = checkList.pages || 1;
    return <div>
      <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => history.back()}>任务管理</NavBar>
      <WhiteSpace />
      <InfiniteList
        className="check-list"
        list={checkList.list}
        renderRow={this._renderRowItem}
        pageSize={10}
        hasNoMore = {this.pageIndex >= maxPage}
        onEndReached={this._getNewList}
      />
      <WhiteSpace />
    </div>
  }

  _renderRowItem = (rowData, sectionID, rowID)=>{
    let { checkList } = this.props;
    let check = checkList && checkList.list && checkList.list[rowID];
    return <List.Item
      key={check.id}
      arrow="horizontal"
      onClick={() => this._openCheckDetail(check.id)}>
      <div className="check-list-item-top">
        <div className="check-item-left">检查时间：</div>
        <div className="check-item-right">{`${check.startDate} 至 ${check.endDate}`}</div>
      </div>
      <div className="check-list-item-bottom">
        <div className="check-item-left">状态：</div>
        <div className="check-item-right">{`${check.checkStatusDesc}`}</div>
      </div>
      {/* <WhiteSpace size="sm" style={{backgroundColor:"#f5f5f9"}}/> */}
    </List.Item>
  }

  _getNewList = () => {
    console.log("check _getNewList begin isRequesting is",this.isRequesting);
    if (!this.isRequesting) {
      this.isRequesting = true;
      this.pageIndex++;
      getAllCheckList({page:this.pageIndex},true).then(()=>{
        console.log("check _getNewList end isRequesting",this.isRequesting);
        this.isRequesting = false;
      });
    }
  }
  _openCheckDetail = (id) => {
    getCheckDetail(id).then(()=>{
      window.goRoute(window.routeMap.checkDetail);
    });
  }

}
