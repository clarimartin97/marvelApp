import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText.jsx";

const Footer = () => {
  return (
    <View
      style={{
        marginTop: 20,
        flexDirection: "column",
        backgroundColor: "#e23636",
      }}
    >
      {/*   <View>
        <Image
          style={styles.image}
          source={require("../assets/logoMarvel.svg")}
        />
      </View> */}

      <View style={styles.footerText}>
        <StyledText fontSize="subheading" fontWeight="bold">
          Marvel App
        </StyledText>
      </View>

      <View style={styles.footerText}>
        <StyledText fontSize="subheading">
          Copyright @ Clara Martín 2022
        </StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  /*   image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  }, */
  footerText: {
    marginTop: 8,
    marginBottom: 8,
    height: 25,
    flexDirection: "row",
    paddingBottom: 10,
    paddingLeft: 10,
    justifyContent: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});

export default Footer;
