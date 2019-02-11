import React from 'react';
import { NavBar, Icon, WhiteSpace, InputItem, Picker, List, Grid } from 'antd-mobile';

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

export default class SupervisoryDetail extends React.Component {
  constructor(props) {
    super(props);
    this.menuList =
      [
        { label: <div key="2013">2013text</div>, value: '2013', },
        { label: <div key="2014">2014text</div>, value: '2014', },
        { label: <div key="2015">2015text</div>, value: '2015', },
        { label: <div key="2016">2016text</div>, value: '2016', },
        { label: <div key="2017">2017text</div>, value: '2017', },
      ];
    this.produceList = [
      { title: '生产单位', icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png', route: "" },
    ];
    this.useList = [
      { title: '锅炉', icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png', route: "" },
      { title: '压力容器', icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png', route: "" },
      { title: '压力管道', icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png', route: "" },
      { title: '电梯', icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png', route: "" },
      { title: '起重机械', icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png', route: "" },
      { title: '客运索道', icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png', route: "" },
      { title: '大型游乐设施', icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png', route: "" },
      { title: '场(厂)内专用机动车辆', icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png', route: "" },
    ];
    this.state = {
      colorValue: ['#00FF00'],
    };
  }
  render() {
    let { test } = this.props;
    return <div>
      <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => history.back()}>监督检查</NavBar>
      <WhiteSpace />
      <InputItem
        type="text"
        className="supervisory-input"
        placeholder="张三"
        clear
        onChange={(v) => { console.log('onChange', v); }}
        onBlur={(v) => { console.log('onBlur', v); }}
        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
      >监察人员</InputItem>

      <Picker
        data={this.menuList}
        cols={1}
        value={["2013"]}
      >
        <List.Item arrow="horizontal">协同人员</List.Item>
      </Picker>

      <Picker
        data={this.menuList}
        cols={1}
        value={["2013"]}
      >
        <List.Item arrow="horizontal">其他人员</List.Item>
      </Picker>
      <WhiteSpace style={{backgroundColor:"#f5f5f9"}}/>
      <div className="supervisory-check-title">检查项目</div>
      <div className="supervisory-check-content">
        <div className="supervisory-check-produce" >
          <div className="check-produce-title">生产单位</div>
            <Grid data={this.produceList}
              className="produce-grid"
              columnNum={4}
              square={false}
              hasLine={false}
              renderItem={this._renderMenuItem}
            />
        </div>
        <div className="supervisory-check-use">
          <div className="check-use-title">使用单位</div>
            <Grid data={this.useList}
              className="user-grid"
              columnNum={4}
              square={false}
              hasLine={false}
              renderItem={this._renderMenuItem}
            />
        </div>
      </div>
      <WhiteSpace />
    </div>
  }
  _renderMenuItem=(dataItem)=>{
    return <div onClick={()=>window.goRoute(dataItem.route)}>
      <img src={dataItem.icon} style={{ width: '50px', height: '50px' }} alt="" />
      <div style={{ color: '#888', fontSize: '14px', marginTop: '5px' }}>
        <span>{dataItem.title}</span>
      </div>
    </div>
  }
}