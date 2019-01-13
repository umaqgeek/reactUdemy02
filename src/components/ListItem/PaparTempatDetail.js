import React from 'react';
import { StyleSheet, Modal, View, Text, Image, Button, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const PaparTempatDetail = (props) => {

  let modalContent = null;
  if (props.tempatSelected) {
    modalContent = (
      <View style={styles.styleModal}>
        <Image source={props.tempatSelected.image} style={styles.styleGambar} />
        <Text>{props.tempatSelected.value}</Text>
      </View>
    );
  }

  return (
    <Modal onRequestClose={props.onTutupModal} visible={props.tempatSelected !== null} style={styles.styleModal} animationType="slide">
      <View style={styles.styleModal}>
        {modalContent}
        <TouchableOpacity
          style={[styles.styleButton, styles.styleButtonDelete]}
          onPress={props.deleteTempat}>
          <Icon
            size={20}
            name="ios-trash"
          />
          <Text>{" Delete"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.styleButton}
          onPress={props.onTutupModal}>
          <Text>{"Close"}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default PaparTempatDetail;

const styles = StyleSheet.create({
  styleGambar: {
    width: 200,
    height: 200,
    marginRight: 10,
    marginBottom: 10
  },
  styleModal: {
    margin: "5%",
    justifyContent: "center",
    alignItems: "center"
  },
  styleButton: {
    width: "100%",
    marginTop: "5%",
    marginLeft: "5%",
    marginRight: "5%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 255, 0.4)",
    borderRadius: 10,
    height: 30
  },
  styleButtonDelete: {
    backgroundColor: "rgba(255, 0, 0, 0.6)",
    flexDirection: "row"
  }
});
