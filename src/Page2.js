import React from 'react';
import styles from './Page2.module.css';

function Page2() {
  return (
    <div id={styles.page2}>
      <div id={styles['moving-text']}>
        <div className={styles.con}>
          <h1>ASPIRE</h1>
          <div id={styles.gola}></div>
          <h1>PURSUE</h1>
          <div id={styles.gola}></div>
          <h1>ACHIEVE</h1>
          <div id={styles.gola}></div>
        </div>
        {/* Add more .con elements similarly */}
      </div>
      <div id={styles['page2-bottom']}>
        <h1>Transform your educational journey with our comprehensive counseling services. Understand the options of private colleges in India, delve into the branches, and secure your future.</h1>
        <div id={styles['bottom-part2']}>
          <img src="https://images.unsplash.com/photo-1682695795931-a546abdb6733?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <p>Discover the allure of an ancient canyon on our site, where towering granite sentinels guide your digital journey. Picture the winding path leading to a mesmerizing plunge into the Gulf of Aqaba's azure embrace. Embark on a captivating online adventure, unlocking the enchantment of this magnificent canyon at your fingertips!</p>
        </div>
      </div>
      <div id={styles.aibutton}>
        <h4><a href="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/14/21/20241214211108-E1N38XIH.json">ASK</a></h4>
      </div>
      <div id={styles.gooey}></div>
    </div>
  );
}

export default Page2;
