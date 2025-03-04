import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background-images">
        <div className="bg-image" style={{ backgroundImage: "url('/images/metamorphosis.jpg')" }}></div>
        <div className="bg-image" style={{ backgroundImage: "url('/images/evangelion.jpg')" }}></div>
        <div className="bg-image" style={{ backgroundImage: "url('/images/nier-automata.jpg')" }}></div>
        <div className="bg-image" style={{ backgroundImage: "url('/images/the-prophet.jpg')" }}></div>
      </div>
      
      <div className="content-overlay">
        <h1>Things I've Learned</h1>
        <div className="description">
          <p>A common issue I have with consuming media - particularly written is forgetting any of the larger messages that resonated with me. That is any sort of moral, philosophical, societal messages and values I took to heart will often be lost to me with time.</p>
          <p>This project serves as a personal database of meaningful insights and takeaways from various forms of media that have left an impact on me.</p>
          <p>Browse through the tabs to explore my reflections on books, games, shows, anime, manga, and meaningful quotes that have shaped my perspective.</p>
        </div>
        
        <div className="cta">
          <p>Select a category above to begin exploring.</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;