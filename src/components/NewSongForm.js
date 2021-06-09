import { useState } from 'react';

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='songName'>Song Name</label>
        <input
          type='text'
          required
          id='songName'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type='submit' value='Add Song' />
      </form>
    </div>
  );
};

export default NewSongForm;
