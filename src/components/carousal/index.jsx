import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";
const Carousal = ({ url, page, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const fetchUrl = async (getUrl) => {
    try {
      setLoading(true);
      const res = await fetch(getUrl);
      const data = await res.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") {
      fetchUrl(`${url}?page=1&limit=${limit}`);
    }
  }, [url]);

  if (errorMsg) {
    return <div>Error in fetching data</div>;
  }
  if (!!loading) {
    return <div>Data is loading</div>;
  }

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrev}
      />
      {images && images?.length
        ? images?.map((item, index) => {
            return (
              <img
                src={item?.download_url}
                alt={item?.author}
                key={item?.id}
                className={
                  currentSlide === index
                    ? "current-image"
                    : "current-image hide-current-image"
                }
              />
            );
          })
        : null}

      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNext}
      />
      <span className="circle-indicators">
        {images && images?.length
          ? images?.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicators"
                    : "update-current-indicators"
                }
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default Carousal;
