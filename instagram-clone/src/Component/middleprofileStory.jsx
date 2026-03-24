import React from 'react'
import './profileStory.css'

function middleprofileStory({img, profileName}) {
    return (
        <>
        
        <div className="profilediv">
           <div className="imgcircle">
            <div className="bgcwhite">
                 <img src={img} alt=""
             style={{
               
                objectFit: "cover",
                 
             }}
            className="storyImg"/>
            </div>
           </div>
            <span className="profileStoryName" >{profileName}</span> 
        </div>
        </>
    )
}

export default middleprofileStory
