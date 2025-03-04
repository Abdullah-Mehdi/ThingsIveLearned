import React from 'react';
import MediaItem from './MediaItem';

const Games = () => {
  const games = [
    {
      id: 1,
      title: "Nier: Automata",
      developer: "PlatinumGames",
      image: "/images/games/nier-automata.jpg",
      takeaways: `
        Nier: Automata's exploration of consciousness, purpose, and what it means to be human deeply affected me.
        
        The game asks profound questions about existence: If we are programmed to have emotions and consciousness, are those 
        feelings any less real than humans'? The cycles of violence and revenge, punctuated by moments of sacrifice and compassion,
        showed me how purpose can be found even in a seemingly meaningless world.
        
        The ending's message about hope and the value of struggle—even when everything seems futile—resonated with me 
        in a way few other pieces of media have.
      `
    },
    {
      id: 3,
      title: "Disco Elysium",
      developer: "ZA/UM",
      image: "/images/games/disco-elysium.jpg",
      takeaways: `
        Disco Elysium's unflinching look at politics, identity, and personal failure created one of the most profound 
        gaming experiences I've had. Through its amnesiac detective protagonist, I explored how we construct ourselves 
        from our past mistakes and ideological beliefs.
        
        The game taught me about the power of redemption and reinvention, while also acknowledging how the ghosts of 
        our past choices continue to haunt us. Its political commentary showed how ideologies can both inspire and blind us, 
        and how personal traumas often shape our worldviews.
      `
    }
  ];

  return (
    <div className="games-page">
      <div className="category-header">
        <h2>Games</h2>
      </div>
      
      <div className="media-list">
        {games.map(game => (
          <MediaItem 
            key={game.id}
            title={`${game.title} by ${game.developer}`}
            image={game.image}
            content={game.takeaways}
          />
        ))}
      </div>
    </div>
  );
};

export default Games;