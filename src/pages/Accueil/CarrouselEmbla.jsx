import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import image1 from "../../assets/Acc1.png";
import image2 from "../../assets/Acc2.png";
import image3 from "../../assets/Acc3.png";
import "./CarrouselEmbla.css";

const images = [image1, image2, image3];

const CarrouselEmbla = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((img, index) => (
            <div className="embla__slide" key={index}>
              <img
                src={img}
                alt={`Image ${index + 1}`}
                className="embla__slide__img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarrouselEmbla;
