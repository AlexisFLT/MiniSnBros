/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-restricted-syntax */
// Import Swiper React components
// eslint-disable-next-line import/no-extraneous-dependencies
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useContext, useRef, useState } from "react";
import ImgContext from "@services/Context/ImgContext";
import ImgModalTarg from "../../modal/ImgModal/Neutral/ImgModalNeutral";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./style.scss";

export default function Neutral() {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const swiperRef = useRef();
  const { asoiaf } = useContext(ImgContext);

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
    <section className="NeutralPage">
      <h2 className="factionTitleNeutr">Neutral</h2>
      <ImgContext.Provider value={{ asoiaf }}>
        <ImgModalTarg
          asoiaf={selectedImage}
          className="imgModal"
          onClose={() => setShow(false)}
          show={show}
        />
      </ImgContext.Provider>
      <div className="swiperBlockNeutr">
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
          {asoiaf
            .filter((elt) => elt.id > 17)
            .map((image) => (
              <SwiperSlide key={image.id}>
                <button
                  type="button"
                  className="buttonModalTarg"
                  onClick={() => handleModalOpen(image)}
                >
                  <figure className="pictureBlockNeutr">
                    <img
                      className="pictureCharNeutr"
                      src={image.src}
                      alt={image.name}
                    />
                    <figcaption className="nameCharNeutr">
                      {image.name}
                      <br />
                      <span className="subnameCharNeutr">{image.subname}</span>
                    </figcaption>
                  </figure>
                </button>
              </SwiperSlide>
            ))}
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
