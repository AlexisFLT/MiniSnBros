// Import Swiper React components
// eslint-disable-next-line import/no-extraneous-dependencies
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
/* eslint-disable import/no-unresolved */
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import grootRocket from "../../assets/figurines/sans fond/groot-rocketMCP.png";
import grootRocket2 from "../../assets/figurines/sans fond/groot-rocketMCP2.png";
import "./style.scss";

export default function Guardians() {
  const swiperRef = useRef();

  const sliderSettings = {
    440: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  };

  return (
    <section className="GuardiansPage">
      <h2 className="affTitleGuard">Affiliation - Gardiens de la Galaxie</h2>
      <div className="swiperBlock">
        <button
          className="prevButtonGuard slideButtonGuard"
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <MdNavigateBefore className="iconPrevGuard" />
        </button>
        <Swiper
          className="swiperGuard"
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
                src={grootRocket}
                alt="Groot & Rocket Raccoon"
              />
              <figcaption className="nameCharGuard">
                Groot & Rocket Raccoon
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="pictureBlock">
              <img
                className="pictureChar"
                src={grootRocket2}
                alt="Groot & Rocket Raccoon"
              />
              <figcaption className="nameCharGuard">
                Groot & Rocket Raccoon
              </figcaption>
            </figure>
          </SwiperSlide>
        </Swiper>
        <button
          className="nextButtonGuard slideButtonGuard"
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <MdNavigateNext className="iconNextGuard" />
        </button>
      </div>
    </section>
  );
}
