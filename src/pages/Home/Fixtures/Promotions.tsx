import React, { useEffect, useState } from "react";
import Promo2 from "../../../assests/promo2.jpg";
import Promo3 from "../../../assests/promo3.png";
import Promo4 from "../../../assests/promo4.png";
import Promo5 from "../../../assests/promo5.png";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Promotions = () => {
  const Images = [Promo3, Promo4, Promo5, Promo2];
  const [currentImage, setCurrentImage] = useState(0);
  const endOfImageArray = Images.length;

  const handleChangeImage = (operation) => {
    if (operation === "+") {
      // end of array
      if (currentImage === endOfImageArray) {
        setCurrentImage(0);
        return;
      }

      setCurrentImage((prev) => prev + 1);
    }

    if (operation === "-") {
      // start of array
      if (currentImage <= 0) {
        setCurrentImage(Images.length - 1);
        return;
      }

      setCurrentImage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (currentImage === endOfImageArray) {
      setCurrentImage(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentImage((prev) => prev + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  return (
    <div className="w-full relative">
      <button
        onClick={() => handleChangeImage("-")}
        className="absolute left-2 top-[50%] translate-y-[-50%] bg-gray-800 rounded-full p-1"
      >
        <BiChevronLeft size={30} />
      </button>
      <div className="w-full transition duration-300">
        <img
          src={Images[currentImage]}
          alt="promo"
          className="w-full transition duration-300 object-cover rounded-md "
        />
      </div>
      <button
        onClick={() => handleChangeImage("+")}
        className="absolute right-2 top-[50%] translate-y-[-50%]  bg-gray-800 rounded-full p-1"
      >
        <BiChevronRight size={30} />
      </button>
    </div>
  );
};

export default Promotions;
