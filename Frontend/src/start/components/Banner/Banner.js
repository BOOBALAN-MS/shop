import React from 'react';
import styles from './Banner.module.css';
// import images from '../../../assets/images/Banner-1.jpg';

export function Banner() {
  return (
    <div>      
      {/* <img className={`mx-auto ${styles.images}`} src={images} alt="Banner" /> */}
      <img className={`border border-amber-700 mx-auto ${styles.images}`}/>
    </div>
  )
}
