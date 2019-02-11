import { connect } from 'react-redux'
import CheckManage from '../../components/DeciveWatch/CheckManage'

const mapStateToProps = (state) => ({
  checkList: state.check.checkList
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CheckManage)
