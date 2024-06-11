'use client'


import { useState } from 'react';

const Gallery = () => {
  const images = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg',
    'image4.jpg',
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
        <img src={selectedImage} alt="Selected" className="w-[905px] h-[564px] object-cover border rounded-lg" />
      </div>
      <div className="flex justify-center space-x-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`w-24 h-24 object-cover border rounded-lg cursor-pointer ${selectedImage === image ? 'border-blue-500' : 'border-transparent'}`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
