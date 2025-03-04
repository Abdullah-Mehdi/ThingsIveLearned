import React from 'react';
import MediaItem from './MediaItem';

const Poetry = () => {
  const poetryQuotes = [
    {
      id: 1,
      title: "The Prophet",
      author: "Khalil Gibran",
      image: "/images/poetry/gibran.jpg",
      takeaways: `
        "Your children are not your children. They are the sons and daughters of Life's longing for itself."
        
        This quote from Gibran's masterpiece helped me understand the delicate balance between guidance and freedom 
        in relationships. It taught me that true love means allowing others to follow their own path rather than 
        imposing our will upon them. As someone who tends to be protective of loved ones, this was a profound 
        lesson in letting go.
      `
    },
    {
      id: 2,
      title: "Do Not Go Gentle Into That Good Night",
      author: "Dylan Thomas",
      image: "/images/poetry/dylan-thomas.jpg",
      takeaways: `
        "Rage, rage against the dying of the light."
        
        Thomas's powerful villanelle about facing death with defiance rather than resignation resonated with me 
        during a difficult period. It taught me about the importance of living with purpose and passion until the very end.
        
        What struck me most was how the poem acknowledges different types of lives (wise men, good men, wild men, grave men), 
        yet prescribes the same fierce approach to mortality for all. It's a reminder that regardless of how we've lived, 
        our response to our finite existence matters.
      `
    },
    {
      id: 3,
      title: "This Is Water",
      author: "David Foster Wallace",
      image: "/images/poetry/dfw.jpg",
      takeaways: `
        "The really important kind of freedom involves attention, and awareness, and discipline, and effort, 
        and being able truly to care about other people and to sacrifice for them, over and over, in myriad petty little unsexy ways, every day."
        
        While technically from a commencement speech rather than a poem, Wallace's words about choosing how to think and what 
        to pay attention to fundamentally changed my approach to daily life. It taught me that the true battle isn't with 
        major life crises but with the automatic, unconscious thinking that can make ordinary days feel like a burden.
        
        His reminder that we have a choice in how we perceive situations—especially mundane, frustrating ones—helps me practice 
        mindfulness and compassion in everyday interactions.
      `
    }
  ];

  return (
    <div className="poetry-page">
      <div className="category-header">
        <h2>Poetry & Quotes</h2>
      </div>
      
      <div className="media-list">
        {poetryQuotes.map(item => (
          <MediaItem 
            key={item.id}
            title={`${item.title} by ${item.author}`}
            image={item.image}
            content={item.takeaways}
          />
        ))}
      </div>
    </div>
  );
};

export default Poetry;