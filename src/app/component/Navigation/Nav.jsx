
import React, { useState  } from 'react'
import Link from 'next/link'
import styles from './Nav.module.css'
import Presentation from '../Presentation/Presentation'
import FeaturedArticle from '../FeaturedArticle/FeaturedArticle'
import StoreLocator from '../StoreLocator/StoreLocator'

const App = () => {
  const [currentComponent, setCurrentComponent] = useState('presentation');

  return (
    <div>
      <Nav setCurrentComponent={setCurrentComponent} />
      {currentComponent === 'presentation' && <Presentation />}
      {currentComponent === 'featuredArticle' && <FeaturedArticle />}
      {currentComponent === 'storeLocator' && <StoreLocator />}
    </div>
  );
}

const Nav = ({ setCurrentComponent }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li} onClick={() => setCurrentComponent('presentation')}>
            <a className={styles.link}>Presentation</a>
        </li>
        <li className={styles.li} onClick={() => setCurrentComponent('featuredArticle')}>
            <a className={styles.link}>Featured</a>
        </li>
        <li className={styles.li} onClick={() => setCurrentComponent('storeLocator')}>
            <a className={styles.link}>Store</a>
        </li>
      </ul>
    </nav>
  )
}

export default App;