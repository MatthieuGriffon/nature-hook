import './globals.css'
import { Oswald } from 'next/font/google'
import Header from './component/Header/Header.jsx'
import Footer from './component/Footer/Footer.jsx'


const oswald = Oswald({
  weight: ['300','600'],
  style: ['normal'],
   subsets: ['latin'],
   display: 'swap', 
  })

export const metadata = {
  title: 'Nature Hook',
  description: 'Nature Hook est un site de vente de produits de pêche',
}

export default function RootLayout ({ children }) {  
  return (
    <html lang="fr" className={oswald.className}>
      <body >
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
