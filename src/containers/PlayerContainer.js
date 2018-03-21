import {connect} from 'react-redux';
import Player from '../components/Player';
import {reloadVideo} from '../actions';

const getId = (state) => {
	return state.videoId;
};

const mapStateToProps = (state) => ({videoId: getId(state)});

// const mapDispatchToProps = dispatch => ({
// 	updateId: videoId => dispatch(reloadVideo(videoId))
// });

export default connect(
	mapStateToProps
	// mapDispatchToProps
)(Player);
