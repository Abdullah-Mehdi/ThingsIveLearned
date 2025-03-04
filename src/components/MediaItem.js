import React from 'react';

const MediaItem = ({ title, image, content }) => {
  // Add the PUBLIC_URL prefix to the image path
  const imagePath = image.startsWith('http') 
    ? image // If it's an external URL, leave it as is
    : `${process.env.PUBLIC_URL}${image}`; // Otherwise, add the PUBLIC_URL prefix
  
  return (
    <div className="media-card">
      <div className="media-image">
        <img src={imagePath} alt={title} />
        <h3 className="media-title">{title}</h3>
      </div>
      <div className="media-content">
        <div className="media-takeaways">{content}</div>
      </div>
    </div>
  );
};

export default MediaItem;