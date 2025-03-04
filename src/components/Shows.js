import React from 'react';
import MediaItem from './MediaItem';

const Shows = () => {
  const shows = [
    {
      id: 1,
      title: "City of God",
      director: "Fernando Meirelles, Kátia Lund",
      image: "/images/shows/city-of-god.jpg",
      takeaways: `
        City of God's unflinching portrayal of life in the favelas of Rio de Janeiro taught me about how environment shapes destiny, 
        and how violence perpetuates itself across generations. The contrasting paths of Rocket and Li'l Zé demonstrated how similar 
        starting points can lead to dramatically different outcomes based on the choices we make and opportunities we recognize.
        
        The film's non-linear storytelling showed me how history continuously shapes the present, and how escaping cycles of violence 
        requires both personal agency and external opportunity. It made me reflect on privilege, systemic poverty, and how art 
        (photography for Rocket) can serve as both documentation of injustice and a pathway to a different future.
      `
    },
    {
      id: 2,
      title: "Parasite",
      director: "Bong Joon-ho",
      image: "/images/shows/parasite.jpg",
      takeaways: `
        Parasite brilliantly illustrated the invisible barriers of class and the illusion of social mobility in modern society. 
        What struck me most was how the film refuses to villainize any character, instead showing how each family is simply 
        trying to survive within the constraints of their social position.
        
        The recurring motifs of above/below and the semi-basement home perfectly symbolized the liminal space occupied by 
        the Kim family—neither completely destitute nor able to truly access upper-class stability. The film taught me 
        how economic disparity warps human relationships, creating parasitic dependencies rather than genuine connections, 
        and how hope without structural change can become a form of cruelty.
      `
    },
    {
      id: 3,
      title: "Whiplash",
      director: "Damien Chazelle",
      image: "/images/shows/whiplash.jpg",
      takeaways: `
        Whiplash challenged my views on the pursuit of greatness and the price of excellence. Through the toxic relationship 
        between Fletcher and Andrew, the film posed uncomfortable questions: Does greatness require suffering? Does the end 
        justify abusive means? Can true artistry emerge from fear and trauma?
        
        What resonated with me was the film's refusal to provide easy answers. The final scene—Andrew's triumphant 
        performance followed by Fletcher's approving nod—left me both exhilarated and disturbed. It made me examine 
        my own relationships with mentors, my pursuit of perfection, and whether I've been complicit in toxic systems 
        that valorize achievement at any cost.
      `
    }
  ];

  return (
    <div className="shows-page">
      <div className="category-header">
        <h2>Movies</h2>
      </div>
      
      <div className="media-list">
        {shows.map(show => (
          <MediaItem 
            key={show.id}
            title={`${show.title} by ${show.director}`}
            image={show.image}
            content={show.takeaways}
          />
        ))}
      </div>
    </div>
  );
};

export default Shows;