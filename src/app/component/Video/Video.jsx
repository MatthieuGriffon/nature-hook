"use client"
import styles from './Video.module.css'
import React, { useRef, useEffect } from 'react';

export default function Video() {
  const videoRef = useRef(null);
  
  useEffect(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 0.8;
      }
    }, []);

  return (
    <div>
      <video
      ref={videoRef}
      className={styles.video}
      autoPlay 
      muted 
      loop
       src="/video.mp4">
      </video>
    </div>
  );
}
