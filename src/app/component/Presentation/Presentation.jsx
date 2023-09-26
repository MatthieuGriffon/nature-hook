import React from 'react'
import styles from './Presentation.module.css'
import Image from 'next/image'

const Presentation = () => {
  return (
    <div className={styles.containerPresentation}>
        <div className={styles.flipCard}>
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>
              <p className = {styles.title}>NATURE HOOK</p>
              <div className={styles.logoContainer}>
              <Image src="/logo_nature_hook_trans.png" 
              alt="Logo" 
              width={120} 
              height={120}
              className={styles.responsiveLogo}
              />
      </div>
            <p>Hover Me</p> 
            </div>
                <div className = {styles.flipCardBack}>
                <p className = {styles.text}>Dive into the thrilling world of fishing with NATURE HOOK, the go-to benchmark for fishing equipment and accessories. We cater to enthusiasts, hobbyists, and professionals alike, offering a comprehensive range of innovative and top-quality items. All our products are the result of thorough research, innovative design, and cutting-edge technology, crafted to provide you with an unparalleled fishing experience!</p>
                </div>
            </div>
          </div>
    </div>
  )
}
export default Presentation