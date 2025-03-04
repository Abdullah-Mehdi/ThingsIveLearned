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