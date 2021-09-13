// https://github.com/xiaolin/react-image-gallery
// https://openbase.com/js/react-image-gallery
import React from 'react';
import ImageGallery from 'react-image-gallery';
import appleValleyTrench from '../images/apple-valley-utility-trench.jpeg';
// import bobcat from '../../images/bobcat.jpeg';
// import septic from '../../images/septic.jpeg';
// import compaction from '../../images/compaction.jpeg';
// import grading from '../../images/grading.jpeg';
// import rental from '../../images/rental.jpeg';
// import landClearing from '../../images/land-clearing.jpeg';
const images = [
  {
    original: '../images/apple-valley-utility-trench.jpeg/1015/1000/600',
    thumbnail: '../images/apple-valley-utility-trench.jpeg'
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/'
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/'
  }
];

const Carousel = () => {
  return (
    <>
      <ImageGallery items={images} />
    </>
  );
};

export default Carousel;
