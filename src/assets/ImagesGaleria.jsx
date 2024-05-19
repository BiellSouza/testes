import ImageGallery from 'react-image-gallery';
import PropTypes from "prop-types";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ImagensGaleriaSlides(props) {
  const { slide1, slide2, slide3, slide4, slide5 } = props;

  ImagensGaleriaSlides.propTypes = {
    slide1: PropTypes.any,
    slide2: PropTypes.any,
    slide3: PropTypes.any,
    slide4: PropTypes.any,
    slide5: PropTypes.any,
  };

  const images = [
    {
      original: slide1,
      thumbnail: slide1,
      originalAlt: ' ',
      thumbnailAlt: ' ',
    },
    {
      original: slide2,
      thumbnail: slide2,
      originalAlt: "",
      thumbnailAlt: '',
      
    },
    // {
    //   original: slide3,
    //   thumbnail: slide3,
    //   originalAlt: "",
    //   thumbnailAlt: '',
    // },
    {
        original: slide4,
        thumbnail: slide4,
        originalAlt: "",
        thumbnailAlt: '',
      },
      {
        original: slide5,
        thumbnail: slide5,
        originalAlt: "",
        thumbnailAlt: '',
      },
  ];

  return (
    <div>
      <ImageGallery
        items={images}
        showBullets={true}
        autoPlay={true}
        showFullscreenButton={false}
        useBrowserFullscreen={true}
      />
    </div>
  );
}
