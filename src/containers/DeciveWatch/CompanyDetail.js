import { connect } from 'react-redux'
import CompanyDetail from '../../components/DeciveWatch/CompanyDetail'

const mapStateToProps = (state) => ({
  companyDetail: state.company.companyDetail
});

const mapDispatchToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetail)
