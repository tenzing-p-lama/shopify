import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./PhotoUploader.scss";

function PhotoUploader(props) {
  const onDrop = useCallback((acceptedFiles) => {
    props.onDrop(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="uploader">
      <input {...getInputProps()} />
      <img src={props.src} />
    </div>
  );
}

export default PhotoUploader;
