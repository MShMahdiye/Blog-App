import React, { useCallback, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'

function Uploader({ stylep, dragActive, styleContainer, name, title }) {

  const [images, setImages] = useState([])

  const onDrop = useCallback((acceptedFiles, rejectFiles) => {
    console.log(acceptedFiles);
    console.log(rejectFiles);
    acceptedFiles.forEach(file => {
      const reader = new FileReader()
      reader.onload = () => {

        setImages(prevState => [...prevState, reader.result])

      }
      reader.readAsDataURL(file)
    });
  }, [])

  useEffect(
    () => {
      console.log('first:', images)
    }
    , [images])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const sendTitle = () => {
    name == 'icon' ?
      console.log('Hi')
      :
      console.log('niioemekl');
  }
  sendTitle()

  console.log("height", name);
  console.log("title", title);

  return (
    <div {...getRootProps()} >
      <input {...getInputProps()} />
      {
        images.length > 0 ?
          <div style={styleContainer}>
            {images.map((image, index) => <img style={stylep} src={image} key={index} />)}
          </div>
          :
          <div>
            {
              isDragActive ?
                <p>Drop the files here ...</p> :
                <div>{dragActive}</div>
            }
          </div>
      }
    </div>
  );
}

export default Uploader;
