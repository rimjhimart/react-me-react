import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const LocomotiveScrollComponent = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#main'),
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return null;
};

export default LocomotiveScrollComponent;
