import React from 'react';
import { useParams } from 'react-router-dom';
import { songs } from '../data/songs';
import SongCard from '../components/SongCard';
import type { Song } from '../types/music';

interface GenrePageProps {
  onPlaySong: (song: Song) => void;
}

export default function GenrePage({ onPlaySong }: GenrePageProps) {
  const { id } = useParams<{ id: string }>();
  const genreSongs = songs.filter(song => song.genre.toLowerCase() === id?.toLowerCase());

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 capitalize">{id} Music</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {genreSongs.map(song => (
          <SongCard key={song.id} song={song} onPlay={onPlaySong} />
        ))}
      </div>
    </div>
  );
}