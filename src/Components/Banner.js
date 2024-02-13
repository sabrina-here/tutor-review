import React from "react";
import banner from "../images/banner.jpg";

function Banner() {
  const styles = {
    carouselImg: {
      background: "black",
      opacity: "0.4",
    },
  };

  return (
    <div>
      <div className="carousel w-90 bg-black">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner} style={styles.carouselImg} className="w-90" />
          <div className="absolute w-3/4 text-center left-40  top-1/4">
            <h1 className="text-6xl font-bold text-white">
              Review Your Favorite Tutor <br />
              Sir George Simon. <br />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
