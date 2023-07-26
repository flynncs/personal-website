import NavBar from "./components/NavBar";
import Home from "./components/Home"
import { SocialLinks } from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />

      <SocialLinks />
    </div>
  )
}