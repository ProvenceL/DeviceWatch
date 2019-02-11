import { connect } from 'react-redux'
import DeviceDetail from '../../components/DeciveWatch/DeviceDetail'

const mapStateToProps = (state) => ({
  deviceDetail: state.device.deviceDetail,
  deviceCheckList: state.device.deviceCheckList,
});

const mapDispatchToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DeviceDetail)
