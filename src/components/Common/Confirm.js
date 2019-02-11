import React, { Component } from "react";
import { Modal } from "antd-mobile";

const defaultBtnArray = [
  {
    text: "取消",
    onPress: () => { },
  },
  {
    text: "确定",
    onPress: () => { },
  },
]

//Modal.alert(title, message, btnArray:[{text, onPress, style},{text:btnText}], platform?)
export const Confirm = (message, title="提示", btnArray) => (
  Modal.alert(title, message, btnArray === undefined ? defaultBtnArray : btnArray, "ios")
);