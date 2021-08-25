import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  fullImageView: {
    width: width,
    height: height,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageItemView: {
    flexDirection: 'row',
    margin: 10,
    borderRadius: 5,
    width: width / 2 - 20,
    height: height / 2 - 70,
    backgroundColor: '#edf9fa',
  },
  paginationView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
