/* eslint-disable react/jsx-no-constructed-context-values */
// Import Swiper React components
// eslint-disable-next-line import/no-extraneous-dependencies
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
/* eslint-disable import/no-unresolved */
import ImgContext from "@services/Context/ImgContext";
import { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import ImgModal from "../../modal/ImgModal/Targ/ImgModalTarg";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./style.scss";

export default function Targaryen() {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const swiperRef = useRef();
  const { asoiaf } = useContext(ImgContext);
  // const originalTarg = useRef();

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
    <section className="targaryenPage">
      <h2 className="factionTitleTarg">House Targaryen</h2>
      <ImgContext.Provider value={{ asoiaf }}>
        {show && (
          <ImgModal
            asoiaf={selectedImage}
            className="imgModal"
            onClose={() => setShow(false)}
            show={show}
          />
        )}
      </ImgContext.Provider>
      <div className="swiperBlockTarg">
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
          {asoiaf
            .filter((elt) => elt.id <= 17)
            .map((image) => (
              <SwiperSlide key={image.id}>
                <button
                  type="button"
                  className="buttonModalTarg"
                  onClick={() => handleModalOpen(image)}
                >
                  <figure className="pictureBlockTarg">
                    <img
                      className="pictureCharTarg"
                      src={image.src}
                      alt={image.name}
                    />
                    <figcaption className="nameCharTarg">
                      {image.name}
                      <br />
                      <span className="subnameCharTarg">{image.subname}</span>
                    </figcaption>
                  </figure>
                </button>
              </SwiperSlide>
            ))}
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
