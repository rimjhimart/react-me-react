import React, { useState } from 'react';
import styles from './MenuComponent.module.css';

const MenuComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <img src="Frame 8 (1)1.png" width="150px" alt=""/>
      <h3 onClick={handleMenuClick}>Menu</h3>
      <div id="full-scr" className={isOpen ? styles.open : styles.closed}></div>
    </nav>
  );
};

export default MenuComponent;
