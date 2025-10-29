import { useState } from "react";
import { type CourseGoal } from "./components/CourseGoalList";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import CourseGoalList from "./components/CourseGoalList";

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleDeleteGoal = (id: number) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };

  const handleAddGoal = () => {
    const newGoal: CourseGoal = {
      id: Math.random(),
      title: "Learn React+ TS",
      description: "Learn it in depth",
    };

    setGoals((prev) => [...prev, newGoal]);
  };

  return (
    <>
      <main>
        <Header image={{ src: goalsImg, alt: "Description" }}>
          <h1>Your Course Goals</h1>
        </Header>
        <button onClick={handleAddGoal}>Add Goal</button>
        <CourseGoalList onDelete={handleDeleteGoal} goals={goals} />
      </main>
    </>
  );
}
