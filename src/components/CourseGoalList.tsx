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
  onDelete: (id: number) => void;
};

const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDelete }) => (
  <ul>
    {goals.map(({ id, title, description }) => (
      <li key={id}>
        <CourseGoal onDelete={onDelete} title={title} id={id}>
          <p>{description}</p>
        </CourseGoal>
      </li>
    ))}
  </ul>
);

export default CourseGoalList;
