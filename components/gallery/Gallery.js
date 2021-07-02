import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { galleryImages } from '../../data/gallery-images';
import Image from 'next/image';

export default function ImagesGallery() {
  return galleryImages ? (
    <ImageGallery
      items={ galleryImages }
      showNav={ false }
      autoPlay={ true }
      lazyLoad={true}
      showThumbnails={ false }
    />
  ) : null;
}
