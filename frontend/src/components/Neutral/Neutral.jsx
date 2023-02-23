/* eslint-disable no-restricted-syntax */
// Import Swiper React components
// eslint-disable-next-line import/no-extraneous-dependencies
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
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
  return (
    <section className="NeutralPage">
      <h2 className="factionTitleNeutr">Neutral</h2>
      <Swiper
        className="swiperNeutr"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        grabCursor="true"
        loop="true"
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <figure className="pictureBlock">
            <img className="pictureChar" src={baelish} alt="Petyr Baelish" />
            <figcaption className="nameChar">
              Petyr Baelish <br />
              <span className="subnameChar">LITTLEFINGER</span>
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="pictureBlock">
            <img className="pictureChar" src={tycho} alt="Tycho Nestoris" />
            <figcaption className="nameChar">
              Tycho Nestoris <br />
              <span className="subnameChar">IRON BANKER</span>
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="pictureBlock">
            <img className="pictureChar" src={varys} alt="Lord Varys" />
            <figcaption className="nameChar">
              Lord Varys <br />
              <span className="subnameChar">THE SPIDER</span>
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="pictureBlock">
            <img
              className="pictureChar"
              src={blackguards}
              alt="Bolton Blackguards"
            />
            <figcaption className="nameChar">
              House Bolton Blackguards
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="pictureBlock">
            <img className="pictureChar" src={flayed} alt="Flayed Men" />
            <figcaption className="nameChar">
              House Bolton Flayed Men
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="pictureBlock">
            <img className="pictureChar" src={flayed2} alt="Flayed Men" />
            <figcaption className="nameChar">
              House Bolton Flayed Men <br />
              <span className="subnameChar">(zoom)</span>
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="pictureBlock">
            <img className="pictureChar" src={flayedFL} alt="Flayed Men" />
            <figcaption className="nameChar">
              House Bolton Flayed Men <br />
              <span className="subnameChar">(Flank)</span>
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="pictureBlock">
            <img className="pictureChar" src={hedgeK} alt="Hedge Knights" />
            <figcaption className="nameChar">Hedge Knights</figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="pictureBlock">
            <img className="pictureChar" src={hedgeK2} alt="Hedge Knights" />
            <figcaption className="nameChar">
              Hedge Knights <br />
              <span className="subnameChar">(Flank)</span>
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="pictureBlock">
            <img className="pictureChar" src={hedgeK3} alt="Hedge Knights" />
            <figcaption className="nameChar">
              Hedge Knights <br />
              <span className="subnameChar">(Flank zoom)</span>
            </figcaption>
          </figure>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
