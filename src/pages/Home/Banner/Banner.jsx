import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImage1 from "../../../assets/Banner-1/pic-1.jpeg";
import bannerImage2 from "../../../assets/Banner-1/pic-2.jpeg";
import bannerImage3 from "../../../assets/Banner-1/pic-3.jpeg";
import bannerImage4 from "../../../assets/Banner-1/pic-4.jpg";
import bannerImage5 from "../../../assets/Banner-1/pic-5.jpg";
import bannerImage6 from "../../../assets/Banner-1/pic-6.jpg";

const Banner = () => {
    return (
        <div className="w-full pt-16 md:pt-20"> {/* নেভবার ফিক্সড থাকার কারণে উপরে যাতে চাপা না পড়ে তার জন্য প্যাডিং দেওয়া হয়েছে */}
            <Carousel 
                className="shadow-xl"
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                interval={4000} // ৪ সেকেন্ড পর পর ইমেজ পরিবর্তন হবে
                transitionTime={800}
                showStatus={false}
                stopOnHover={false}
            >
                {/* Banner Item 1 */}
                <div className="relative h-[60vh] md:h-[80vh] w-full">
                    <img 
                        src={bannerImage1} 
                        alt="Environment Club Banner 1" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h2 className="text-white text-2xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg text-center px-4">
                            Welcome to DScE Environment Club
                        </h2>
                    </div>
                </div>

                {/* Banner Item 2 */}
                <div className="relative h-[60vh] md:h-[80vh] w-full">
                    <img 
                        src={bannerImage2} 
                        alt="Environment Club Banner 2" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h2 className="text-white text-2xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg text-center px-4">
                            Environmental Carnival 2026
                        </h2>
                    </div>
                </div>

                {/* Banner Item 3 */}
                <div className="relative h-[60vh] md:h-[80vh] w-full">
                    <img 
                        src={bannerImage3} 
                        alt="Environment Club Banner 3" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h2 className="text-white text-2xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg text-center px-4">
                            Green Campus, Clean Environment
                        </h2>
                    </div>
                </div>

                {/* Banner Item 4 */}
                <div className="relative h-[60vh] md:h-[80vh] w-full">
                    <img 
                        src={bannerImage4} 
                        alt="Environment Club Banner 4" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h2 className="text-white text-2xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg text-center px-4">
                            Join Us in Our Eco-Friendly Initiatives
                        </h2>
                    </div>
                </div>

                {/* Banner Item 5 - Sustainable Fair 2026 */}
                <div className="relative h-[60vh] md:h-[80vh] w-full">
                    <img 
                        src={bannerImage5} 
                        alt="Sustainable Fair 2026" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h2 className="text-white text-2xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg text-center px-4">
                            Sustainable Fair 2025 - Innovating for a Greener Tomorrow
                        </h2>
                    </div>
                </div>

                {/* Banner Item 6 - Sustainable Fair 2026 */}
                <div className="relative h-[60vh] md:h-[80vh] w-full">
                    <img 
                        src={bannerImage6} 
                        alt="Sustainable Fair 2026 Moments" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h2 className="text-white text-2xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg text-center px-4">
                            Glimpses of Sustainable Fair 2025
                        </h2>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;