import React from 'react';
import { NavBar, Icon, WhiteSpace, List, Tag, Checkbox, WingBlank, Button } from 'antd-mobile';

let { CheckboxItem } = Checkbox;
export default class DeviceDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelectAll: false,
      checkList: [
        { label: "1.检查许可证是否在有效期内", value: "test1", isSelected: false },
        { label: "2.抽检特种设备管理人员，检测人员，专业技术人员，作业人员是否具有相应资格", value: "test2", isSelected: false },
        { label: "3.抽查设计制造，安装，改造，重大修理档案是否建立", value: "test3", isSelected: false },
        { label: "4.抽查设计图样审批手续是否符合要求", value: "test4", isSelected: false },
        { label: "5.抽检特种设备管理人员，检测人员，专业技术人员，作业人员是否具有相应资格", value: "test5", isSelected: false },
        { label: "6.抽检特种设备管理人员，检测人员，专业技术人员，作业人员是否具有相应资格", value: "test6", isSelected: false },
        { label: "7.抽检特种设备管理人员，检测人员，专业技术人员，作业人员是否具有相应资格", value: "test7", isSelected: false },
      ],
    }
  }
  componentDidUpdate() {
    this._checkIsSelectAll();
  }

  render() {
    let { test } = this.props;
    const tagElement = (<Tag onChange={() => { this._isSelectAll(!this.state.isSelectAll) }}>
      {!this.state.isSelectAll ? "全选" : "取消全选"}
    </Tag>);
    return <div>
      <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => history.back()}>生产单位现场安全监督检查项目表</NavBar>
      <WhiteSpace />
      <List.Item extra={tagElement}>检查内容</List.Item>
      {this.state.checkList.map((chekcItem, index) => {
        return <CheckboxItem
          key={chekcItem.value}
          wrap
          checked={chekcItem.isSelected}
          onChange={() => this._onChange(chekcItem.value, index)}>
          {chekcItem.label}
        </CheckboxItem>
      })}
      <WingBlank style={{position:"fixed",bottom:"0",zIndex:"2",width:"92%"}} >
        <WhiteSpace />
        <Button type="primary">确定</Button><WhiteSpace />
      </WingBlank>
    </div>
  }
  _onChange = (value, index) => {
    this._toggleSelect(index);
    console.warn("checkBox change value is ", value, ";index is ", index);
  }
  _isSelectAll = (isSelect = true) => {
    this.setState((state) => {
      let { checkList } = state;
      for (let index = 0; index < checkList.length; index++) {
        checkList[index].isSelected = isSelect;
      }
      return { checkList }
    });
  }
  _toggleSelect = (index) => {
    this.setState((state) => {
      let { checkList } = state;
      checkList[index].isSelected = !checkList[index].isSelected;
      return { checkList }
    });
  }
  _checkIsSelectAll = () => {
    let { checkList, isSelectAll } = this.state;
    let flag = false;
    for (let index = 0; index < checkList.length; index++) {
      if (checkList[index].isSelected) {
        flag = true;
      }
    }
    if (isSelectAll === flag) {
      return;
    }
    this.setState({
      isSelectAll: flag
    });
  }
}
