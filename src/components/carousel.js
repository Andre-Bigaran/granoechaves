import React, { useState, useEffect, useRef } from "react";
import styles from "../pages/onepage/styles";
import { animateScroll } from "react-scroll";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideContainerRef = useRef(null);
  const items = [
    <div style={styles.divCircle}>
      <div style={styles.containerCircle}>
        <div style={styles.circle}></div>
        <div style={styles.textCircle}>
          <span>DIREITO IMOBILIARIO</span>
        </div>
      </div>

      <div style={styles.containerCircle}>
        <div style={styles.circle}></div>
        <div style={styles.textCircle}>
          <span>DIREITO IMOBILIARIO1</span>
        </div>
      </div>

      <div style={styles.containerCircle}>
        <div style={styles.circle}></div>
        <div style={styles.textCircle}>
          <span>DIREITO IMOBILIARIO2</span>
        </div>
      </div>

      <div style={styles.containerCircle}>
        <div style={styles.circle}></div>
        <div style={styles.textCircle}>
          <span>DIREITO IMOBILIARIO3</span>
        </div>
      </div>
    </div>,
    <div style={styles.divCircle}>
      <div style={styles.containerCircle}>
        <div style={styles.circle}></div>
        <div style={styles.textCircle}>
          <span>DIREITO IMOBILIARIO4</span>
        </div>
      </div>

      <div style={styles.containerCircle}>
        <div style={styles.circle}></div>
        <div style={styles.textCircle}>
          <span>DIREITO IMOBILIARIO5</span>
        </div>
      </div>

      <div style={styles.containerCircle}>
        <div style={styles.circle}></div>
        <div style={styles.textCircle}>
          <span>DIREITO IMOBILIARIO6</span>
        </div>
      </div>

      <div style={styles.containerCircle}>
        <div style={styles.circle}></div>
        <div style={styles.textCircle}>
          <span>DIREITO IMOBILIARIO7</span>
        </div>
      </div>
    </div>,
    <div style={styles.divCircle}>
      <div style={styles.containerCircle}>
        <div style={styles.circle}></div>
        <div style={styles.textCircle}>
          <span>DIREITO IMOBILIARIO8</span>
        </div>
      </div>

      <div style={styles.containerCircle}>
        <div style={styles.circle}></div>
        <div style={styles.textCircle}>
          <span>DIREITO IMOBILIARIO9</span>
        </div>
      </div>

      <div style={styles.containerCircle}>
        <div style={styles.circle}></div>
        <div style={styles.textCircle}>
          <span>DIREITO IMOBILIARIO10</span>
        </div>
      </div>

      <div style={styles.containerCircle}>
        <div style={styles.circle}></div>
        <div style={styles.textCircle}>
          <span>DIREITO IMOBILIARIO11</span>
        </div>
      </div>
    </div>,
  ];

  useEffect(() => {
    const timer = setTimeout(scrollToNextSlide, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex]);

  const scrollToNextSlide = () => {
    const nextIndex = currentIndex + 1 >= items.length ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    animateScroll.scrollToTop({
      containerId: "carousel-container",
      duration: 1000,
      smooth: "easeInOutQuart",
    });
  };

  useEffect(() => {
    const slideContainer = slideContainerRef.current;
    if (slideContainer) {
      const slideWidth = slideContainer.clientWidth;
      slideContainer.scrollTo({
        left: slideWidth * currentIndex,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div style={styles.carousel}>
      <div
        id="carousel-container"
        className="slide-container"
        ref={slideContainerRef}
        style={{
          ...styles.slideContainer,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: "20px",
        }}
      >
        {items[currentIndex]}
      </div>
    </div>
  );
};

export default Carousel;
