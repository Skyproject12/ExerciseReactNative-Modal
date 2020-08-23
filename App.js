/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View,StyleSheet, Image, FlatList, TouchableWithoutFeedback, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import ImageCarousel from './ImageCarousel';
const {width} = Dimensions.get('window');

class App extends Component {
  state = {
    isModalVisible: false,
    isModalImage: 0,
  };

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };

  toggleImage = (index) => {
    this.setState({
      isModalImage: index,
      isModalVisible: !this.state.isModalVisible,
    });
  }

  _renderItemFlatList ({item, index}) {
    console.log('sklight', item.image);
    return (
      <TouchableWithoutFeedback  onPress={()=> this.toggleImage(index)}>
        <View style={styles.containerFeedBack}>
          <View style={styles.cotainerBackground}>
            <Image
                source={{
                  uri: item.uri,
                }}
                style={{flex: 1}}
              />
          </View>
          <View style={styles.cotainerBackgroundRight}>
            <Image
                  source={{
                    uri: item.uri,
                  }}
                  style={{flex:1}}
                />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  _renderItemModal(image) {
    let consoleData = [];
    for (let i = this.state.isModalImage; i < image.length; i++){
      consoleData.push(image[i]);
    }
    return (
      <View style={styles.container}>
        <View style={styles.carouselContainer2}>
          <ImageCarousel image={consoleData} />
        </View>
      </View>
    );
  }

  render() {
    const image = [ {
      uri: 'https://i.imgur.com/GImvG4q.jpg',
    },
    {
      uri: 'https://i.imgur.com/Pz2WYAc.jpg',
    },
    {
      uri: 'https://i.imgur.com/IGRuEAa.jpg',
    },
    {
      uri: 'https://i.imgur.com/fRGHItn.jpg',
    },
    {
      uri: 'https://i.imgur.com/WmenvXr.jpg',
    }];
    return (
      <View style={{flex: 1}}>
        {/* <Button title="Show modal" onPress={this.toggleModal} /> */}
        <FlatList
         data={image}
         renderItem={this._renderItemFlatList.bind(this)}
         keyExtractor={(item, index) => index.toString()}
         />
        <Modal
          isVisible={this.state.isModalVisible}
          animationIn={'slideInUp'}
          onBackdropPress={() =>
            this.setState({
              isModalVisible: !this.state.isModalVisible,
            })
          }>
          {this._renderItemModal(image)}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 16,
    padding: 8,
  },
  carouselContainer: {
    height: 150,
    width: width,
    borderWidth: 5,
    borderColor: 'white',
    marginTop: 10,
  },
  carouselContainer2: {
    width: width,
    height: width * 0.8,
    marginTop: 10,
  },
  containerFeedBack: {
    flexDirection: 'row',
  },
  cotainerBackground: {
    flex: 1,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 4,
    paddingRight: 4,
  },
  cotainerBackgroundRight: {
    flex: 1,
    height: 180,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 4,
    paddingRight: 4,
  },
});


export default App;
