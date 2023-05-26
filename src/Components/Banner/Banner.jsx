import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper";


// AOS 
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from "react-router-dom";



const Banner = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <section className="bg-gradient-to-l from-[#9b5b94] to-[#dec5db] text-gray-600">
            <div className=" mx-auto flex px-6 md:px-32 py-6 md:py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
                    <h1 className="text-4xl md:text-5xl mb-4 font-bold text-gray-900">Brick by Brick,
                        <br className="hidden lg:inline-block" /> Discover the Joy of LEGO!
                    </h1>
                    <p className="text-gray-800 mb-8">Welcome to our LEGO Wonderland, where imagination comes to life! Browse our vast collection of LEGO toys and let your creativity soar. From iconic sets to exclusive releases, we are your ultimate destination for all things LEGO. Start building your dreams today!</p>
                    <div className="flex justify-center">
                        <Link to={'/add_toy'} className="inline-flex bg-gradient-to-tr from-[#ab14a3] to-[#f280ec] hover:bg-gradient-to-r text-gray-100 border-0 py-2 px-6 rounded text-lg">Add Now</Link>
                        <Link to={'/blogs'} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Read Blog</Link>
                    </div>
                </div>
                <div data-aos="zoom-in" className="md:w-1/3 w-5/6">
                    <Swiper style={{
                        "--swiper-pagination-color": "#f3f4f6",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "16px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px"
                    }}
                        effect={"cube"}
                        grabCursor={true}
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        pagination={true}
                        modules={[EffectCube, Pagination]}
                        className="mySwiper"
                    >

                        <SwiperSlide>
                            <img src="https://i.ibb.co/Y2JWPwf/8554965-1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://i.ibb.co/k4W5tJD/b3-1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://i.ibb.co/rv533Ng/8555039-1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://i.ibb.co/CWJV7Rn/8554944-1.jpg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Banner;