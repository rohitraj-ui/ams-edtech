import React from "react";
import DOMPurify from "dompurify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MdChevronRight, MdKeyboardArrowLeft } from "react-icons/md";

export default function Testimonials({ testimonialsData }) {
  return (
    <section className="testimonial-section section-padding">
      <div className="container">
        {/* Section Title */}
        <div className="section-title text-center mb-20">
          <div className="sub-text justify-content-center">
            <img
              src="/assets/img/star.png"
              alt="star"
              loading="lazy"
              fetchPriority="low"
            />
            <p className="h6 mb-0 fw-bold">OUR Feedback</p>
            <img
              src="/assets/img/star.png"
              alt="star"
              loading="lazy"
              fetchPriority="low"
            />
          </div>
          <h2 className="title-anim">Check what these clients have to say</h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".array-next",
            prevEl: ".array-prev",
          }}
          // autoplay={{
          //   delay: 2000,
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
            0: { slidesPerView: 1 },
            575: { slidesPerView: 1 },
            767: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
          }}
        >
          {testimonialsData.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="testimonial-box-items text-center shadow-sm">
                <div className="client-image text-center mb-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    fetchPriority="low"
                    className="img-fluid rounded-3"
                  />
                </div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(t.message),
                  }}
                ></p>
                <div className="icon">
                  <img
                    src="/assets/img/testimonial/quote.png"
                    alt="quote"
                    loading="lazy"
                    fetchPriority="low"
                  />
                </div>
                <div className="client-info-item d-block text-center">
                  <div className="content">
                    <h3 className="fs-6">{t.name}</h3>
                    <p>{t.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation buttons */}
          <div className="array-button justify-content-center pt-5">
            <button className="array-prev" aria-label="Testimonial Preview">
              <MdKeyboardArrowLeft />
            </button>
            <button className="array-next" aria-label="Testimonial Next">
              <MdChevronRight />{" "}
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
