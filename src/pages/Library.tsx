import React from 'react';
import { Plus } from 'lucide-react';
import { usePlaylists } from '../hooks/usePlaylists';
import type { Song } from '../types/music';

interface LibraryProps {
  onPlaySong: (song: Song) => void;
}

export default function Library({ onPlaySong }: LibraryProps) {
  const { playlists } = usePlaylists();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Your Library</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {playlists.map(playlist => (
          <div
            key={playlist.id}
            className="bg-gray-900/30 p-4 rounded-lg hover:bg-gray-900/60 transition-all duration-300 group cursor-pointer"
          >
            <div className="aspect-square overflow-hidden rounded-md mb-4">
              <img
                src={playlist.coverUrl}
                alt={playlist.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="font-medium text-white truncate">{playlist.name}</h3>
            <p className="text-sm text-gray-400 truncate mt-1">
              {playlist.songs.length} {playlist.songs.length === 1 ? 'song' : 'songs'}
            </p>
          </div>
        ))}
      </div>

      {playlists.length === 0 && (
        <div className="text-center text-gray-400 mt-12">
          <Plus className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <p className="text-xl">Create your first playlist</p>
        </div>
      )}
    </div>
  );
}