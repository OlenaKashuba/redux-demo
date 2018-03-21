import React from 'react';
import FavItem from './FavItem';
import PropTypes from 'prop-types';

const Fav = ({favs, playVideo}) => {
	return (
		<div>
			<ul className="fav-list">
				{favs.map(fav => {
					return <FavItem
						playVideo = {playVideo}
						fav={fav}
						key={fav.id.videoId}
					/>;
				})}
			</ul>
		</div>
	);
};

Fav.propTypes = {
  favs: PropTypes.array,
  playVideo: PropTypes.func
};

export default Fav;