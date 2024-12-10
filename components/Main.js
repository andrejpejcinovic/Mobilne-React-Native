import React from "react";
import { styles } from "../styles";
import { Text, View, Pressable, Switch } from "react-native";

const Main = ({ setScreens, layout, setLayout }) => {
  const splits = [1, 2, 3, 4];

  const handleToggle = () => {
    setLayout((prev) => {
      return prev === "Grid" ? "Stack" : "Grid";
    });
  };

  return (
    <>
      <Text>KRATKI KVIZ!</Text>
      <View style={styles.buttonContainer}>
        {splits.map((num) => (
          <Pressable
            key={num}
            style={styles.button}
            onPress={() => setScreens(num)}
          >
            <Text style={styles.text}>{num}</Text>
          </Pressable>
        ))}
      </View>
      <View
        style={{
          display: "flex",
          gap: 12,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Switch
          style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
          onValueChange={handleToggle}
          value={layout === "Stack"}
        />
        <Text>{layout}</Text>
      </View>
    </>
  );
};

export default Main;
