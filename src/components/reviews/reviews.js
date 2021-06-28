import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { ReviewsData } from './reviewsData'
import reviews from './reviews.module.css'
import 'swiper/swiper.scss';
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Reviews() {
     SwiperCore.use([Navigation, Pagination]);

     useEffect(() => {
          Aos.init()
     }, [])

     return (
          <>
               <div className={reviews.mainContainer} id="reviews">
                    {/* <h1 className={reviews.title}>Reviews</h1> */}
                    <div className={reviews.swiperContainer}>
                         <div data-aos="fade" data-aos-offset="300" data-aos-easing="linear" data-aos-duration="1200" className={reviews.swiperWrapper}>
                              <Swiper
                                   slidesPerView={4}
                                   spaceBetween={50}
                                   effect={'slide'}
                                   grabCursor={true}
                                   // initialSlide={2}
                                   loop={true}
                                   centeredSlides={true}
                                   coverflowEffect={{
                                        "rotate": 50,
                                        "stretch": 0,
                                        "depth": 50,
                                        "modifier": 1,
                                        "slideShadows": true
                                   }} pagination={false} className="mySwiper">
                                   <div className={reviews.swiperSlide}>
                                        {
                                             ReviewsData.map((reviewData) => {
                                                  return (
                                                       <SwiperSlide className={reviews.slide}>
                                                            <h3 className={reviews.profilePic}>{reviewData.img}</h3>
                                                            <h3 className={reviews.review}>"{reviewData.review}"</h3>
                                                            <h5>{reviewData.date}</h5>
                                                       </SwiperSlide>
                                                  )
                                             }) }
                                   </div>
                              </Swiper>
                         </div>
                    </div>
               </div>
          </>
     )
}
