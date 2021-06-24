import React, { useState } from 'react';
import slider from './slider.module.css'
import { SlideData } from './SlideData'
import { FaCaretSquareLeft, FaCaretSquareRight } from 'react-icons/fa'

export default function Image_slider({ slides }) {
     const [current, setCurrent] = useState(0)
     const length = slides.length

     const nextSlide = () => {
          setCurrent(current === length - 1 ? 0 : current + 1)
     }

     const prevSlide = () => {
          setCurrent(current === 0 ? length - 1 : current - 1)
     }

     if (!Array.isArray(slides) || slides.length <= 0) {
          return null
     }

     return (
          <section className={slider.slider}>
               <h2 className={slider.header}>Our Chefs, Your Home.</h2>
               <div className={slider.imageSlider}>
               <FaCaretSquareLeft className={slider.left_arrow} onClick={prevSlide} />
               <FaCaretSquareRight className={slider.right_arrow} onClick={nextSlide} />
               {SlideData.map((slide, index) => {
                    return (
                              <div className={index === current ? 'slide active' : 'slide'} key={index} >
                                   {index === current && (
                                        <img src={slide.image} alt='josh catering company' className={slider.image} />
                                   )}
                              </div>
                    )
               })}
               </div>
          </section>
     )
}
