import React from 'react'
import RightMainprofile from './rightMainprofile'
 import profile2 from '../assets/profile2.jpg';
 import './rightSide.css';
import RightOtherProfile from './rightOtherProfile';
import vibhanshuprofile from '../assets/vibhanshuprofile.jpg'
import devansh from '../assets/devansh.jpg'
import nikshu from '../assets/nikshu.jpg';
import vanshpndtt from '../assets/vanshpndtt.jpg';
import vipulfit from '../assets/vipulfit.jpg';
import ofcprisha  from '../assets/ofcprisha.jpg'
import share1 from '../assets/share1.png'
import hariomshreds from '../assets/hariomshreds.jpg'
function RightSide() {
    return (
         <>
       <div className="rightSidepage">
        <div className="rightsidebox">
             <RightMainprofile  profile= {profile2} userName="swolprinc" Name= "PRISHU" follow= "Switch"/>
         <div className="suggestnav">
             
                <div>Suggested for you</div>
                <div>See All</div>
             
        </div>
        </div>
            <div className="otherProfile">
                <RightOtherProfile ORprofileImg={devansh} UserName= "mr_devanshrajput" FollowedName= "Followed by shubham_Tomar"/>
                <RightOtherProfile ORprofileImg={nikshu} UserName= "nikshu_pndtt" FollowedName= "Followed by prishu_sharma07"/>
                <RightOtherProfile ORprofileImg={vanshpndtt} UserName= "vansh_pandat_0007" FollowedName= "Followed by jayant_dada"/>
                <RightOtherProfile ORprofileImg={ofcprisha} UserName= "Ofc_Prisha" FollowedName= "Followed by ritika"/>
                <RightOtherProfile ORprofileImg={vipulfit} UserName= "vip_ulfit" FollowedName= "Followed by pndtt_vansh002"/>
                 
            </div>
         
         <div className="fixedprofile">
                   <div className="box">
                       <div className='imgMessage'>
                              <img  className = "share" src={share1} alt="Share" /> 
                         
                       </div>
                       <div className="borderimg">
                         <div> <span>Messages</span></div>
                       <div className="rightnav">
                         <div className='frstimg'> <img   src={vibhanshuprofile} alt="" /></div>
                        <div className='secndimg'><img   src={nikshu} alt="" /></div>
                        <div className='thrdimg'><img   src={hariomshreds} alt="" /></div>
                       <div className="threedot">
                           <div className='first dot'></div>
                           <div className='second dot'></div>
                           <div className='third dot'></div>
                       </div>
                       </div>
                       </div>
                   </div>
                </div>
         
        </div>
         </>
        
        
       
    )
}

export default RightSide 
