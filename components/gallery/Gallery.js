import { useState } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import { galleryImages } from '../../data/gallery-images';
import ImageGallery from 'react-image-gallery';

export default function ImagesGallery() {
  /*
  React.useEffect(() => {
    let shouldCancel = false;

    const call = async () => {
      const response = await axios.get(
        'https://google-photos-album-demo2.glitch.me/4eXXxxG3rYwQVf948'
      );
      if (!shouldCancel && response.data && response.data.length > 0) {
        setImages(
          response.data.map((url) => ({
            original: `${url}=w1024`,
            thumbnail: `${url}=w100`,
          }))
        );
      }
    };
    call();
    return () => (shouldCancel = true);
  }, []);
*/
  return galleryImages ? (
    <ImageGallery items={ galleryImages } showNav={ false } autoPlay={ true } showThumbnails={ false }/>
  ) : null;
}
