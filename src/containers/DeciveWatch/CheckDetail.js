import { connect } from 'react-redux'
import CheckDetail from '../../components/DeciveWatch/CheckDetail'

const mapStateToProps = (state) => ({
  checkDetail: state.check.checkDetail
});

const mapDispatchToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CheckDetail)
