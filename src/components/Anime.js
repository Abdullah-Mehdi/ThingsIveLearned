import React from 'react';
import MediaItem from './MediaItem';

const Anime = () => {
  const animeList = [
    {
      id: 1,
      title: "Neon Genesis Evangelion",
      creator: "Hideaki Anno",
      image: "/images/anime/evangelion.jpg",
      takeaways: `
        Neon Genesis Evangelion was my introduction to anime that tackles profound psychological and philosophical themes. 
        Through Shinji's struggle with isolation, self-worth, and the burden of responsibility, I found a mirror to my own 
        insecurities and fears of connection.
        
        The series' exploration of the Hedgehog's Dilemma—how humans desire closeness but fear the pain of intimacy—gave me 
        a framework to understand my own relationships. Eva taught me that while connecting with others brings pain, 
        the alternative of isolation is far worse.
        
        The controversial ending, particularly in "End of Evangelion," challenged me to consider whether individual identity 
        is worth preserving even at the cost of guaranteed pain, or if merging consciousness could bring a form of peace.
      `
    },
    {
      id: 2,
      title: "Monster",
      creator: "Naoki Urasawa",
      image: "/images/anime/monster.jpg",
      takeaways: `
        Monster's examination of good and evil through Dr. Tenma's moral journey showed me that ethics aren't black and white, 
        and that good intentions can lead to devastating consequences.
        
        Through Johan, the series explored the nature versus nurture debate and the making of a psychopath with nuance rarely 
        seen in any medium. It raised questions about whether evil is born or created, and if redemption is possible for everyone.
        
        The series also powerfully depicted how history's atrocities create generational trauma that continues to shape societies 
        and individuals long after the events themselves.
      `
    }
    // Additional anime would be added here
  ];

  return (
    <div className="anime-page">
      <div className="category-header">
        <h2>Anime</h2>
      </div>
      
      <div className="media-list">
        {animeList.map(anime => (
          <MediaItem 
            key={anime.id}
            title={`${anime.title} by ${anime.creator}`}
            image={anime.image}
            content={anime.takeaways}
          />
        ))}
      </div>
    </div>
  );
};

export default Anime;