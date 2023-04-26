// lib
import { FC } from "react";

// styles
import { Typography } from "antd";
import "./styles/navbar.scss";

// Хотел реализовать табы, не хватает времени
export const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <section className="navbar-navigation">
        <Typography.Title>
          Football API
        </Typography.Title>
      </section>
    </nav>
  );
};
