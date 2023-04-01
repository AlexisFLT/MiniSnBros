/* eslint-disable react/jsx-no-constructed-context-values */
// Import Swiper React components
// eslint-disable-next-line import/no-extraneous-dependencies
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
/* eslint-disable import/no-unresolved */
import { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import ImgContext from "@services/Context/ImgContext";
import ImgModalGuardians from "../../modal/ImgModal/GuardiansModal/ImgModalGuardians";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./style.scss";

export default function Guardians() {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const swiperRef = useRef();
  const { mcp } = useContext(ImgContext);

  const sliderSettings = {
    440: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  };

  const handleModalOpen = (card) => {
    setSelectedImage(card);
    setShow(true);
  };

  return (
    <section className="GuardiansPage">
      <h2 className="affTitleGuard">Gardiens de la Galaxie</h2>
      <ImgContext.Provider value={{ mcp }}>
        {show && (
          <ImgModalGuardians
            mcp={selectedImage}
            className="imgModal"
            onClose={() => setShow(false)}
            show={show}
          />
        )}
      </ImgContext.Provider>
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
          {mcp.map((image) => {
            return (
              <SwiperSlide key={image.id}>
                <button
                  type="button"
                  className="buttonModalGuard"
                  onClick={() => handleModalOpen(image)}
                >
                  <figure className="pictureBlock">
                    <img
                      className="pictureCharMCP"
                      src={image.srcF}
                      alt={image.name}
                    />
                    <figcaption className="nameCharGuard">
                      {image.name}
                      <br />
                      <span className="subnameCharNeutr">{image.subname}</span>
                    </figcaption>
                  </figure>
                </button>
              </SwiperSlide>
            );
          })}
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
