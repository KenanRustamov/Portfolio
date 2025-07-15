import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { ExtracurricularActivity } from '../../data/dataLoader';
import ChevronLeftIcon from '../icons/ChevronLeftIcon';
import ChevronRightIcon from '../icons/ChevronRightIcon';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface GlassCarouselProps {
  activities: ExtracurricularActivity[];
  sectionTitle?: string;
}

const GlassCarousel: React.FC<GlassCarouselProps> = ({ activities, sectionTitle }) => {
  return (
    <section className="w-full flex flex-col items-center py-16 sm:py-24" id="beyond-work-section">
      {sectionTitle && (
        <h2 className="section-title text-blue-600 dark:text-blue-400 text-3xl sm:text-4xl font-bold mb-12 relative inline-block tracking-tight drop-shadow-lg">
          {sectionTitle}
        </h2>
      )}
      
      <div className="w-full max-w-7xl mx-auto px-4 relative">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          initialSlide={Math.floor(activities.length / 2)}
          spaceBetween={50}
          coverflowEffect={{
            rotate: 0,
            stretch: 20,
            depth: 250,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            el: '.swiper-pagination-custom',
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="glass-carousel-swiper"
        >
          {activities.map((activity) => (
            <SwiperSlide key={activity.id} className="!w-auto self-center">
              <div className="glass-card p-6 flex flex-col items-center justify-start min-h-[480px] max-w-[320px] w-full mx-auto group">
                <div className="w-full h-48 bg-gray-500/20 rounded-lg mb-6 overflow-hidden">
                  <img
                    src={activity.icon} // This will be the placeholder image
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    draggable={false}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-gray-900 dark:text-gray-100 text-2xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {activity.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4 uppercase tracking-wide">
                    {activity.subtitle}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed opacity-90">
                    {activity.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation */}
        <div className="swiper-button-prev-custom">
          <ChevronLeftIcon />
        </div>
        <div className="swiper-button-next-custom">
          <ChevronRightIcon />
        </div>

        {/* Custom Pagination */}
        <div className="swiper-pagination-custom"></div>
      </div>
    </section>
  );
};

export default GlassCarousel; 