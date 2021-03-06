import { useState, useEffect } from 'react';
import uuid from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'Almost home', id: 1 },
    { title: 'Memory gospel', id: 2 },
    { title: 'The wild darkness', id: 3 },
  ]);

  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid() }]);
  };

  useEffect(() => {
    console.log(songs);
  }, [songs]);

  return (
    <div className='song-list'>
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongList;
