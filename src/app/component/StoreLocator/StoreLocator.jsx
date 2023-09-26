import React from 'react'
import Link from 'next/link'
import styles from './StoreLocator.module.css'
import Image from 'next/image'

const StoreLocator = () => {
  return (
    <div className={styles.containerStoreLocator}>
        <div className={styles.flipCard}>
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>
              <p className = {styles.title}>FIND US</p>
              <div className={styles.logoContainer}>
              <Image className={styles.logo} src="/shop.png" 
              alt="Logo" 
              width={220} 
              height={220}
              />
              </div>
                <p>Hover Me</p> 
            </div>
                <div className = {styles.flipCardBack}>
                <p className = {styles.text}>
                   <strong>🏪 Fishingtown:</strong>
                     123 Ocean Drive, Fishington, Atlantis, AT12345 
                    <br/>📞Phone: +1 234-567-8901<br/>
                    <strong>🏪Troutville:</strong>
                     456 Mountain High, Troutville, Fishland, FL67890 
                    <br/>📞Phone: +1 987-654-3210<br/>
                    <strong>Follow us on:</strong>
                    <br/>
                    <Link className={styles.link} href="https://www.facebook.com/YourBrandName">Facebook</Link>
                    <br/>
                    <Link className = {styles.link} href="https://www.twitter.com/YourBrandName">Twitter</Link>
                    <br/>
                    <Link className = {styles.link} href="https://www.instagram.com/YourBrandName">Instagram</Link></p>
                </div>
            </div>
          </div>
    </div>
  )
}

export default StoreLocator