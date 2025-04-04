import React, { useState } from "react";
import UploadImage from "../components/UploadImage";
import ShowRawImage from "../components/ShowRawImage";
import ShowEnhancedImage from "../components/ShowEnhancedImage";
import { enhancedImageAPI } from "../utils/enhancedImageApi";

const Home = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);

  const handleUploadedImage = async (file) => {
    setUploadedImage(URL.createObjectURL(file));
    console.log(uploadedImage);
    try {
      const enhancedImage = await enhancedImageAPI(file);
      setEnhancedImage(enhancedImage);
    } catch (error) {
      console.log(error);
      alert("Error while enhancing the image. Please try again later.");
    }
  };

  return (
    <div className="w-full h-screen bg-amber-50 flex flex-col gap-10 columns-md items-center justify-center">
      <UploadImage handleUploadedImage={handleUploadedImage} />
      <div className="flex gap-8 ">
        <ShowRawImage rawImage={uploadedImage} />
        <ShowEnhancedImage enhancedImage={enhancedImage?.image} />
      </div>
    </div>
  );
};

export default Home;
