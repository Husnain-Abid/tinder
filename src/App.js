import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/common/HomePage.jsx'
import LearnPage from './pages/common/LearnPage.jsx'
import Support from './pages/common/Support.jsx'
import Download from './pages/common/Download.jsx'
import PremiumFeatures from './pages/common/products/PremiumFeatures.jsx'
import Platinum from './pages/common/products/Platinum.jsx'
import Gold from './pages/common/products/Gold.jsx'
import Plus from './pages/common/products/Plus.jsx'
import Product from './pages/common/products/Product.jsx'
import Subscription from './pages/common/products/Subscription.jsx'
import CommunityGuidelines from './pages/common/safety/CommunityGuidelines.jsx'
import SafetyReporting from './pages/common/safety/SafetyReporting.jsx'
import SafetyTips from './pages/common/safety/SafetyTips.jsx'
import SafetyPolicy from './pages/common/safety/SafetyPolicy.jsx'
import Security from './pages/common/safety/Security.jsx'
import LoginPopup from './components/common/Login.jsx'
import HomeAfterLogin from './pages/protected/Home.jsx'
import Select from './pages/common/products/Select.jsx'
import EditProfile from './pages/protected/EditProfile.jsx'
import SettingsPage from './pages/protected/SettingsPage.jsx'
import AddMedia from './pages/protected/AddMedia.jsx'
import PlatinumPackage from './pages/protected/packages/PlatinumPackage.jsx'
import GoldPackage from './pages/protected/packages/GoldPackage.jsx'
import PlusPackage from './pages/protected/packages/PlusPackage.jsx'
import TinderAllPlans from './pages/protected/packages/TinderAllPlans.jsx'
import MyBoostPackage from './pages/protected/packages/MyBoostPackage.jsx'
import TinderOrientation from './pages/signup/TinderOrientation.jsx'
import TinderAddPhotos from './pages/signup/TinderAddPhotos.jsx'
import TinderLifestyle from './pages/signup/TinderLifestyle.jsx'
import TinderLookingFor from './pages/signup/TinderLookingFor.jsx'
import TinderBirthday from './pages/signup/TinderBirthday.jsx'
import TinderName from './pages/signup/TinderName.jsx'
import TinderInterest from './pages/signup/TinderInterest.jsx'
import TinderGender from './pages/signup/TinderGender.jsx'
import TinderGenderInterest from './pages/signup/TinderGenderInterest.jsx'

function App() {

  return (
    <>

      <Routes>


        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<LearnPage />}></Route>
        <Route path='/support' element={<Support />}></Route>
        <Route path='/download' element={<Download />}></Route>

        <Route path='/login' element={<LoginPopup />}></Route>



        {/* products pages  */}
        <Route path='/products' element={<Product />}></Route>
        <Route path='/premium' element={<PremiumFeatures />}></Route>
        <Route path='/subscription' element={<Subscription />}></Route>
        <Route path='/plus' element={<Plus />}></Route>
        <Route path='/gold' element={<Gold />}></Route>
        <Route path='/platinum' element={<Platinum />}></Route>
        <Route path='/select' element={<Select />}></Route>


        {/* safety pages  */}
        <Route path='/community-guidelines' element={<CommunityGuidelines />}></Route>
        <Route path='/safety-reporting' element={<SafetyReporting />}></Route>
        <Route path='/safety-tips' element={<SafetyTips />}></Route>
        <Route path='/safety-policy' element={<SafetyPolicy />}></Route>
        <Route path='/security' element={<Security />}></Route>


        {/* protected pages  */}
        <Route path='/home' element={<HomeAfterLogin />}></Route>
        <Route path='/edit-profile' element={<EditProfile />}></Route>
        <Route path='/setting' element={<SettingsPage />}></Route>
        <Route path='/add-media' element={<AddMedia />}></Route>


        {/* packages pages  */}
        <Route path='/package/platinum' element={<PlatinumPackage />}></Route>
        <Route path='/package/gold' element={<GoldPackage />}></Route>
        <Route path='/package/plus' element={<PlusPackage />}></Route>
        <Route path='/package/all-plans' element={<TinderAllPlans />}></Route>
        <Route path='/package/boost' element={<MyBoostPackage />}></Route>


        {/* signup  */}
        <Route path='/user-name' element={<TinderName />}></Route>
        <Route path='/birthday' element={<TinderBirthday />}></Route>
        <Route path='/gender' element={<TinderGender />}></Route>
        <Route path='/orientation' element={<TinderOrientation />}></Route>
        <Route path='/gender-interest' element={<TinderGenderInterest />}></Route>
        <Route path='/looking-for' element={<TinderLookingFor />}></Route>
        <Route path='/lifestyle' element={<TinderLifestyle />}></Route>
        <Route path='/interest' element={<TinderInterest />}></Route>
        <Route path='/add-photos' element={<TinderAddPhotos />}></Route>


      </Routes>

    </>
  )
}

export default App
