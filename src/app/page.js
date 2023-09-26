"use client"
import styles from './page.module.css'
import Nav from './component/Navigation/Nav'

export default function Home() {
  return (
    <main className={styles.main}>
    <div>
    <Nav />

        {/* ... Le reste de votre contenu ... */}

      <section id="presentation">
     {/* Contenu de la section "Présentation" */}
    </section>

    <section id="article-avant">
      {/* Contenu de la section "Article en avant" */}
    </section>

    <section id="magasins-revendeur">
      {/* Contenu de la section "Où trouver le matériel" */}
    </section>
        </div>
        </main>
      )
}
