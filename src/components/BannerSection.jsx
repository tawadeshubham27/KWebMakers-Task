import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const BannerSection = ({ banners }) => {
  if (!banners || banners.length === 0) return null;

  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={1000}
        slidesPerView={1}
        className="w-full h-[80vh]"
      >
        {banners.map((banner, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative font-poppins bg-cover bg-center h-[80vh] flex items-center justify-center text-white overflow-hidden group"
              style={{
                backgroundImage: `url(${banner?.bannerImage?.node?.sourceUrl})`,
              }}
            >
              <div className="absolute inset-0 flex flex-col justify-center items-start text-white bg-black/40 px-4 text-center">
                <div className='ms-10 flex flex-col'>
                  <h1 className="text-2xl md:text-5xl font-bold animate-fade-in-up delay-100">{banner.bannersTitle}</h1>
                  <p className="mt-4 max-w-xl text-lg animate-fade-in-up delay-300 text-start">{banner.bannerDescription}</p>
                  <a
                    href={banner.bannerButton.url}
                    target={banner.bannerButton.target}
                    rel="noopener noreferrer"
                    className="mt-6 bg-white text-black px-6 py-2 rounded hover:bg-gray-200 animate-fade-in-up delay-500 w-40"
                  >
                    {banner.bannerButton.title}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerSection;
