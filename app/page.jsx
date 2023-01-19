import { Footer } from "../components"
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from "../sections"

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
)

export default Home
