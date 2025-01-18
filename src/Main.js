import React from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page5 from './Page5';
import LocomotiveScrollComponent from './LocomotiveScrollComponent';
import SwiperComponent from './SwiperComponent';
import MenuComponent from './MenuComponent';
import LoaderComponent from './LoaderComponent';
import styles from './Main.module.css';

function Main() {
  return (
    <div id={styles.main}>
      <LoaderComponent />
      <LocomotiveScrollComponent />
      <MenuComponent />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page5 />
      <SwiperComponent />
    </div>
  );
}

export default Main;
