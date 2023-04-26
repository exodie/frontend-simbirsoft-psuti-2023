// lib
import { FC } from "react";

// styles
import "./styles/table.scss";

// components
import { CompetitionsTable } from "./components/Competitions.component";
import { CommandsTable } from "./components/Commands.component";

type Props = {
  type: "competitions" | "commands";
};

/**
 * Гланый компонент для отрисовки побочных компонентов
 * @param props 
 * @returns 
 */
export const MainTable: FC<Props> = (props) => {
  return (
    <>
      {props.type === "competitions" && <CompetitionsTable />}
      {props.type === "commands" && <CommandsTable />}
    </>
  );
};
