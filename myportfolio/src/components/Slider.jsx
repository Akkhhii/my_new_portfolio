import {useContext} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { themeContext } from "../context/ThemeContext";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhdCUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Chat Application",
    description: "Created a real-time chat application where users can register and chat with other registered users. Utilized Socket.IO for event-driven, real-time web interactions.",
    link : "https://youtubeclone-26gz.onrender.com/",
  },
  {
    image: "https://images.unsplash.com/photo-1642726197634-2a21f764220a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHlvdXR1YmUlMjBjbG9uZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Youtube Clone",
    description: "Built a YouTube clone that streams videos across various categories by leveraging the YouTube API V3.",
    link : "https://youtubeclone-26gz.onrender.com/",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1739538279172-9bd4d900e60e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJvYm90JTIwcG9ydGZvbGlvfGVufDB8fDB8fHww",
    title: "Portfolio",
    description: "Relax by the riverside and enjoy the peaceful environment.",
    link : "https://akhils-portfolio.onrender.com/",
  },
];

const Slider = () => {

    const {theme} = useContext(themeContext)

  return (
    <div className="Slider w-full h-[80%] flex justify-center">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        spaceBetween={-100}
        initialSlide={Math.floor(slides.length / 2)}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="w-[95%] md:w-[80%] "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="rounded-2xl w-full h-full object-cover shadow-lg"
            />
            <div className={`slider-text absolute ${theme ? 'bg-white/70' : 'bg-black/60'} bottom-0 w-full shadow-xl rounded-b-2xl flex flex-col`}>
              <h2 className="text-md lg:text-2xl font-semibold">{slide.title}</h2>
              <p className="text-sm lg:text-lg">{slide.description}</p>
              <a href={slide.link}><button className={`view-btn text-sm w-[50%] md:w-[30%] rounded-md font-semibold bg-zinc-800 text-white`}>View Live</button></a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
