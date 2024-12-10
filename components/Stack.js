import React from "react";
import { styles, screenColors } from "../styles";
import { Text, View, Pressable } from "react-native";

const Stack = ({
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
  const cols = [0, 1, 2, 3];

  return (
    <>
      {cols.map((col) => (
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
                    {answeredCount[col] === 0 ? "Question number 1" : "Question number 2"}
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
                  Screen {col + 1} is finished!
                  {allScreensCompleted && ' All screens are completed! Returning to main menu...'}
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
    </>
  );
};

export default Stack;
