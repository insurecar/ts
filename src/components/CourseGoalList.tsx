import { FC } from "react";
import CourseGoal from "./CourseGoal";

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

const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDeleteGoal }) => (
  <ul>
    {goals.map(({ id, title, description }) => (
      <li key={id}>
        <CourseGoal onDelete={onDeleteGoal} title={title} id={id}>
          <p>{description}</p>
        </CourseGoal>
      </li>
    ))}
  </ul>
);

export default CourseGoalList;
