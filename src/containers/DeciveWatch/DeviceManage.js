import { connect } from 'react-redux'
import DeviceManage from '../../components/DeciveWatch/DeviceManage'

const mapStateToProps = (state) => {
  let props = {

  };
  Object.keys(state.device).forEach((item)=>{
    if (item.indexOf("deviceList") !== -1) {
      props[item] = state.device[item];
    }
  });
  return props;
};

const mapDispatchToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DeviceManage)
