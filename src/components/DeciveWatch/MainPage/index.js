import React from 'react';
import { NavBar, Icon, WingBlank, Carousel, Grid } from 'antd-mobile';

export default class MainPage extends React.Component {
  constructor(props){
    super(props);
    this.munuList=[
      {title:'统计分析',icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',route:window.routeMap.statisticlAnalysis},
      {title:'企业管理',icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',route:window.routeMap.companyManage},
      {title:'设备管理',icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',route:window.routeMap.deviceManage},
      {title:'任务管理',icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',route:window.routeMap.checkManage},
      {title:'监督检查',icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',route:window.routeMap.supervisoryReview},
      {title:'隐患管理',icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',route:'companyManage'}
    ];
  }
  render() {
    let { test } = this.props;
    const data1 = Array.from(new Array(6)).map(() => ({
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
    }));
    return <div className="main-page">
      <NavBar mode="light" className="main-top" icon={<Icon type="left" />} onLeftClick={() => console.log('onLeftClick')}>智慧市场监管</NavBar>
      <WingBlank className="main-middle">
        <Carousel className="my-carousel"
                  vertical
                  dots={false}
                  dragging={false}
                  swiping={false}
                  autoplay
                  infinite
                  speed={5000}
                  autoplayInterval={1000}
                  resetAutoplay={false}
        >
          {['ring', 'ruby', 'iPhone', 'iPod', 'sorry', 'tourism', 'coke', 'ticket', 'note'].map(type => (
            <div className="v-item" key={type}>{type}</div>
          ))}
        </Carousel>
      </WingBlank>
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
