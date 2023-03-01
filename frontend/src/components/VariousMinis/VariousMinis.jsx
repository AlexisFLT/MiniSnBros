// Import Swiper React components
// eslint-disable-next-line import/no-extraneous-dependencies
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
/* eslint-disable import/no-unresolved */
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import groot from "../../assets/figurines/sans fond/groot.png";
import velociraptor from "../../assets/figurines/sans fond/velo.png";
import "./style.scss";

export default function VariousMinis() {
  const swiperRef = useRef();

  const sliderSettings = {
    440: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  };

  return (
    <section className="VariousMinisPage">
      <div className="swiperBlock">
        <button
          className="prevButtonVarious slideButtonVarious"
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <MdNavigateBefore className="iconPrevVarious" />
        </button>
        <Swiper
          className="swiperVariousMinis"
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
              <img className="pictureChar" src={groot} alt="Groot" />
              <figcaption className="nameCharVarious">
                Groot
                <br />
                <span className="subnameCharTarg">Impression 3D</span>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="pictureBlock">
              <img
                className="pictureChar"
                src={velociraptor}
                alt="Vélociraptor"
              />
              <figcaption className="nameCharVarious">
                Vélociraptor
                <br />
                <span className="subnameCharTarg">Impression 3D</span>
              </figcaption>
            </figure>
          </SwiperSlide>
        </Swiper>
        <button
          className="nextButtonVarious slideButtonVarious"
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <MdNavigateNext className="iconNextVarious" />
        </button>
      </div>
    </section>
  );
}
