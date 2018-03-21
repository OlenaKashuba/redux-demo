import {connect} from 'react-redux';
import Fav from '../components/Fav';
import {reloadVideo} from '../actions';

const getFav = (state) => {
	return state.favs;
};

const mapStateToProps = (state) => ({favs: getFav(state)});

const mapDispatchToProps = dispatch =>({
	playVideo: videoId => dispatch(reloadVideo(videoId))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Fav);
