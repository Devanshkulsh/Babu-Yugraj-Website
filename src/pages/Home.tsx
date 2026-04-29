import HomeDepartments from "../components/home/HomeDepartments"
import HomeAbout from "../components/home/HomeAbout"
import HomeCampusLifeGallery from "../components/home/HomeCampusLifeGallery"
import HomeContactUs from "../components/home/HomeContactUs"
import HomeHospital from "../components/home/HomeHospital"
import HomeTestimonials from "../components/home/HomeTestimonials"
import HomeWhyChooseUs from "../components/home/HomeWhyChooseUs"
import Hero from "../components/home/Hero"


const Home = () => {
  return (
    <>
        <Hero />
        <HomeAbout />
        <HomeDepartments />
        <HomeWhyChooseUs />
        <HomeHospital />
        <HomeCampusLifeGallery />
        <HomeTestimonials />
        <HomeContactUs />
    </>
  )
}

export default Home
