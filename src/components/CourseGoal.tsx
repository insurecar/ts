import { type FC, type PropsWithChildren } from "react";

// type CourseGoalType = {
//   title: string;
//   description: string;
//   children: ReactNode;
// };

type CourseGoalProps = PropsWithChildren<{
  title: string;
  id: number;
  onDelete: (id: number) => void;
}>;

const CourseGoal: FC<CourseGoalProps> = ({
  title,
  id,
  onDelete,
  children,
}): JSX.Element => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};
export default CourseGoal;
