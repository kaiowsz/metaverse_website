import { Inter } from '@next/font/google'

import { Footer, Navbar } from "../components"
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from "../sections"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About />
      <Explore />
      <GetStarted />
      <WhatsNew />
      <World />
      <Insights />
      <Feedback />
      <Footer />
    </div>
  )
}
