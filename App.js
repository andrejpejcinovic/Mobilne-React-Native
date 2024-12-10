import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Text, View, Pressable } from "react-native";
import { styles } from "./styles";
import { Main, Grid, Stack } from "./components";

export default function App() {
  const [screens, setScreens] = useState(0);
  const [rotations, setRotations] = useState([]);
  const [layout, setLayout] = useState("Grid");

  // State to track current question index for each screen
  const [currentQuestions, setCurrentQuestions] = useState(Array(4).fill(0));

  // State to count how many questions have been answered for each screen
  const [answeredCount, setAnsweredCount] = useState(Array(4).fill(0));

  // State to track completed screens
  const [completedScreens, setCompletedScreens] = useState(Array(4).fill(false));

  // State to track if all screens are completed
  const [allScreensCompleted, setAllScreensCompleted] = useState(false);

  // Mock questions and choices for demonstration purposes
  const questions = [
    { text: "Koliko je 2 + 2?", choices: ["3", "4", "5", "6"] },
    { text: "Glavni grad Francuske?", choices: ["Rim", "Madrid", "Pariz", "Berlin"] },
    { text: "Koliko je 10 / 2?", choices: ["2", "3", "4", "5"] },
    { text: "Koja boja je u dugi?", choices: ["Crvena", "Roza", "Ljubičasta", "Siva"] },
    { text: "Na koliko stupnjeva je vrelište vode?", choices: ["50°C", "100°C", "150°C", "200°C"] },
    { text: "Koji planet je poznat kao Crveni Planet?", choices: ["Zemlja", "Jupiter", "Mars", "Venera"] },
    { text: "Koliko postoji kontinenata?", choices: ["5", "6", "7", "8"] },
    { text: "Korijen iz 64?", choices: ["6", "7", "8", "9"] }
  ];


  useEffect(() => {
    setRotations(Array.from({ length: screens }, () => 0));
    setAnsweredCount(Array(4).fill(0));
    setCompletedScreens(Array(4).fill(false));
    setAllScreensCompleted(false);

    // Initialize each screen with a random question index
    setCurrentQuestions(Array.from({ length: 4 }, () => Math.floor(Math.random() * questions.length)));
  }, [screens]);


  const handleApplyRotation = (index) => {
    setRotations((prev) => [
      ...prev.slice(0, index),
      prev[index] === 360 ? 90 : prev[index] + 90,
      ...prev.slice(index + 1, prev.length),
    ]);
  };

const handleChoiceSelect = (screenIndex) => {
  setAnsweredCount((prev) => {
    const newAnsweredCount = [...prev];
    newAnsweredCount[screenIndex] += 1;

    if (newAnsweredCount[screenIndex] >= 2) {
      setCompletedScreens((prev) => {
        const newCompletedScreens = [...prev];
        newCompletedScreens[screenIndex] = true;
        return newCompletedScreens;
      });

      const activeScreens = newAnsweredCount.slice(0, screens);
      if (activeScreens.every((count) => count >= 2)) {
        setAllScreensCompleted(true);
        setTimeout(() => {
          setScreens(0);
        }, 2000);
      }
    }
    return newAnsweredCount;
  });

  // Randomly select a new question for the selected screen
  setCurrentQuestions((prev) => {
    const newQuestions = [...prev];
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * questions.length);
    } while (newIndex === prev[screenIndex]); // Ensure the new question is different
    newQuestions[screenIndex] = newIndex;
    return newQuestions;
  });
};



  return (
    <View style={styles.container}>
      {screens === 0 && (
        <Main setScreens={setScreens} layout={layout} setLayout={setLayout} />
      )}
      {layout === "Grid" ? (
        <Grid
          screens={screens}
          rotations={rotations}
          handleApplyRotation={handleApplyRotation}
          questions={questions}
          currentQuestions={currentQuestions}
          handleChoiceSelect={handleChoiceSelect}
          answeredCount={answeredCount}
          completedScreens={completedScreens}
          allScreensCompleted={allScreensCompleted}
        />
      ) : (
        <Stack
          screens={screens}
          rotations={rotations}
          handleApplyRotation={handleApplyRotation}
          questions={questions}
          currentQuestions={currentQuestions}
          handleChoiceSelect={handleChoiceSelect}
          answeredCount={answeredCount}
          completedScreens={completedScreens}
          allScreensCompleted={allScreensCompleted}
        />

      )}
      {screens !== 0 && (
        <Pressable
          style={{ ...styles.button, ...styles.hover }}
          onPress={() => setScreens(0)}
        >
          <Text style={styles.text}>B</Text>
        </Pressable>
      )}
      <StatusBar style="auto" />
    </View>
  );
}
