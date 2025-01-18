import React from 'react';
import styles from './Page3.module.css';

function Page3() {
  return (
    <div id={styles.page3}>
      <div id={styles['golaa-small']}></div>
      <h1 className={styles.HEADING}>FEATURED INSTITUTE</h1>
      <div id={styles['elem-container']}>
        <div className={styles.elem}>
          <div className={styles.overlay}></div>
          <h2>SOHO 2023</h2>
        </div>
        {/* Add more .elem elements similarly */}
      </div>
      <div id={styles['fixed-image']}></div>
      <div id={styles['page3-1']}>
        <div id={styles['black-box']}>
          <div id={styles['tab-sec']}>
            <div id={styles.tabs}>
              <h2 id={styles.Design}>Design</h2>
            </div>
            <p className={styles.desc}>
              Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.
            </p>
          </div>
          <img id={styles['page3-1-img']} src="https://images.unsplash.com/photo-1701001308648-7b731a52b8d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
        </div>
        <div id={styles.sec2}>
          <div id={styles.gol}></div>
          <p>HOW DOES IT WORK</p>
        </div>
        <div className={`${styles.swiper} ${styles['swiper-initialized']} ${styles['swiper-horizontal']} ${styles['swiper-backface-hidden']}`}>
          <div className={styles['swiper-wrapper']}>
            <div className={`${styles['swiper-slide']} ${styles['swiper-slide-active']}`}>
              <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15ff_Nike.svg" alt=""/>
              <p>Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management, Production/Project Management, and execution of work from concept to installation across the Country.</p>
            </div>
            {/* Add more swiper slides similarly */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;
