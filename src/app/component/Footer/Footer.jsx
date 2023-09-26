"use client"
import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.css'
import CookieConsent from "react-cookie-consent";

function Footer() {
  return (
    <footer className={styles.footer}>
         {/*BLOC GAUCHE*/ }
            <div className={styles.item.left}>
            <div className={styles.item}>
                © {new Date().getFullYear()} NatureHook
            </div>
            <CookieConsent enableDeclineButton flipButtons>
            This website uses cookies to enhance the user experience.
            </CookieConsent>
            </div>
        {/*BLOC DROITE*/ }
            <div className={styles.item.right}>
            <div className={styles.item}>
                <Link className = {styles.link}  href="/Privacy-Policy">
                Privacy Policy
                </Link>
            </div>
            <div className={styles.item}>
                <Link className = {styles.link}  href="/Terms-Of-Use">
                Terms of Use 
                </Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer