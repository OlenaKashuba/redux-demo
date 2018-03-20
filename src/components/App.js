import React from 'react';
import PlayerContainer from '../containers/PlayerContainer';
import Search from './Search';

const App = () => {
  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-center">
        <PlayerContainer />
      </div>
      <div className="col-6 offset-3 d-flex justify-content-center">
        <Search />
      </div>
    </div>
  );
};

export default App;
