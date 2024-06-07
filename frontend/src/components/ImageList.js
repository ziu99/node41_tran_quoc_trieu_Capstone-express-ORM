import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/image/list');
        setImages(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1 style={{textAlign:"center",fontSize:"40px", color:"#333"}}>Image List</h1>
      <div className="image-list">
        {images.map(image => (
          <div key={image.imageId}>
             <NavLink to={`/image/${image.imageId}`}>
              <img src={`http://localhost:8080/public/img/${image.imageUrl}`} alt={image.imageName} />
            </NavLink>
            <p style={{fontSize:"20px", fontWeight:"bold"}}>{image.imageName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
