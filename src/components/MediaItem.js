import React from 'react';

const MediaItem = ({ title, image, content }) => {
  return (
    <div className="media-card">
      <div className="media-image">
        <img src={image} alt={title} />
        <h3 className="media-title">{title}</h3>
      </div>
      <div className="media-content">
        <div className="media-takeaways">{content}</div>
      </div>
    </div>
  );
};

export default MediaItem;