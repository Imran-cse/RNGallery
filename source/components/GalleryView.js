import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import ImageViewModal from './ImageViewModal';
import Styles from './Styles';

const IMAGE_PER_PAGE = 4;
const {height, width} = Dimensions.get('window');

export default GalleryView = props => {
  const {imageArr: dummyImages} = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setModalVisibile] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  const noOfPages = Math.ceil(dummyImages.length / IMAGE_PER_PAGE);
  const currentArray =
    dummyImages.length > 4
      ? dummyImages.slice(
          (currentPage - 1) * IMAGE_PER_PAGE,
          currentPage * IMAGE_PER_PAGE,
        )
      : [...dummyImages];

  const handleModalVisibility = () => {
    setModalVisibile(!isModalVisible);
  };

  console.log('currentArray', currentArray, dummyImages, noOfPages);
  return (
    <View style={{flex: 1}}>
      {isModalVisible && (
        <ImageViewModal
          isModalVisible={isModalVisible}
          handleModalVisibility={handleModalVisibility}
          imgSrc={selectedImage}
        />
      )}

      <View
        style={{height: 50, backgroundColor: 'red', justifyContent: 'center'}}>
        <Text
          onPress={() => props.handleToHome()}
          style={{
            color: 'white',
            paddingLeft: 20,
            fontWeight: 'bold',
            fontSize: 17,
          }}>
          {' '}
          {'<-'} Back To Home
        </Text>
      </View>
      <FlatList
        data={currentArray}
        numColumns={2}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => {
              setSelectedImage(item);
              setModalVisibile(true);
            }}
            style={Styles.imageItemView}>
            <Image
              source={{uri: item}}
              style={{width: '100%', height: 300}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      />

      <View style={Styles.paginationView}>
        {currentPage > 1 && (
          <TouchableOpacity onPress={() => setCurrentPage(currentPage - 1)}>
            <Text>Prev</Text>
          </TouchableOpacity>
        )}
        {Array(noOfPages)
          .fill(0)
          .map((_, index) => (
            <TouchableOpacity
              style={{padding: 10}}
              onPress={() => setCurrentPage(index + 1)}>
              <Text
                style={{
                  fontWeight: currentPage === index + 1 ? 'bold' : 'normal',
                }}>
                {index + 1}
              </Text>
            </TouchableOpacity>
          ))}
        {currentPage !== noOfPages && (
          <TouchableOpacity onPress={() => setCurrentPage(currentPage + 1)}>
            <Text>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
