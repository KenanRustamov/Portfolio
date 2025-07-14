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
          spaceBetween={30}
          coverflowEffect={{
            rotate: 0,
            stretch: 40,
            depth: 150,
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
              <div className="glass-card p-8 flex flex-col items-center justify-center min-h-[300px] max-w-[340px] w-full mx-auto group">
                <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/20 dark:border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={activity.icon}
                    alt={activity.title}
                    className="w-12 h-12 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    draggable={false}
                  />
                </div>
                <h3 className="text-gray-900 dark:text-gray-100 text-xl font-bold mb-2 text-center leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {activity.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4 text-center uppercase tracking-wide">
                  {activity.subtitle}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed text-center opacity-90">
                  {activity.description}
                </p>
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