import { useState } from "react";
import { type CourseGoal } from "./components/CourseGoalList";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleDeleteGoal = (id: number) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };

  const handleAddGoal = () => {
    const newGoal: Omit<CourseGoal, "handleDeleteGoal"> = {
      id: Math.random(),
      title: "Learn React+ TS",
      description: "Learn it in depth",
    };

    setGoals((prev) => [...prev, newGoal as CourseGoal]);
  };

  return (
    <>
      <main>
        <Header image={{ src: goalsImg, alt: "Description" }}>
          <h1>Your Course Goals</h1>
        </Header>
        <NewGoal />
        <CourseGoalList onDeleteGoal={handleDeleteGoal} goals={goals} />
      </main>
    </>
  );
}
