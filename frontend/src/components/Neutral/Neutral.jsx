/* eslint-disable no-restricted-syntax */
// Import Swiper React components
// eslint-disable-next-line import/no-extraneous-dependencies
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import baelish from "../../assets/figurines/sans fond/baelish.png";
import tycho from "../../assets/figurines/sans fond/tycho.png";
import varys from "../../assets/figurines/sans fond/varys.png";
import blackguards from "../../assets/figurines/sans fond/BG.png";
import flayed from "../../assets/figurines/sans fond/FM.png";
import flayed2 from "../../assets/figurines/sans fond/FM2.png";
import flayedFL from "../../assets/figurines/sans fond/FMflank.png";
import hedgeK from "../../assets/figurines/sans fond/HK2.png";
import hedgeK2 from "../../assets/figurines/sans fond/HK3.png";
import hedgeK3 from "../../assets/figurines/sans fond/HK4.png";
import "./style.scss";

export default function Neutral() {
  const swiperRef = useRef();

  const sliderSettings = {
    440: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  };

  return (
    <section className="NeutralPage">
      <h2 className="factionTitleNeutr">Neutral</h2>
      <div className="swiperBlock">
        <button
          className="prevButtonNeutr slideButtonNeutr"
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <MdNavigateBefore className="iconPrevNeutr" />
        </button>
        <Swiper
          className="swiperNeutr"
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
              <img className="pictureChar" src={baelish} alt="Petyr Baelish" />
              <figcaption className="nameCharNeutr">
                Petyr Baelish <br />
                <span className="subnameCharNeutr">LITTLEFINGER</span>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="pictureBlock">
              <img className="pictureChar" src={tycho} alt="Tycho Nestoris" />
              <figcaption className="nameCharNeutr">
                Tycho Nestoris <br />
                <span className="subnameCharNeutr">IRON BANKER</span>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="pictureBlock">
              <img className="pictureChar" src={varys} alt="Lord Varys" />
              <figcaption className="nameCharNeutr">
                Lord Varys <br />
                <span className="subnameCharNeutr">THE SPIDER</span>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="pictureBlock">
              <img
                className="pictureChar tall"
                src={blackguards}
                alt="Bolton Blackguards"
              />
              <figcaption className="nameCharNeutr">
                House Bolton Blackguards
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="pictureBlock">
              <img className="pictureChar tall" src={flayed} alt="Flayed Men" />
              <figcaption className="nameCharNeutr">
                House Bolton Flayed Men
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="pictureBlock">
              <img
                className="pictureChar tall"
                src={flayed2}
                alt="Flayed Men"
              />
              <figcaption className="nameCharNeutr">
                House Bolton Flayed Men <br />
                <span className="subnameCharNeutr">(zoom)</span>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="pictureBlock">
              <img
                className="pictureChar tall"
                src={flayedFL}
                alt="Flayed Men"
              />
              <figcaption className="nameCharNeutr">
                House Bolton Flayed Men <br />
                <span className="subnameCharNeutr">(Flank)</span>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="pictureBlock">
              <img
                className="pictureChar tall"
                src={hedgeK}
                alt="Hedge Knights"
              />
              <figcaption className="nameCharNeutr">Hedge Knights</figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="pictureBlock">
              <img
                className="pictureChar tall"
                src={hedgeK2}
                alt="Hedge Knights"
              />
              <figcaption className="nameCharNeutr">
                Hedge Knights <br />
                <span className="subnameCharNeutr">(Flank)</span>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="pictureBlock">
              <img
                className="pictureChar tall"
                src={hedgeK3}
                alt="Hedge Knights"
              />
              <figcaption className="nameCharNeutr">
                Hedge Knights <br />
                <span className="subnameCharNeutr">(Flank zoom)</span>
              </figcaption>
            </figure>
          </SwiperSlide>
        </Swiper>
        <button
          className="nextButtonNeutr slideButtonNeutr"
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <MdNavigateNext className="iconNextNeutr" />
        </button>
      </div>
    </section>
  );
}
