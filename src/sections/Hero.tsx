'use client';

import React, { useEffect } from 'react';
import { heroSlides } from '@/data/data';
import './hero.css';
import AOS from 'aos';
import { useRouter } from 'next/navigation'; // Use next/navigation instead of next/router
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import HeroSlide from '@/components/HeroSlide';

export default function Hero() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <section id="hero-slider" className="hero-slider">
      <div className="container-md" data-aos="fade-in">
        <div className="row">
          <div className="col-12">
            {/* "Our Flavours" section above the slider */}
            <div className="our-flavours-section">
              <h2 className="flavours-title">Our Flavours</h2>
              <p className="flavours-description">
                Discover a variety of delightful and unique flavours to treat your dog. Each one is carefully crafted to suit your dog’s taste and health!
              </p>
            </div>

            {/* Slider Section */}
            <Swiper
              slidesPerView={'auto'}
              speed={500}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
              }}
              navigation={{
                nextEl: '.custom-swiper-button-next',
                prevEl: '.custom-swiper-button-prev',
              }}
              modules={[Autoplay, Pagination, Navigation]}
              loop={true}
              className="slideFeaturedPosts"
            >
              {heroSlides.map((slide, index) => (
                <SwiperSlide key={slide.id || index}>
                  <div onClick={() => router.push(slide.link)}>
                    <HeroSlide slide={slide} />
                  </div>
                </SwiperSlide>
              ))}
              <div className="custom-swiper-button-next">
                <span className="bi-chevron-right"></span>
              </div>
              <div className="custom-swiper-button-prev">
                <span className="bi-chevron-left"></span>
              </div>
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
