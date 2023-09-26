import React from 'react'
import Video from '../Video/Video'
import Image from 'next/image'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
    <Video />
   
    </div>
  )
}

export default Header
