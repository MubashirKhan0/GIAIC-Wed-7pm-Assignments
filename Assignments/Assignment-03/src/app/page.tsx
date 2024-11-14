import Image from "next/image"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import WorkManagement from "./components/WorkManagement"
import Extention from "./components/Extention"
import Customize from "./components/Customizw"
import YourWork from "./components/YourWork"
import Sponsor from "./components/Sponsor"
import Footer from "./components/Footer/Footer"



export default function Home() {
  return (
    <div>
      
      <Hero />
      <WorkManagement />
      <Extention />
      <Customize />
      <YourWork/>
      <Sponsor/>
      
      
      
    </div>
  )
}
   
