// Import Swiper React components
// eslint-disable-next-line import/no-extraneous-dependencies
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
/* eslint-disable import/no-unresolved */
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import drogon from "../../assets/figurines/sans fond/drogon.png";
import raeghal from "../../assets/figurines/sans fond/raeghal.png";
import viserion from "../../assets/figurines/sans fond/viserion.png";
import greyworm from "../../assets/figurines/sans fond/greyworm.png";
import belwas from "../../assets/figurines/sans fond/belwas.png";
import selmy from "../../assets/figurines/sans fond/selmy.png";
import xaro from "../../assets/figurines/sans fond/xaro.png";
import illyrio from "../../assets/figurines/sans fond/illyrio.png";
import jorah from "../../assets/figurines/sans fond/jorah.png";
import swordmasters from "../../assets/figurines/sans fond/swordmaster.png";
import pikemen from "../../assets/figurines/sans fond/pikemen.png";
import mercenaries from "../../assets/figurines/sans fond/mercenaries.png";
import archers from "../../assets/figurines/sans fond/archers.png";
import hrakkars from "../../assets/figurines/sans fond/hrakkars.png";
import bloodriders from "../../assets/figurines/sans fond/bloodriders.png";
import screamers from "../../assets/figurines/sans fond/screamer.png";
import "./style.scss";

export default function Targaryen() {
  const swiperRef = useRef();

  const sliderSettings = {
    440: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  };

  return (
    <section className="targaryenPage">
      <h2 className="factionTitleTarg">House Targaryen</h2>
      <div className="swiperBlock">
        <button
          className="prevButtonTarg slideButtonTarg"
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <MdNavigateBefore className="iconPrevTarg" />
        </button>
        <Swiper
          className="swiperTarg"
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
              <img className="pictureChar" src={drogon} alt="Drogon" />
              <figcaption className="nameCharTarg">Drogon</figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="pictureBlock">
              <img className="pictureChar" src={raeghal} alt="Raeghal" />
              <figcaption className="nameCharTarg">Raeghal</figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="pictureBlock">
              <img className="pictureChar" src={viserion} alt="Viserion" />
              <figcaption className="nameCharTarg">Viserion</figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="pictureBlock">
              <img className="pictureChar" src={greyworm} alt="Grey Worm" />
              <figcaption className="nameCharTarg">
                Grey Worm <br />
                <span className="subnameCharTarg">UNSULLIED COMMANDER</span>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="pictureBlock">
              <img className="pictureChar" src={belwas} alt="Belwas" />
              <figcaption className="nameCharTarg">
                Belwas <br />{" "}
                <span className="subnameCharTarg">THE STRONG</span>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="pictureBlock">
              <img className="pictureChar" src={selmy} alt="Barristan Selmy" />
              <figcaption className="nameCharTarg">
                Barristan Selmy <br />
                <span className="subnameCharTarg">THE BOLD</span>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="pictureBlock">
              <img className="pictureChar" src={xaro} alt="Xaro Xhoan Daxos" />
              <figcaption className="nameCharTarg">
                Xaro Xhoan Daxos <br />
                <span className="subnameCharTarg">
                  MERCHANT PRINCE OF QARTH
                </span>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="pictureBlock">
              <img
                className="pictureChar"
                src={illyrio}
                alt="Illyrio Mopatis"
              />
              <figcaption className="nameCharTarg">
                Illyrio Mopatis <br />
                <span className="subnameCharTarg">MAGISTER OF PENTOS</span>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="pictureBlock">
              <img className="pictureChar" src={jorah} alt="Jorah" />
              <figcaption className="nameCharTarg">
                Jorah Mormont <br />
                <span className="subnameCharTarg">THE WANDERING KNIGHT</span>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="pictureBlock">
              <img
                className="pictureChar"
                src={swordmasters}
                alt="Unsullied Swordmasters"
              />
              <figcaption className="nameCharTarg">
                Unsullied Swordmasters
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="pictureBlock">
              <img
                className="pictureChar"
                src={pikemen}
                alt="Unsullied Pikemen"
              />
              <figcaption className="nameCharTarg">
                Unsullied Pikemen
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="pictureBlock">
              <img
                className="pictureChar"
                src={mercenaries}
                alt="Stormcrow Mercenaries"
              />
              <figcaption className="nameCharTarg">
                Stormcrow Mercenaries
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="pictureBlock">
              <img
                className="pictureChar"
                src={archers}
                alt="Stormcrow Archers"
              />
              <figcaption className="nameCharTarg">
                Stormcrow Archers
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="pictureBlock">
              <img
                className="pictureChar"
                src={hrakkars}
                alt="Dothraki Hrakkars"
              />
              <figcaption className="nameCharTarg">
                Dothraki Hrakkars
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="pictureBlock">
              <img
                className="pictureChar"
                src={bloodriders}
                alt="Drogos' Bloodriders"
              />
              <figcaption className="nameCharTarg">
                Drogos' Bloodriders
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="pictureBlock">
              <img
                className="pictureChar"
                src={screamers}
                alt="Dothraki Screamers"
              />
              <figcaption className="nameCharTarg">
                Dothraki Screamers
              </figcaption>
            </figure>
          </SwiperSlide>
        </Swiper>
        <button
          className="nextButtonTarg slideButtonTarg"
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <MdNavigateNext className="iconNextTarg" />
        </button>
      </div>
    </section>
  );
}
