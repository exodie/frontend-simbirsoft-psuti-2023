// lib
import React from "react";
import ReactDOM from "react-dom/client";

// components
import Application from "./App.tsx";
import { MainTable } from "./components/table/Table.component.tsx";
import { MainCalendar } from "./components/calendars/Calendar.component.tsx";

// styles
import "./index.scss";

// routers
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StoreProvider } from "./store/providers/store.provider.tsx";
import { ChoiceCompetition } from "./components/table/pages/ChoiceCompetition.component.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Application />} />
          <Route
            path="/table/competitions"
            element={<MainTable type="competitions" />}
          />
          <Route
            path="/table/commands"
            element={<MainTable type="commands" />}
          />
          <Route
            path="/calendar/list"
            element={<MainCalendar type="lists_matches" />}
          />
          <Route
            path="/calendar/competitions"
            element={<MainCalendar type="competitions" />}
          />
          <Route
            path="/table/choice/competition/:id"
            element={<ChoiceCompetition />}
          />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>
);
