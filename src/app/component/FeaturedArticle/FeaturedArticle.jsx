import React from 'react'
import styles from './FeaturedArticle.module.css'
import Image from 'next/image'
const FeaturedArticle = () => {
  return (
    <div className={styles.containerPresentation}>
        <div className={styles.flipCard}>
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>
              <p className = {styles.title}>FEATURED PRODUCT</p>            
                <Image src="/fishing-rod.png" 
                className={styles.responsiveLogo}
                alt="Logo" 
                width={220} 
                height={120}
               />
               <p>Hover Me</p>
            </div>
            <div className={styles.flipCardBack}>
            <h3 className={styles.title}>Elite Angler Pro</h3>
            <h4 className={styles.subtitle}>Description:</h4>
            <p className={styles.text}>
            Introducing the <strong>Elite Angler Pro Fishing Rod</strong> - a fusion of advanced technology and expert craftsmanship. Designed with passion and precision.
            </p>
          <div className={styles.text}>
            <ul className={styles.featuresList}>
              <li>Ultra-Light Design</li>
              <li>Sensitivity</li>
              <li>Ergonomic Grip</li>
              <li>Versatility</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default FeaturedArticle