import { connect } from 'react-redux';
import PlantsWrapper from '../components/PlantsWrapper.jsx';
import { bindActionCreators } from 'redux'
import * as actions from '../actions/PlantsActionCreators.jsx';

// selectively map parts of Redux global state to component's props
const mapStateToProps = (state) => ({ plants: state.plants });

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(actions, dispatch)
);

const PlantsContainer = connect(mapStateToProps, mapDispatchToProps)(PlantsWrapper);

export default PlantsContainer;
