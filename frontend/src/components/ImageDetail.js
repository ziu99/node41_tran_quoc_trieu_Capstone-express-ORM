import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ImageDetail = () => {
  const { imageId } = useParams();
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/image/image-info/${imageId}`);
        setImage(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImage();
  }, [imageId]);

  if (!image) return <div>Loading...</div>;

  return (
    <div style={{marginTop:"20px"}}>
       <img src={`http://localhost:8080/public/img/${image.imageUrl}`} alt={image.imageName} />
      <h1 style={{textAlign:"center"}}>{image.imageName}</h1>
      <p>{image.description}</p>
    </div>
  );
};

export default ImageDetail;
