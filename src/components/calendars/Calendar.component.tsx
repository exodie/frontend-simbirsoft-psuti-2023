import { FC } from "react";

type Props = {
  type: "lists_matches" | "competitions";
};

export const MainCalendar: FC<Props> = (props) => {
  return (
    <>
      {props.type === "lists_matches" && <>Lists matches</>}
      {props.type === "competitions" && <>Competitions matches</>}
    </>
  );
};
