import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Prompt.OS AI',
  description: 'Universal AI prompt engineering platform'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
