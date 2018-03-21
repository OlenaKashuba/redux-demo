import {connect} from 'react-redux';
import SearchResults from '../components/SearchResults';
import {reloadVideo,addToFav} from '../actions';

const getResults = (state) => {
  return state.search[state.query] || [];
};

const mapStateToProps = state => {
	return {results: getResults(state)};
};

const mapDispatchToProps = dispatch =>({
	playVideo: videoId => dispatch(reloadVideo(videoId)),
	addToFav: result => dispatch(addToFav(result))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
