import React from "react";
import { styles, screenColors } from "../styles";
import { Text, View, Pressable } from "react-native";

const Grid = ({
  screens,
  rotations,
  handleApplyRotation,
  questions,
  currentQuestions,
  handleChoiceSelect,
  answeredCount,
  completedScreens,
  allScreensCompleted
}) => {
  const rows = [0, 2];

  return (
    <>
      {rows.map((row) => {
        return (
          screens > row && (
            <View key={row} style={styles.row}>
              {[row, row + 1].map((col) => (
                screens >= col + 1 && (
                  <View
                    key={col}
                    style={{
                      ...styles.screen,
                      backgroundColor: screenColors[col % screenColors.length],
                    }}
                  >
                    <View style={{ transform: [{ rotate: `${rotations[col] || 0}deg` }] }}>
                      {!completedScreens[col] ? (
                        <>
                          <Text style={styles.text}>
                            {answeredCount[col] === 0 ? "Pitanje broj 1" : "Pitanje broj 2"}
                          </Text>
                          <Text style={styles.questionText}>{questions[currentQuestions[col]].text}</Text>
                          {questions[currentQuestions[col]].choices.map((choice, index) => (
                            <Pressable
                              key={index}
                              style={styles.choiceButton}
                              onPress={() => handleChoiceSelect(col)}
                            >
                              <Text style={styles.choiceText}>{choice}</Text>
                            </Pressable>
                          ))}
                        </>
                      ) : (
                        <Text style={{ color: 'green', marginTop: 10 }}>
                          Zaslon {col + 1} je završio!
                          {allScreensCompleted && ' Sva pitanja su riješena!'}
                        </Text>
                      )}
                    </View>

                    {/* Rotation button */}
                    <Pressable
                      onPress={() => handleApplyRotation(col)}
                      style={styles.rotateButton}
                    >
                      <Text style={styles.text}>R</Text>
                    </Pressable>
                  </View>
                )
              ))}
            </View>
          )
        );
      })}
    </>
  );
};

export default Grid;
