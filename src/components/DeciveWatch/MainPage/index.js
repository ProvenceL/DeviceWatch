import React from 'react';
import { NavBar, Icon, WingBlank, Carousel, Grid } from 'antd-mobile';

export default class MainPage extends React.Component {
  constructor(props){
    super(props);
    this.munuList=[
      {title:'子页面2',icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',route:window.routeMap.supervisoryReview},
      {title:'子页面3',icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',route:'companyManage'}
    ];
  }
  render() {
    return <div className="main-page">
      <NavBar mode="light" className="main-top" icon={<Icon type="left" />} onLeftClick={() => console.log('onLeftClick')}>主界面</NavBar>
      <Grid data={this.munuList}
        className="main-bottom"
            columnNum={3}
            renderItem={this._renderMenuItem}
      />
    </div>
  }
  _renderMenuItem=(dataItem)=>{
    return <div style={{ padding: '12.5px' }} onClick={()=>window.goRoute(dataItem.route)}>
      <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
      <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
        <span>{dataItem.title}</span>
      </div>
    </div>
  }
}
