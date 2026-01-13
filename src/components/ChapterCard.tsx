// components/ChapterCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ChapterCard.css'; // import CSS module or Tailwind class

interface ChapterCardProps {
  chapter: {
    number: number;
    title: string;
    image?: string;
  };
  storySlug: string;
}

const ChapterCard: React.FC<ChapterCardProps> = ({ chapter, storySlug }) => {
  return (
    <Link to={`/books/${storySlug}/chapter/${chapter.number}`} className="chapter-card">
      <div className="image-container">
        <img
          src={chapter.image || '/default-chapter-cover.jpg'} // placeholder if no image
          alt={`Chapter ${chapter.number}`}
          className="chapter-image"
        />
      </div>
      <div className="chapter-info">
        <h3>Chapter {chapter.number}</h3>
        <p>{chapter.title}</p>
      </div>
    </Link>
  );
};

export default ChapterCard;
