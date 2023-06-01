import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { aboutMeData  , pages} from './data/data'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ijaz-portfolio',
  description: ' ijaz Web Developer ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header name={aboutMeData.name } pages={pages }/>
        {children}
        <Footer />
        </body>

    </html>
  )
}
