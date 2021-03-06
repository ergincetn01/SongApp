import React from 'react';
import SongList from './SongList';
import '../Styling/App.css';
import SongDetail from './SongDetail'

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column seven wide">
          <SongList />
        </div>

        <div className="column eight wide">
          <SongDetail />
        </div>

      </div>
    </div>
  );
};

export default App;
