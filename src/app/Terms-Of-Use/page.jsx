import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'


function page() {
  return (
    <div className={styles.container}>
    <Link className={styles.link} href="/">HOME</Link>
    
    <h1>Privacy Policy</h1>

    <h2>1. Introduction</h2>
    <p className={styles.text}>Thank you for visiting NatureHook Fishing Gear. This privacy policy informs users on our practices regarding the collection, use, and protection of your personal information.</p>

    <h2>2. Information Collection</h2>
    <p className={styles.text}>While using NatureHook Fishing Gear, we might record information like your IP address, browser details, and the pages you explore. If you register an account, personal details such as name, email, and phone number might be requested.</p>

    <h2>3. Information Use</h2>
    <p className={styles.text}>All collected data enhances user experience, responds to inquiries, and possibly sends updates or special offers about our products.</p>

    <h2>4. Information Protection</h2>
    <p className={styles.text}>NatureHook Fishing Gear values the security of your details. We have various security strategies in place to prevent unauthorized access to your data.</p>

    <h2>5. Cookies</h2>
    <p className={styles.text}>NatureHook Fishing Gear utilizes cookies to optimize your experience. These are minuscule files saved on your computer by the browser you're using.</p>

    <h2>6. External Links</h2>
    <p className={styles.text}>Our platform might host links to external websites. We are not responsible for the content or the privacy practices of these external sites.</p>

    <h2>7. Policy Changes</h2>
    <p className={styles.text}>Occasionally, we might adjust this privacy policy. All updates will be posted on this particular page.</p>

    <h2>8. Contact Us</h2>
    <p className={styles.text}>For inquiries about this privacy policy, kindly reach out to us at contact@naturehook.com.</p>
    
    <Link className={styles.link} href="/">HOME</Link>
</div>
    
  )
}

export default page