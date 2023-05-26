import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Gallery = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className=" mt-6 mx-auto px-5 py-2 lg:px-32 lg:pt-24">
            <div className="flex w-full mb-10 md:mb-20 flex-wrap">
                <h1 className="sm:text-3xl text-2xl font-medium  text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Discover Our Vibrant LEGO Gallery - Where Creativity Takes Shape</h1>
                <p className="lg:pl-6 lg:w-2/3 mx-auto  text-base">Immerse yourself in a world of creativity as you journey through our gallery, where each display tells a unique story and invites you to join the adventure.From intricate cityscapes to whimsical characters, our LEGO gallery showcases the endless possibilities of building and the artistry behind each masterpiece.</p>
            </div>

            <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap">
                    <div data-aos="zoom-in" className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://i.ibb.co/SVC9Gth/b4-1.jpg" />
                    </div>
                    <div data-aos="zoom-in" className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://i.ibb.co/V3SBWYJ/b6-1.jpg" />
                    </div>
                    <div data-aos="zoom-in" className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://i.ibb.co/tXtBcRC/b1-1.png" />
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                    <div data-aos="zoom-in" className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://i.ibb.co/Ny9G9Nz/b2-1.jpg" />
                    </div>
                    <div data-aos="zoom-in" className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://i.ibb.co/5R8qyWS/900512-1.jpg" />
                    </div>
                    <div data-aos="zoom-in" className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://i.ibb.co/DpRrKPd/b5.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;