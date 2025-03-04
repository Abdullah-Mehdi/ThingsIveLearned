import React from 'react';
import MediaItem from './MediaItem';

const Books = () => {
  // Example data - in a real application, this would come from a database or API
  const books = [
    {
      id: 1,
      title: "Metamorphosis",
      author: "Franz Kafka",
      image: "/images/books/metamorphosis.jpg",
      takeaways: `
        Franz Kafka's Metamorphosis explores the alienation of modern humanity and the absurdity of life. 
        Through Gregor Samsa's transformation into an insect, I learned about how society treats those who cannot contribute 
        economically, and how quickly one can become an outsider in their own family.
        
        The novella taught me about the fragility of human connections and identity when challenged by radical change. 
        It also highlights how we often define ourselves through our work and utility to others, rather than our inherent value as individuals.
      `
    },
    {
      id: 2,
      title: "The Prophet",
      author: "Khalil Gibran",
      image: "/images/books/the-prophet.jpg",
      takeaways: `
        Khalil Gibran's poetic wisdom in The Prophet has been a source of guidance for me on love, marriage, children, giving, work, and other aspects of life.
        
        His perspective on love—"Love one another, but make not a bond of love"—taught me about the importance of freedom within relationships.
        
        I was particularly moved by his thoughts on children: "Your children are not your children. They are the sons and daughters of Life's longing for itself."
        This reminded me that we do not own those we love, but rather accompany them on their journey.
      `
    }
    // Additional books would be added here
  ];

  return (
    <div className="books-page">
      <div className="category-header">
        <h2>Books</h2>
      </div>
      
      <div className="media-list">
        {books.map(book => (
          <MediaItem 
            key={book.id}
            title={`${book.title} by ${book.author}`}
            image={book.image}
            content={book.takeaways}
          />
        ))}
      </div>
    </div>
  );
};

export default Books;