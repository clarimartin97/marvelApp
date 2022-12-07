import React from "react";
import { View, StyleSheet, Image } from "react-native";
import StyledText from "./StyledText.jsx";

const Footer = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: "#e23636",
      }}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn.iconscout.com/icon/free/png-256/marvel-282124.png",
          }}
        />
      </View>

      <View style={styles.footerText}>
        <StyledText fontWeight="bold" fontSize="subheading">
          Copyright @ Clara Martín 2022
        </StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    padding: 20,
    width: 48,
    height: 48,
  },
  container: {
    alignSelf: "center",
  },
  footerText: {
    height: 29,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Footer;
