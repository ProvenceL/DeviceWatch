import React, { Component } from "react";
import { Modal } from "antd-mobile";

//todo Modal.alert(title, message, actions?, platform?)
export const Alert = (message, title="提示") => {
  let btnTxt,clickCallBack=()=>{};
  if (arguments.length > 2) {
    for (let index = 2; index < arguments.length; index++) {
      const ele = arguments[index];
      let type = typeof(ele);
      switch (type) {
        case "string":
          btnTxt = ele;
          break;
        case "function":
          clickCallBack = ele;
          break;
        default:
          break;
      }
    }
  }
  return Modal.alert(title, message,[{text:btnTxt?btnTxt:"确定",onPress:clickCallBack}])
};