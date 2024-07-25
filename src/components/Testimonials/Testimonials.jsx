import React from 'react';
import css from "./Testimonials.module.css";
import Hero from '../../assets/testimonialHero.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TestimonialsData } from "../../data/testimonials";
import 'swiper/css';

const Testimonials = () => {
    return (
        <div className={css.Testimonials}>
            <div className={css.wrapper}>
                <div className={css.container}>
                    <span>Top Rated</span>
                    <span>
                        Seedily say suitable disposal and boy. Exercies joy man children rejoiced.
                    </span>
                </div>

                <img src={Hero} alt="" />

                <div className={css.container}>
                    <span>100k</span>
                    <span>Happy Customers With us</span>
                </div>
            </div>

            <div className={css.reviews}>Reviews</div>

            <div className={css.carousel}>
                <Swiper
                    slidesPerView={3}
                    slidesPerGroup={1}
                    spaceBetween={20}
                    className={css.tCarousel}
                    breakpoints={{
                        856: {
                            slidesPerView: 3
                        },
                        640: {
                            slidesPerView: 2
                        },
                        0: {
                            slidesPerView: 1
                        },
                    }}
                >
                    {TestimonialsData.map((testimonial, i) => (
                        <SwiperSlide key={i}>
                            <div className={css.testimonial}>
                                <img src={testimonial.image} alt="" />
                                <span>{testimonial.comment}</span>
                                <hr />
                                <span>{testimonial.name}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Testimonials;
