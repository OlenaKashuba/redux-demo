const videoId = (state = 'xsSnOQynTHs', action) => {
	switch(action.type) {
		case 'UPDATE_VIDEO_ID':
			return action.videoId;
		default: 
			return state;
	}
};

export default videoId;