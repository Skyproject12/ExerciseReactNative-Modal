import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';

const {width} = Dimensions.get('window');

export default class ImageCarousel extends Component {
  renderItem = ({item, index}) => {
    const {uri} = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          this.numberCarousel.scrollToIndex(index);
        }}>
        <ImageBackground source={{uri: uri}} style={styles.imageBackground} />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <Carousel
        style={styles.carousel}
        data={this.props.image}
        renderItem={this.renderItem}
        itemWidth={0.9 * width}
        inActiveOpacity={0.3}
        containerWidth={width - 60}
        ref={(c) => {
          this.numberCarousel = c;
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
  },
  item: {
    flex: 1,
    backgroundColor: 'red',
  },
  imageBackground: {
    flex: 2,
    backgroundColor: '#EBEBEB',
  },
  rightTextContainer: {
    marginLeft: 'auto',
    marginRight: -2,
    padding: 3,
    marginTop: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  lowerContainer: {
    flex: 1,
    margin: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  contentText: {
    fontSize: 12,
  },
});
