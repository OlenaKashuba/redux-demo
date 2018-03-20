import {connect} from 'react-redux';
import SearchResults from '../components/SearchResults';
import {reloadVideo} from '../actions';

const getResults = (state) => {
  return state.search[state.query] || [];
};

const mapStateToProps = state => ({results: getResults(state)});

const mapDispatchToProps = dispatch =>({
	playVideo: videoId => dispatch(reloadVideo(videoId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
