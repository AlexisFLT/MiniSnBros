// Import Swiper React components
// eslint-disable-next-line import/no-extraneous-dependencies
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
/* eslint-disable import/no-unresolved */
import ImgContext from "@services/Context/ImgContext";
import { useContext, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
// import ImgModal from "../../modal/ImgModal/ImgModal";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./style.scss";

export default function Targaryen() {
  // const [show, setShow] = useState(false);
  const swiperRef = useRef();
  const { images } = useContext(ImgContext);
  // const originalTarg = useRef();

  const sliderSettings = {
    440: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  };

  return (
    <section className="targaryenPage">
      <h2 className="factionTitleTarg">House Targaryen</h2>
      {/* {show && (
        <ImgModal
          imgSrc={images.drogon}
          imgName="drogon"
          className="imgModal"
          onClose={() => setShow(false)}
          show={show}
        />
      )} */}
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
          {images.map((image) => (
            <SwiperSlide key={image.id}>
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
