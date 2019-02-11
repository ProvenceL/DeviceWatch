/* eslint no-dupe-keys: 0 */
import React from "react";

import { ListView,PullToRefresh } from 'antd-mobile';

function genData(list) {
  const dataBlob = {};
  for (let i = 0; i < list.length; i++) {
    dataBlob[`${i}`] = `row-${i}`;
  }
  return dataBlob;
}

export default class InfiniteList extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      refreshing:true,
      isLoading: true,
    };
  }

  componentDidMount() {
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    // simulate initial Ajax
    let {list=[]} = this.props;
    setTimeout(() => {
      this.rData = genData(list);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
        refreshing:false,
      });
    }, 600);
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  componentWillReceiveProps(nextProps) {
    if (nextProps.list !== this.props.list) {
      let newData = genData(nextProps.list);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newData),
      });
    }
  }

  render() {
    let {
      renderHeader, //列表头部
      renderFooter, //列表底部
      renderRow,    //列表item生成函数
      pageSize=20,  //列表分页大小
      list,         //列表数据
      onEndReached, //滚动到底部触发
      onRefresh,    //下拉刷新方法
      className,    //
      hasNoMore,    //
    } = this.props;

    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderHeader={renderHeader?renderHeader:null}
        renderFooter={renderFooter?renderFooter:() => (<div style={{ padding: 15, textAlign: 'center' }}>
          { hasNoMore? '没有更多了。':'加载中...' }
        </div>)}
        renderRow={renderRow}
        className={"infinite-list " + className}
        pullToRefresh={<PullToRefresh
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh}
        />}
        pageSize={pageSize}
        useBodyScroll
        onScroll={() => { /*console.log('scroll');*/ }}
        scrollRenderAheadDistance={100}
        onEndReached={!hasNoMore?onEndReached:()=>{}}
        onEndReachedThreshold={10}
      />
    );
  }
  _onRefresh = ()=> {
    let { onRefresh } = this.props;
    this.setState({
      isLoading:true,
      refreshing:true,
    });
    setTimeout(() => {
      onRefresh && onRefresh();
      this.setState({
        isLoading:false,
        refreshing:false,
      });
    }, 600);
  }
}
