import React, { useState } from 'react';
import './middleSide.css';
import ProfileStory from './middleprofileStory';
import StoryViewer from './StoryViewer';
import MiddlePost from './middlePost';

import postFirstsiddique from '../assets/postFirstsiddique.mp4';
import vibhanshuprofile from '../assets/vibhanshuprofile.jpg';
import hariomshreds from '../assets/hariomshreds.jpg';
 
 import caliathletics from '../assets/caliathletics.jpg';
import srijiihh from '../assets/srijiihh.jpg';
import srijiihh1 from '../assets/srijiihh1.mp4';
import  caliathletics1 from '../assets/caliathletics1.mp4';
import souriya from '../assets/souriya.jpg'
import tallwinder from '../assets/tallwinder.jpg'
import abhishek from '../assets/abhishek.jpg'
import nikshu from '../assets/nikshu.jpg'
import calesthenicsgirl from '../assets/calesthenicsgirl.mp4'
import calesthenicgirl from '../assets/calesthenicgirl.jpg'
import siddique from '../assets/siddique.jpg'


function MiddleSide() {
  const [activeStory, setActiveStory] = useState(null);
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  //  Global mute/unmute state (shared across all videos)
  const [isMuted, setIsMuted] = useState(true);

  // Toggle mute globally
  const handleGlobalMute = () => {
    setIsMuted((prev) => !prev);
  };

  // Story list
  // video: postFirstsiddique,
  const stories = [
    {   img: vibhanshuprofile, profileName: 'vibhanshu...' },
    {  img: souriya, profileName: 'hariomshr...' },
    {  img: tallwinder, profileName: 'talwwinder...' },
    {  img: abhishek, profileName: 'Abhishek...' },
    {  img: nikshu, profileName: 'nikshu...' },
    { video: postFirstsiddique,img: hariomshreds, profileName: 'hariomshr...' },
  ];

  return (
    <>
      <div className="middleSideSection">
        {/*  Story Section */}
        <div className="storyProfileContainer">
          {stories.map((story, index) => (
            <div key={index} onClick={() => setActiveStory(story)}>
              <ProfileStory img={story.img} profileName={story.profileName} />
            </div>
          ))}
        </div>

        {/*  Post Section */}
        <div className="postContainer">
          <div className="middlePost">
            <MiddlePost
              profileImg={caliathletics}
              profileName="caliathletics"
              date="• 2d"
              
              suggestDetails="Gym addict"
              firstpost={caliathletics1}
              isMuted={isMuted}
              onGlobalMute={handleGlobalMute}
                
              isStoryOpen={isStoryOpen}
            />
            <MiddlePost
              profileImg={calesthenicgirl}
              profileName="Calesthenics_girl"
              date="• 2d"
              suggestDetails="suggested for you"
              firstpost={calesthenicsgirl}
              isMuted={isMuted}
              onGlobalMute={handleGlobalMute}
              
                isStoryOpen={isStoryOpen}
            />
             
            <MiddlePost
              profileImg={srijiihh}
              profileName="srijiihh"
              date="• 2d"
              suggestDetails="original"
              firstpost={srijiihh1}
              isMuted={isMuted}
               onGlobalMute={handleGlobalMute}
             
                isStoryOpen={isStoryOpen}
            />
            <MiddlePost
              profileImg={siddique}
              profileName="siddique"
              date="• 2d"
              suggestDetails="suggested for you"
              firstpost={postFirstsiddique}
              isMuted={isMuted}
              onGlobalMute={handleGlobalMute}
                
                isStoryOpen={isStoryOpen}
            />
             
          </div>
        </div>
      </div>

      {/*  Story Viewer (popup/modal) */}
      <StoryViewer story={activeStory} onClose={() => setActiveStory(null)} />
    </>
  );
}

export default MiddleSide;
