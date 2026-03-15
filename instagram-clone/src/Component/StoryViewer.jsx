 import React from 'react';
import './storyViewer.css';
 import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function StoryViewer({ story, onClose }) {
  if (!story) return null; // nothing selected yet

  return (
    <div className="storyOverlay" onClick={onClose}>
      <div className="storyContent" onClick={(e) => e.stopPropagation()}>
        {/* <img className="storyImage" src={story.img} alt={story.profileName} /> */}

        
        
        {story.video ? (
          <video
            className="storyImage"
            src={story.video}
            autoPlay
            
            // loop
            playsInline
          />
        ) : (
          <img
            className="storyImage"
            src={story.img}
            alt={story.profileName}
          />
        )}
        <div className="storyHeader">
          <img className="storyProfilePic" src={story.img} alt={story.profileName} />
          <span className="storyProfileName">{story.profileName}</span>
        </div>
        <div className="storyFooter">
            <FavoriteBorderIcon sx={{fontSize: "30px",   position: "absolute", right: "63px", bottom: "20px"}} />
        </div>
      </div>
    </div>
  );
}

export default StoryViewer;
