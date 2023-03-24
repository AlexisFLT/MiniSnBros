// Import Swiper React components
// eslint-disable-next-line import/no-extraneous-dependencies
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
/* eslint-disable import/no-unresolved */
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import wookies from "../../assets/figurines/sansFond/SWL/wookies+chewi.png";
import rebels from "../../assets/figurines/sansFond/SWL/rebels.png";
import "./style.scss";

export default function Rebels() {
  const swiperRef = useRef();

  const sliderSettings = {
    440: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  };

  return (
    <section className="RebelsPage">
      <h2 className="affTitleReb">Armée Rebelles</h2>
      <div className="swiperBlock">
        <button
          className="prevButtonReb slideButtonReb"
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <MdNavigateBefore className="iconPrevReb" />
        </button>
        <Swiper
          className="swiperReb"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          breakpoints={sliderSettings}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // eslint-disable-next-line no-restricted-syntax
          onSwiper={(swiper) => console.log(swiper)}
          // eslint-disable-next-line no-restricted-syntax
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <figure className="pictureBlock">
              <img
                className="pictureChar"
                src={wookies}
                alt="Chewbacca & Guerriers Wookie"
              />
              <figcaption className="nameCharReb">
                Chewbacca & Guerriers Wookie
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="pictureBlock">
              <img
                className="pictureChar"
                src={rebels}
                alt="Soldats Rebelles"
              />
              <figcaption className="nameCharReb">Soldats Rebelles</figcaption>
            </figure>
          </SwiperSlide>
        </Swiper>
        <button
          className="nextButtonReb slideButtonReb"
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <MdNavigateNext className="iconNextReb" />
        </button>
      </div>
    </section>
  );
}
