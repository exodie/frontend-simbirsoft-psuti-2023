import { FC } from "react";
import { Navbar } from "./components/navbar/Navbar.component";
import { getCompetitions } from "./api/api";

const Application: FC = () => {
  return (
    <>
      <Navbar />
      app: {import.meta.env.VITE_API_TOKEN || "none_token"}
      <button onClick={getCompetitions}>get</button>
    </>
  );
};

export default Application;
