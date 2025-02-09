import './App.css'
import "swiper/swiper-bundle.css";
import { ChoosePlan } from './pages/ChoosePlan/ChoosePlan'
import { CustomiseNeed } from './pages/CustomiseNeed/CustomiseNeed'
import { HeroSection } from './pages/HeroSection/HeroSection'
import { UseExtension } from './pages/UseExtension/UseExtension'
import { WorkManagement } from './pages/WorkManagement/WorkManagement'
import { YourWork } from './pages/YourWork/YourWork';
import { YourData } from './pages/YourData/YourData';
import { OurSponsor } from './pages/OurSponsor/OurSponsor';
import { FavoriteApps } from './pages/FavoriteApps/FavoriteApps';
import { OurUsers } from './pages/OurUsers/OurUsers';
import { FooterSection } from './pages/FooterSection/FooterSection';
import { NavbarSection } from './pages/NavbarSection/NavbarSection';

function App() {

  return (
    <>
    <NavbarSection />
    <HeroSection />
    <WorkManagement />
    <UseExtension />
    <CustomiseNeed />
    <ChoosePlan />
    <YourWork />
    <YourData />
    <OurSponsor />
    <FavoriteApps />
    <OurUsers />
    <FooterSection />
    </>
  )
}

export default App
