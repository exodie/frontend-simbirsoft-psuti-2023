import { FC } from "react";

type Props = {
  type: "league" | "competitions" | "commands";
};

export const MainTable: FC<Props> = (props) => {
  return (
    <>
      {props.type === "league" && <>leagues lists</>}
      {props.type === "competitions" && <>competitions lists</>}
      {props.type === "commands" && <>commands lists</>}
    </>
  );
};
