import './App.css'
import BannerSection from './components/BannerSection'
import AboutSection from './components/AboutSection'
import CategoriesSection from './components/CategoriesSection'
import ColoursSection from './components/ColoursSection'
import BlogSection from './components/BlogSection'
import { useEffect, useState } from 'react'
import { HOMEPAGE_QUERY } from './graphql/queries'
import { client } from './apollo/graphqlClient'
import Loader from './components/Loader'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import ContactSection from './components/ContactSection'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ColoursApi from './components/ColoursApi'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    client
      .request(HOMEPAGE_QUERY)
      .then((res) => setData(res))
      .catch(console.error);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (!data) return <Loader />;

  const content = data.pages.nodes[0].homepage;

  return (
    <>
      <div>
        <NavBar />
        <div id="home">
          <BannerSection
            banners={content.banners}
          />
        </div>

        <div id="about">
          <AboutSection
            content={content}
          />
        </div>

        <div id="categories" >
          <CategoriesSection
            content={content}
          />
        </div>

        <div id="colours">
          <ColoursSection
            title={content.homeColoursTitle}
            subtitle={content.homeColoursSubtitle}
            button={content.homeColoursButton}
            colours={data.allColourCategory.nodes[0].colours.nodes}
          />
        </div>

        <div id="blog">
          <BlogSection
            blogTitle={content.blogTitle}
            blogSubtitle={content.blogSubtitle}
            blogs={data.blogs.nodes}
          />
        </div>

        <div id="join">
          <ContactSection
            content={content}
          />
        </div>
        <Footer />
      </div>

      {/* <ColoursApi /> */}
    </>
  )
}

export default App
