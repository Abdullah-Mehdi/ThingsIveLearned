import React from 'react';
import MediaItem from './MediaItem';

const Manga = () => {
  const mangaList = [
    {
      id: 1,
      title: "Berserk",
      creator: "Kentaro Miura",
      image: "/images/manga/berserk.jpg",
      takeaways: `
        Berserk's unflinching portrayal of struggle against overwhelming odds through Guts' journey has been a source of 
        inspiration during my own difficult times. The series shows that continuing to fight for one's path, even when 
        it seems impossible, is an act of profound human dignity.
        
        The relationship between ambition and sacrifice, epitomized by Griffith, taught me about the dark side of 
        single-minded pursuit of dreams and how easily we can rationalize harm to others in service of our goals.
        
        Berserk also explores how trauma shapes us, but doesn't have to define us. Guts carries deep wounds, both 
        physical and emotional, yet his journey is ultimately about finding meaning and connection despite these scars.
      `
    },
    {
      id: 2,
      title: "Vagabond",
      creator: "Takehiko Inoue",
      image: "/images/manga/vagabond.jpg",
      takeaways: `
        Vagabond's exploration of Musashi's path from a wild, violence-driven youth to a thoughtful warrior who questions 
        the meaning of strength helped me reflect on my own definition of personal growth and power.
        
        The series beautifully illustrates how true strength comes not just from conquering others but from understanding 
        oneself and finding harmony with one's surroundings. Musashi's realization that the sword that gives life is 
        greater than the sword that takes it was particularly moving.
        
        I appreciated how the manga portrays mastery as an endless journey rather than a destination, teaching me that 
        even the greatest masters remain students at heart.
      `
    }
    // Additional manga would be added here
  ];

  return (
    <div className="manga-page">
      <div className="category-header">
        <h2>Manga</h2>
      </div>
      
      <div className="media-list">
        {mangaList.map(manga => (
          <MediaItem 
            key={manga.id}
            title={`${manga.title} by ${manga.creator}`}
            image={manga.image}
            content={manga.takeaways}
          />
        ))}
      </div>
    </div>
  );
};

export default Manga;