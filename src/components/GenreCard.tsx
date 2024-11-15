import React from 'react';
import { Link } from 'react-router-dom';
import type { Genre } from '../types/music';

interface GenreCardProps {
  genre: Genre;
}

export default function GenreCard({ genre }: GenreCardProps) {
  return (
    <Link 
      to={`/genre/${genre.id}`}
      className="relative overflow-hidden rounded-lg group"
    >
      <div className="aspect-square">
        <img 
          src={genre.coverUrl} 
          alt={genre.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <h3 className="text-white text-xl font-bold p-4">{genre.name}</h3>
        </div>
      </div>
    </Link>
  );
}