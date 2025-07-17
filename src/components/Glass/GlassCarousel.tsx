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
            <SwiperSlide key={activity.id} className="w-full sm:!w-auto self-center">
              <div className="project-card w-full max-w-md mx-auto">
                <div className="w-full aspect-video bg-gradient-to-br from-white/95 to-white/90 dark:from-white/8 dark:to-white/4 mb-0 overflow-hidden">
                                      <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover transition-transform duration-300"
                      draggable={false}
                    />
                </div>
                <div className="text-center flex-1 flex flex-col p-6">
                  <div className="text-center">
                    {activity.url ? (
                      <a
                        href={activity.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group timeline-company-link text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 text-xl sm:text-2xl font-bold mb-2 inline-block relative leading-tight tracking-tight"
                      >
                        {activity.title}
                        <span className="
                          absolute -bottom-0.5 left-0 w-0 h-0.5
                          bg-gradient-to-r from-blue-600 to-blue-400
                          dark:from-blue-400 dark:to-blue-300
                          transition-all duration-300 ease-out
                          group-hover:w-full
                        "></span>
                      </a>
                    ) : (
                      <h3 className="text-gray-900 dark:text-gray-100 text-xl sm:text-2xl font-bold mb-2 leading-tight tracking-tight">
                        {activity.title}
                      </h3>
                    )}
                  </div>
                  <div className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-1 normal-case leading-snug opacity-90 uppercase tracking-wide text-center">
                    {activity.subtitle}
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-sm m-0 opacity-95 font-normal text-center">
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