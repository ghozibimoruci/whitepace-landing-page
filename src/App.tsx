import './App.css'
import 'swiper/css';
import 'swiper/css/bundle';
import { ChoosePlan } from './pages/ChoosePlan/ChoosePlan'
import { CustomiseNeed } from './pages/CustomiseNeed/CustomiseNeed'
import { HeroSection } from './pages/HeroSection/HeroSection'
import { UseExtension } from './pages/UseExtension/UseExtension'
import { WorkManagement } from './pages/WorkManagement/WorkManagement'
import { YourWork } from './pages/YourWork/YourWork';
import { YourData } from './pages/YourData/YourData';
import { OurSponsor } from './pages/OurSponsor/OurSponsor';
import { FavoriteApps } from './pages/FavoriteApps/FavoriteApps';

function App() {

  return (
    <>
    <HeroSection />
    <WorkManagement />
    <UseExtension />
    <CustomiseNeed />
    <ChoosePlan />
    <YourWork />
    <YourData />
    <OurSponsor />
    <FavoriteApps />
    </>
  )
}

export default App
