// lib
import { FC } from "react";

// styles
import { Tooltip, Typography } from "antd";
import "./styles/navbar.scss";

// store
import { useStore } from "../../store/hooks/store.hook";

export const Navbar: FC = () => {
  const { data } = useStore();

  return (
    <nav className="navbar">
      <section className="navbar-navigation">
        <Typography.Title>
          {data.currentPage}
        </Typography.Title>
      </section>
    </nav>
  );
};
