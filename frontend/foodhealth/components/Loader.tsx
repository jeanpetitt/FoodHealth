import React from "react";
import { ActivityIndicator, Dimensions, Modal, StyleSheet, Text, useWindowDimensions, View } from "react-native";

type LoaderPropsType = {
  show: boolean
}

const Loader = ({ show }: LoaderPropsType) => {
  return (
    <Modal animationType="fade" transparent={true} visible={show}>
      <View
        style={styles.modalView}
      >
        <ActivityIndicator 
          size="large"
          color="#5B005C"
        />
        <Text
          style={styles.text}
        >Processing</Text>
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  modalView: {
    width: 200,
    height: 70,
    backgroundColor: "#fff",
    marginTop: (Dimensions.get("screen").height / 2) - 35,
    marginLeft: (Dimensions.get("screen").width / 2) - 100,
    borderRadius: 10,
    padding: 20,
    flexDirection: "row",
    justifyContent: "flex-start"
  },

  text: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: "bold"
  }
})