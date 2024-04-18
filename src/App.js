import React, { useState } from "react";
import "./styles.css";

function App() {
  const [songs] = useState([
    {
      id: 1,
      title: "Shape of You",
      artist: "Ed Sheeran",
      genre: "Pop",
      rating: 4.5,
    },
    {
      id: 2,
      title: "Bohemian Rhapsody",
      artist: "Queen",
      genre: "Rock",
      rating: 5,
    },
    {
      id: 3,
      title: "Hallelujah",
      artist: "Leonard Cohen",
      genre: "Folk",
      rating: 4,
    },
    {
      id: 4,
      title: "Stairway to Heaven",
      artist: "Led Zeppelin",
      genre: "Rock",
      rating: 4.8,
    },
    {
      id: 5,
      title: "Hotel California",
      artist: "Eagles",
      genre: "Rock",
      rating: 4.7,
    },
    {
      id: 6,
      title: "Hey Jude",
      artist: "The Beatles",
      genre: "Rock",
      rating: 4.6,
    },
    { id: 7, title: "Wonderwall", artist: "Oasis", genre: "Rock", rating: 4.3 },
    {
      id: 8,
      title: "Thriller",
      artist: "Michael Jackson",
      genre: "Pop",
      rating: 4.9,
    },
    {
      id: 9,
      title: "Billie Jean",
      artist: "Michael Jackson",
      genre: "Pop",
      rating: 4.8,
    },
    {
      id: 10,
      title: "Smells Like Teen Spirit",
      artist: "Nirvana",
      genre: "Rock",
      rating: 4.7,
    },
    {
      id: 11,
      title: "Bohemian Like You",
      artist: "The Dandy Warhols",
      genre: "Rock",
      rating: 4.2,
    },
    {
      id: 12,
      title: "Blackbird",
      artist: "The Beatles",
      genre: "Rock",
      rating: 4.6,
    },
    {
      id: 13,
      title: "Don't Stop Believin'",
      artist: "Journey",
      genre: "Rock",
      rating: 4.5,
    },
    {
      id: 14,
      title: "Wonderful Tonight",
      artist: "Eric Clapton",
      genre: "Rock",
      rating: 4.7,
    },
    {
      id: 15,
      title: "The Sound of Silence",
      artist: "Simon & Garfunkel",
      genre: "Folk",
      rating: 4.4,
    },
    {
      id: 16,
      title: "Let It Be",
      artist: "The Beatles",
      genre: "Rock",
      rating: 4.8,
    },
    {
      id: 17,
      title: "Imagine",
      artist: "John Lennon",
      genre: "Pop",
      rating: 4.6,
    },
    {
      id: 18,
      title: "Sweet Child o' Mine",
      artist: "Guns N' Roses",
      genre: "Rock",
      rating: 4.9,
    },
    {
      id: 19,
      title: "Yesterday",
      artist: "The Beatles",
      genre: "Rock",
      rating: 4.7,
    },
    {
      id: 20,
      title: "Wish You Were Here",
      artist: "Pink Floyd",
      genre: "Rock",
      rating: 4.8,
    },
  ]);
  const [playlist, setPlaylist] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("title"); // Default sorting by title

  // Function to add a song to the playlist
  const addToPlaylist = (song) => {
    if (!playlist.includes(song.id)) {
      setPlaylist([...playlist, song.id]);
    } else {
      alert("This song is already in the playlist!");
    }
  };

  // Function to remove a song from the playlist
  const removeFromPlaylist = (songId) => {
    setPlaylist(playlist.filter((id) => id !== songId));
  };

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle sorting dropdown change
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  // Function to compare songs based on the selected sort option
  const compareSongs = (a, b) => {
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "artist") {
      return a.artist.localeCompare(b.artist);
    } else if (sortBy === "genre") {
      return a.genre.localeCompare(b.genre);
    } else if (sortBy === "rating") {
      return b.rating - a.rating; // Sort by rating in descending order
    }
    return 0;
  };

  // Filter and sort songs based on search query and sort option
  const sortedSongsList = songs
    .filter(
      (song) =>
        song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.genre.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort(compareSongs);

  // Get playlist songs
  const playlistSongs = playlist.map((id) =>
    songs.find((song) => song.id === id)
  );

  return (
    <div className="container">
      <h1>Music Playlist App</h1>
      <div className="content">
        <div className="songs-container">
          <h2>Songs</h2>
          <input
            type="text"
            placeholder="Search songs"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div>
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" value={sortBy} onChange={handleSortChange}>
              <option value="title">Title</option>
              <option value="artist">Artist</option>
              <option value="genre">Genre</option>
              <option value="rating">Rating</option>
            </select>
          </div>
          <div>
            <h3>Total Songs: {songs.length}</h3>
          </div>
          <h4>Search Results ({sortedSongsList.length})</h4>
          <div>
            <ul>
              {sortedSongsList.map((song) => (
                <li key={song.id}>
                  <div>
                    <span>
                      {song.title} - {song.artist} - {song.genre} - Rating:{" "}
                      {song.rating}
                    </span>
                    <button onClick={() => addToPlaylist(song)}>❤️</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="playlist-container">
          <h2>Playlist</h2>
          <ul>
            {playlistSongs.map((song) => (
              <li key={song.id}>
                {song.title} - {song.artist} - {song.genre} - Rating:{" "}
                {song.rating}
                <button onClick={() => removeFromPlaylist(song.id)}>🗑️</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
