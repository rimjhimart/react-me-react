import React, { useEffect } from 'react';
import styles from './LoaderComponent.module.css';

const LoaderComponent = () => {
  useEffect(() => {
    const loader = document.querySelector('#loader');
    setTimeout(() => {
      loader.style.top = '-100%';
    }, 4200);
  }, []);

  return (
    <div id="loader" className={styles.loader}>
      <h1>ENVIRONMENTS</h1>
      <h1>EXPERIENCES</h1>
      <h1>TRAVELS</h1>
    </div>
  );
};

export default LoaderComponent;
