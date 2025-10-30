import { FC, ReactNode } from "react";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
  handleDeleteGoal: (id: number) => void;
};

export type CourseGoalListProps = {
  goals: CourseGoal[];
  onDeleteGoal: (id: number) => void;
};

const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDeleteGoal }) => {
  if (goals.length === 0) {
    return (
      <InfoBox severity="low" mode="hint">
        You have no goals yet. Start adding it!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox severity="medium" mode="warning">
        You are collecting a lot of goals. Don't put much on your plate
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map(({ id, title, description }) => (
          <li key={id}>
            <CourseGoal onDelete={onDeleteGoal} title={title} id={id}>
              <p>{description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
