import React from 'react';
import styles from './Page1.module.css';

function Page1() {
  return (
    <div id={styles.page1}>
      <nav className={styles.nav}>
        <img src="Frame 8 (1)1.png" width="150px" alt="" />
        <div id={styles['nav-part2']}>
          <h4><a href="#">Aim</a></h4>
          <h4><a href="#">Analysis</a></h4>
          <h4><a href="#">Ask</a></h4>
        </div>
        <h3>Menu</h3>
      </nav>
      <div id={styles.center}>
        <div id={styles.left}>
          <h3>Our platform simplifies college admissions with a seamless THREE-TAP experience, combining AI-driven insights, interactive tools, and personalized counseling.</h3>
        </div>
        <div id={styles.right}>
          <h1>DESIGN <br /> YOUR <br /> JOURNEY</h1>
        </div>
      </div>
      <div id={styles['hero-shape']}>
        <div id={styles['hero-1']}></div>
        <div id={styles['hero-2']}></div>
        <div id={styles['hero-3']}></div>
      </div>
      <video autoPlay loop muted src="video for bg web2.mp4" className={styles.video}></video>
    </div>
  );
}

export default Page1;
