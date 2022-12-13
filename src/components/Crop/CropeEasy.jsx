import styled from 'styled-components';
import React, { useState } from 'react';
import Cropper from 'react-easy-crop';
import { Button, Slider, Typography } from 'antd';
import { CloseOutlined, ScissorOutlined } from '@ant-design/icons';

import getCroppedImg from './cropImage';


const CropWrapper = styled.div`
  background: #333;
  position: relative;
  height: 400px;
  width: auto;
  min-width: 500px
`;

const CropEasy = ({ photoURL, setOpenCrop, setPhotoURL, setFile }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const cropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const cropImage = async () => {
    try {
      const { file, url } = await getCroppedImg(
        photoURL,
        croppedAreaPixels,
        rotation,
      );
      setPhotoURL(url);
      setFile(file);
      setOpenCrop(false);
    } catch (error) {
      console.log(error);
    }

  };
  return (
    <>
      <CropWrapper>
        <Cropper
          image={photoURL}
          crop={crop}
          zoom={zoom}
          rotation={rotation}
          aspect={2 / 2 }
          onZoomChange={setZoom}
          onRotationChange={setRotation}
          onCropChange={setCrop}
          onCropComplete={cropComplete}
        />
      </CropWrapper>
      <div style={{ flexDirection: 'column', mx: 3, my: 2 }}>
        <div sx={{ width: '100%', mb: 1 }}>
          <div>
            <Typography>Zoom: {zoomPercent(zoom)}</Typography>
            <Slider
              valueLabelDisplay="auto"
              valueLabelFormat={zoomPercent}
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={(value) => setZoom(value)}
            />
          </div>
          <div>
            <Typography>Rotation: {rotation + '°'}</Typography>
            <Slider
              valueLabelDisplay="auto"
              min={0}
              max={360}
              value={rotation}
              onChange={(value) => setRotation(value)}
            />
          </div>
        </div>
        <div style={{
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
        }}
        >
          <Button
            variant="outlined"
            icon={<CloseOutlined />}
            onClick={() => setOpenCrop(false)}
          >
            Ortga
          </Button>
          <Button
            type="primary"
            variant="contained"
            icon={<ScissorOutlined />}
            onClick={cropImage}
          >
            Kesish
          </Button>
        </div>
      </div>
    </>
  );
};

export default CropEasy;

const zoomPercent = (value) => {
  return `${Math.round(value * 100)}%`;
};