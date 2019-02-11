import { connect } from 'react-redux'
import CompanyManage from '../../components/DeciveWatch/CompanyManage'

const mapStateToProps = (state) => {
  let props = {
  };
  Object.keys(state.company).forEach((item)=>{
    if (item.indexOf("companyList") !== -1) {
      props[item] = state.company[item];
    }
  });
  return props;
};

const mapDispatchToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyManage)
