import React from 'react';
import {View, Modal, Image, TouchableOpacity, Text} from 'react-native';

import Styles from './Styles';

export default ImageViewModal = props => {
  const {isModalVisible, imgSrc} = props;

  console.log(isModalVisible, imgSrc);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Modal visible={isModalVisible}>
        <View style={{position: 'absolute', right: 20, top: 20, zIndex: 1000}}>
          <TouchableOpacity onPress={() => props.handleModalVisibility()}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.fullImageView}>
          <Image
            source={{uri: imgSrc}}
            style={{
              width: '100%',
              height: '100%',
              alignSelf: 'center',
              justifyContent: 'center',
            }}
            resizeMode='contain'
          />
        </View>
      </Modal>
    </View>
  );
};
