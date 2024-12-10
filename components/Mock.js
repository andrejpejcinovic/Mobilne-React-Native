import React from "react";
import { styles } from "../styles";
import { Pressable, Text, View } from "react-native";

const Mock = ({ index, rotations, isStack }) => {
  const rotation = rotations.length === 0 ? 0 : rotations[index];
  const direction = rotation === 90 || rotation === 270 ? "row" : "column";
  const flexDirection =
    !isStack && direction === "row"
      ? "row"
      : !isStack && direction === "column"
      ? "column"
      : isStack && direction === "row"
      ? "column"
      : "row";

  return (
    <View
      style={{
        display: "flex",
        flexDirection: flexDirection,
        gap: 2,
      }}
    >
      <Pressable style={{ ...styles.button }}>
        <Text style={styles.text}>Q</Text>
      </Pressable>
      <Pressable style={{ ...styles.button }}>
        <Text style={styles.text}>W</Text>
      </Pressable>
      <Pressable style={{ ...styles.button }}>
        <Text style={styles.text}>E</Text>
      </Pressable>
      <Pressable style={{ ...styles.button }}>
        <Text style={styles.text}>R</Text>
      </Pressable>
    </View>
  );
};

export default Mock;
