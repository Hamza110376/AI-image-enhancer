import React from 'react'

const ShowEnhancedImage = (props) => {
  return (
    <div className="w-80 h-120 bg-[#fff] shadow-md">
      <div className="bg-green-500 w-full h-10 flex items-center justify-center">
        <h4 className="text-white">Your Enhanced image</h4>
      </div>
      <img src={props.enhancedImage} className="w-full h-100" />
    </div>
  );
}

export default ShowEnhancedImage
