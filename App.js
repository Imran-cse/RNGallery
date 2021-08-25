import React, {useState} from 'react';
import {Button, View, Image} from 'react-native';

import CameraView from './source/components/CameraView';
import GalleryView from './source/components/GalleryView';

export default App = () => {
  const [isCameraView, setCameraView] = useState(false);
  const [isGalleryView, setGalleryView] = useState(false);
  const [imageSrc, setImageSrc] = useState([]);

  const handleImage = src => {
    const temp = [...imageSrc];
    temp.push(src);
    setImageSrc(temp);
    // setCameraView(false);
    console.log(imageSrc);
  };

  const handleToHome = () => {
    setCameraView(false);
    setGalleryView(false);
  };

  const handleToGallery = () => {
    setGalleryView(true);
    setCameraView(false);
  };

  return (
    <View style={{flex: 1}}>
      {isCameraView && (
        <CameraView
          handleImage={handleImage}
          handleToGallery={handleToGallery}
        />
      )}
      {isGalleryView && (
        <GalleryView imageArr={imageSrc} handleToHome={handleToHome} />
      )}

      {!isCameraView && !isGalleryView && (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Button onPress={() => setCameraView(true)} title="Open Camera" />
          <View style={{marginBottom: 20}} />
          <Button onPress={() => setGalleryView(true)} title="Open Gallery" />
        </View>
      )}
    </View>
  );
};
