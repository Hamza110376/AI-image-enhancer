import React from 'react'

const UploadImage = (props) => {
    const handleUploadedImage= (e)=>{
        const file= e.target.files[0]
        console.log(file)
       if (file) {
        props.handleUploadedImage(file);
       }

    }
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
      <label
        htmlFor="Upload image here"
        className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-all"
      >
        <input type="file" id="fileInput" onChange={handleUploadedImage} />
      </label>
    </div>
  );
}

export default UploadImage
