import React from 'react';
import GenreCard from '../components/GenreCard';
import SongCard from '../components/SongCard';
import { songs } from '../data/songs';
import type { Song } from '../types/music';

interface HomeProps {
  onPlaySong: (song: Song) => void;
}

const genres = [
  {
    id: '1',
    name: 'Hip Hop',
    coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIo8-oKhSkBCePxMyVozq4B4ZNdm7T9qhLaw&s'
  },
  {
    id: '2',
    name: 'Jazz',
    coverUrl: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Romantic',
    coverUrl: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Classical',
    coverUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'Rock',
    coverUrl: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=800&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'Electronic',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop'
  }
];

export default function Home({ onPlaySong }: HomeProps) {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Welcome to Sangeet</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Browse by Genre</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {genres.map(genre => (
            <GenreCard key={genre.id} genre={genre} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Featured Songs</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {songs.map(song => (
            <SongCard key={song.id} song={song} onPlay={onPlaySong} />
          ))}
        </div>
      </section>
    </div>
  );
}