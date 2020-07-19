import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Modal from 'react-native-modal';

class App extends Component {
  state = {
    isModalVisible: true,
  };

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Button title="Show modal" onPress={this.toggleModal} />

        <Modal
          isVisible={this.state.isModalVisible}
          animationIn={'slideInUp'}
          onBackdropPress={() =>
            this.setState({
              isModalVisible: !this.state.isModalVisible,
            })
          }>
          <View style={{width: 300, height: 300, backgroundColor: 'white'}}>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={this.toggleModal} />
          </View>
        </Modal>
      </View>
    );
  }
}

export default App;
