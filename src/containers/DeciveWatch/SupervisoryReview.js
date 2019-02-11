import { connect } from 'react-redux'
import SupervisoryReview from '../../components/DeciveWatch/SupervisoryReview'

const mapStateToProps = (state) => {
  let props = {
  };
  Object.keys(state.supervisory).forEach((item)=>{
    if (item.indexOf("supervisoryList") !== -1) {
      props[item] = state.supervisory[item];
    }
  });
  return props;
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SupervisoryReview)
