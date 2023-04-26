// lib
import { FC } from "react";

// components
import { Navbar } from "./components/navbar/Navbar.component";
import { MainTable } from "./components/table/Table.component";

const Application: FC = () => {
  return (
    <>
      <Navbar />
      <MainTable type="competitions" />
    </>
  );
};

export default Application;
