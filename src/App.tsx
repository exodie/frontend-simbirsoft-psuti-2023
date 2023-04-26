// lib
import { FC } from "react";

// styles
import { Tabs } from "antd";

// components
import { Navbar } from "./components/navbar/Navbar.component";
import { MainTable } from "./components/table/Table.component";

const Application: FC = () => {
  const tabs = [
    {
      label: "Competitions",
      key: "1",
      children: <MainTable type="competitions" />,
    },
    {
      label: "Commands",
      key: "2",
      children: <MainTable type="commands" />,
    },
  ];

  return (
    <>
      <Navbar />

      <Tabs
        className="main-tab"
        defaultActiveKey="1"
        items={tabs}
      />
    </>
  );
};

export default Application;
