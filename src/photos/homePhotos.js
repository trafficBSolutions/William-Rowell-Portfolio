import React, { useState } from 'react';
import images from '../utils/images';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../css/photos.css'
const photos = [
     {
    src: images['project1.png'],
    width: 4032,
    height: 3024
  },
  {
    src: images['tbs.png'],
    width: 4032,
    height: 3024
  },
  {
    src: images['tbs2.png'],
    width: 4032,
    height: 3024
  },
  {
    src: images['tbs3.png'],
    width: 4032,
    height: 3024
  },
  {
    src: images['tbs4.png'],
    width: 4032,
    height: 3024
  },
  {
    src: images['tbs5.png'],
    width: 4032,
    height: 3024
  },
]
export default function HomePhotoGallery() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
const [modalImage, setModalImage] = useState(null);

  const handlePrevious = () => {
    setCurrentPhotoIndex((prevIndex) => Math.max(0, prevIndex - 2));
  };

  const handleNext = () => {
    setCurrentPhotoIndex((prevIndex) => Math.min(photos.length - 1, prevIndex + 2));
  };

  // Slice the photos array to show only three photos based on the currentPhotoIndex
  const visiblePhotos = photos.slice(currentPhotoIndex, currentPhotoIndex + 2);

  return (
    <div className="gallery-container">
      <h2 className="photo-note">PHOTO GALLERY</h2>
      <div className="gallery">
        {visiblePhotos.map((photo, index) => (
<div className="gallery-item" key={index} onClick={() => {
  setModalImage(photo.src);
  setIsModalOpen(true);
}}>
  <img className="images-gal" src={photo.src} alt={`Photo ${index}`} />
</div>
        ))}
        {isModalOpen && (
  <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <img className="images-gal" src={modalImage} alt="Full View" onClick={() => setIsModalOpen(false)}/>
      <button className="close-photo-button" onClick={() => setIsModalOpen(false)}>×</button>
    </div>
  </div>
)}
      </div>
{!isModalOpen && (
  <div className="navigation-buttons">
    {currentPhotoIndex > 0 && (
      <button className="gallery-navigation-arrow-left" onClick={handlePrevious}>
        <FaArrowLeft />
      </button>
    )}
    {currentPhotoIndex + 2 < photos.length && (
      <button className="gallery-navigation-arrow-right" onClick={handleNext}>
        <FaArrowRight />
      </button>
    )}
  </div>
)}
    </div>
  );
}
