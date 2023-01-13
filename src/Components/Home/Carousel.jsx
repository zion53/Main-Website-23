import React, { useEffect, useRef, useState } from "react";
import vid1 from './bookCoverVideos/book float.webm';
import vid2 from './bookCoverVideos/cover-pronites animation.webm';
import vid3 from './bookCoverVideos/creators camp-humor fest animation.webm';
import vid4 from './bookCoverVideos/humor fest-proshows animation.webm';
import vid5 from './bookCoverVideos/pronites-creators camp.webm';
import './BookCover.css';

function App() {
    const videos=[vid1, vid2,vid5, vid3, vid4];
    var index=0;
    const videoSrc = useRef();
    const openBook = useRef();
    const nextBtn = useRef();
    const prevBtn = useRef();
    const timeout=()=>{setTimeout(()=>{
      prevBtn.current.disabled=false;
      nextBtn.current.disabled=false;
      openBook.current.disabled=false;
    },1700)}
    function showNext(e){
      if(index<=5){
        index=index+1;
      }
      if(index>1){
        prevBtn.current.style.display='block';
      }
      if(index<5){
        videoSrc.current.src=videos[index];
        prevBtn.current.disabled=true;
        nextBtn.current.disabled=true;
        timeout();
        console.log(videoSrc.current);
      }
      if(index===4){
        nextBtn.current.style.display='none';
      }
      return true;
    }
    function showNext1(e){
      index=index+1;
      openBook.current.style.display='none';
      prevBtn.current.style.display='none';
      nextBtn.current.style.display='block';
        videoSrc.current.src=videos[index];
        prevBtn.current.setAttribute('disabled','true');
        nextBtn.current.disabled=true;
        timeout();
      }
      function showPrevious(e){
        if(index>=0){
          index=index-1;
        }
        if(index<=1){
          prevBtn.current.style.display='none';
        }
        if(0<=index<=4){
        nextBtn.current.style.display='block';
        videoSrc.current.src=videos[index];
        prevBtn.current.disabled=true;
        nextBtn.current.disabled=true;
        timeout();
      }
    }
    useEffect(()=>{
      if(index===0){
        openBook.current.style.display='block';
        openBook.current.disabled=true;
        prevBtn.current.style.display='none';
        nextBtn.current.style.display='none';
        const f= ()=>{
          timeout(()=>{
            openBook.current.disabled=false;
          })
        }
        f();
      }
    });
  return (
    <div className="main_cont">
          <div className="video_container">
            <video id="vid1" ref={videoSrc} src={videos[index]} autoPlay muted>
            </video>
          </div>
          <div className="buttons">
            <button ref={openBook} className='openbookBtn' onClick={(e)=>{showNext1()}}>Click to Open</button>
            <button className='prevBtn' onClick={(e)=>{showPrevious()}} ref={prevBtn}>PREVIOUS</button>
            <button className='nxtBtn' onClick={(e)=>{showNext()}} ref={nextBtn}>NEXT</button>
          </div>
    </div>
  );
}

export default App;
