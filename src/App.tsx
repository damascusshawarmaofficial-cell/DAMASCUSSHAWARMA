import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import LivingHero from "./components/LivingHero"
import MenuSection from "./components/MenuSection"
import StorySection from "./components/StorySection"
import SignatureSection from "./components/SignatureSection"
import ReviewsSection from "./components/ReviewsSection"
import CateringSection from "./components/CateringSection"
import GallerySection from "./components/GallerySection"
import Footer from "./components/Footer"
import FoodVideoSection from "./components/FoodVideoSection"
import OrderSection from "./components/OrderSection"

import OurStoryPage from "./pages/OurStoryPage"
import StrawberryCupSection from "./components/StrawberryCupSection"

function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <LivingHero />

        <OrderSection />

        {/* <FeaturedMenu /> */}

        <MenuSection />

        <StorySection />

        <SignatureSection />

        <FoodVideoSection />

        <ReviewsSection />

        <CateringSection />

        <GallerySection />
        <StrawberryCupSection />

        {/* <LocationSection /> */}

        <Footer />
      </main>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Our Story */}
        <Route path="/our-story" element={<OurStoryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App