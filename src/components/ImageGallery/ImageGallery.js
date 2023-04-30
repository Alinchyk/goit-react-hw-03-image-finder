import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = images => (
  <ul>
    {images.map(image => (
      <ImageGalleryItem key={image.id} webformatURL={image.webformatURL} />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
