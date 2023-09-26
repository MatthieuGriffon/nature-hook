import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'


function page() {
  return (
    <div className={styles.container}>
      <Link className = {styles.link}  href="/">HOME</Link>
      <h1>Privacy Policy</h1>
      <h2>1. Introduction</h2>
      <p className={styles.text}>Thank you for visiting [SiteName]. This privacy policy is designed to inform users about how we gather, use, and protect your personal information.</p>

      <h2>2. Information Collection</h2>
      <p className={styles.text}>When visiting [SiteName], we may collect information such as your IP address, browser type, and pages you visit. If you create an account, we might also request personal information such as your name, email address, and phone number.</p>

      <h2>3. Information Use</h2>
      <p className={styles.text}>The information we gather is used to enhance your user experience, respond to your queries or requests, and possibly send you updates or promotions.</p>

      <h2>4. Information Protection</h2>
      <p className={styles.text}>[SiteName] is committed to securing your data and keeping it confidential. We implement various security measures to safeguard your data against unauthorized access.</p>

      <h2>5. Cookies</h2>
      <p className={styles.text}>[SiteName] uses cookies to improve your user experience. Cookies are small files stored on your computer by your web browser.</p>

      <h2>6. External Links</h2>
      <p className={styles.text}>Our website may contain links to other sites. We bear no responsibility for the privacy policies or content on these sites.</p>

      <h2>7. Policy Changes</h2>
      <p className={styles.text}>We might update this privacy policy occasionally. Changes will be reflected on this page.</p>

      <h2>8. Contact Us</h2>
      <p className={styles.text}>If you have any questions regarding this privacy policy, please feel free to contact us at [email@domain.com].</p>
      <Link className = {styles.link}  href="/">HOME</Link>
    </div>
    
  )
}

export default page